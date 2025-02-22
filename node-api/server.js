const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

const connectWithRetry = () => {
    const db = mysql.createPool({
        host: "db",
        user: "root",
        password: "root",
        database: "docker-librairie",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    db.getConnection((err, connection) => {
        if (err) {
            console.error("Erreur de connexion à MySQL :", err);
            console.log("Nouvelle tentative dans 5 secondes...");
            setTimeout(connectWithRetry, 5000);
        } else {
            console.log("✅ Connecté à MySQL !");
            connection.release();
        }
    });

    return db;
};

const db = connectWithRetry();

app.get("/books", (req, res) => {
    db.query("SELECT * FROM books", (err, results) => {
        if (err) {
            console.error("Erreur lors de la récupération des livres :", err);
            res.status(500).json({ error: "Erreur serveur" });
        } else {
            res.json(results);
        }
    });
});

app.use(express.json());

app.post("/create-book", (req, res) => {
    const body = req.body;

    const query = `INSERT INTO books (title, author, category, publication_year, isbn, price, stock, description) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    
    db.query(
        query, 
        [body.title, body.author, body.category, body.publication_year, body.isbn, body.price, body.stock, body.description],
        (err, result) => {
            if (err) {
                console.error("Erreur lors de l'insertion du livre :", err);
                res.status(500).json({ error: "Erreur lors de l'insertion du livre" });
            } else {
                res.status(201).json({ 
                    message: "Livre ajouté avec succès",
                    bookId: result.insertId 
                });
            }
        }
    );
});

app.delete("/delete-book/:id", (req, res) => {
    const bookId = req.params.id;

    const query = "DELETE FROM books WHERE id = ?";
    
    db.query(query, [bookId], (err, result) => {
        if (err) {
            console.error("Erreur lors de la suppression du livre :", err);
            res.status(500).json({ error: "Erreur lors de la suppression du livre" });
        } else {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: "Livre non trouvé" });
            } else {
                res.json({ message: "Livre supprimé avec succès" });
            }
        }
    });
});

app.listen(port, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${port}`);
});

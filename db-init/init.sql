CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL,
    publication_year INT,
    isbn VARCHAR(13),
    price DECIMAL(10, 2),
    stock INT DEFAULT 0,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO books (title, author, category, publication_year, isbn, price, stock, description) VALUES
-- Romans
('Les Misérables', 'Victor Hugo', 'Roman', 1862, '9782253096344', 15.99, 10, 'L''histoire épique de Jean Valjean dans le Paris du 19e siècle'),
('Le Comte de Monte-Cristo', 'Alexandre Dumas', 'Roman', 1844, '9782253098053', 16.99, 8, 'Une histoire de vengeance et de rédemption'),
('Madame Bovary', 'Gustave Flaubert', 'Roman', 1857, '9782070413119', 12.99, 15, 'L''histoire tragique d''Emma Bovary'),

-- Science-Fiction
('Fondation', 'Isaac Asimov', 'Science-Fiction', 1951, '9782207300534', 11.99, 12, 'L''avenir de la galaxie repose sur les calculs de Hari Seldon'),
('Dune', 'Frank Herbert', 'Science-Fiction', 1965, '9782266233200', 13.99, 10, 'L''épopée de Paul Atréides sur la planète Arrakis'),
('1984', 'George Orwell', 'Science-Fiction', 1949, '9782070368228', 10.99, 20, 'Une vision dystopique de l''avenir'),

-- Policier
('Le Nom de la Rose', 'Umberto Eco', 'Policier', 1980, '9782253033134', 14.99, 7, 'Une enquête médiévale dans une abbaye'),
('Les Dix Petits Nègres', 'Agatha Christie', 'Policier', 1939, '9782253073635', 9.99, 15, 'Dix personnes isolées sur une île mystérieuse'),
('Le Silence des Agneaux', 'Thomas Harris', 'Policier', 1988, '9782266072427', 12.99, 8, 'L''enquête de Clarice Starling'),

-- Fantasy
('Le Seigneur des Anneaux', 'J.R.R. Tolkien', 'Fantasy', 1954, '9782266154116', 19.99, 25, 'L''épopée de Frodon en Terre du Milieu'),
('Harry Potter à l''école des sorciers', 'J.K. Rowling', 'Fantasy', 1997, '9782070541270', 15.99, 30, 'Les débuts de Harry Potter à Poudlard'),
('Le Trône de Fer', 'George R.R. Martin', 'Fantasy', 1996, '9782290019757', 14.99, 20, 'Intrigues et batailles dans les Sept Couronnes'),

-- Biographie
('Steve Jobs', 'Walter Isaacson', 'Biographie', 2011, '9782709638821', 22.99, 10, 'La vie du cofondateur d''Apple'),
('Marie Curie', 'Eve Curie', 'Biographie', 1937, '9782070409235', 13.99, 8, 'La vie de la célèbre scientifique'),
('Gandhi', 'Joseph Lelyveld', 'Biographie', 2011, '9782253168331', 16.99, 6, 'La vie du Mahatma Gandhi');

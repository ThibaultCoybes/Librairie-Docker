document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        category: document.getElementById('category').value,
        publication_year: parseInt(document.getElementById('publication_year').value),
        price: parseFloat(document.getElementById('price').value),
        stock: parseInt(document.getElementById('stock').value),
        isbn: document.getElementById('isbn').value,
        description: document.getElementById('description').value
    };

    fetch('/api/create-book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert('Livre ajouté avec succès !');
            window.location.href = '../index.html';
        } else {
            alert('Erreur lors de l\'ajout du livre');
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Une erreur est survenue lors de l\'ajout du livre');
    });
});


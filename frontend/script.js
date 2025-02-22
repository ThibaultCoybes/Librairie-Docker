document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/books')
        .then(response => response.json())
        .then(data => {
            const booksList = document.getElementById("booksContainer")
            booksList.innerHTML = ""
            data.forEach(book => {
                booksList.appendChild(bookCardBuild(book))

            })
        })
        .catch(err => console.log(err))
});

function bookCardBuild(bookData){
    const div = document.createElement('div')
    div.innerHTML = `<div class="book-card" data-categorie="${bookData.category.toLowerCase()}">
        <h3>${bookData.title}</h3>
        <div class="book-info">
            <p><strong>Auteur:</strong> ${bookData.author}</p>
            <p><strong>Catégorie:</strong> <span class="category-tag">${bookData.category}</span></p>
            <p><strong>Année:</strong> ${bookData.publication_year}</p>
            <p><strong>Stock:</strong> ${bookData.stock} exemplaire${bookData.stock > 1 ? 's' : ''}</p>
            <p class="price">${bookData.price} €</p>
        </div>
        <div class="btn-container">
            <button class="edit-btn">Modifier</button>
            <button data-book-id="${bookData.id}" class="remove-btn">Supprimer</button>
        </div>
    </div>`
    return div
}

const categorieFilter = document.getElementById("filterGenre")

categorieFilter.addEventListener("change", (e) => {
    const allBooks = document.querySelectorAll('.book-card')
    allBooks.forEach(book => {
        if(e.target.value !== ""){
            if(book.getAttribute("data-categorie") == e.target.value){
                book.style.display = "block"
            }else{
                book.style.display = "none"
            }
        }else{
            book.style.display = "block"
        }
    });
})

const searchBar = document.getElementById("searchInput")

searchBar.addEventListener("keyup", (e) => {
    let value = e.target.value.toLowerCase()
    const allBooks = document.querySelectorAll(".book-card")
    allBooks.forEach(book => {
        const title = book.querySelector("h3").textContent.toLowerCase()
        if(value !== ""){
            if(title.includes(value)){
                book.style.display = "block"
            }else{
                book.style.display = "none"
            }
        }else{
            book.style.display = "block"
        }
    })
})

function handleDelete(bookId) {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce livre ?")) {
        fetch(`/api/delete-book/${bookId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la suppression');
            }
            return response.json();
        })
        .then(data => {
            alert('Livre supprimé avec succès');
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Erreur lors de la suppression du livre');
        });
    }
}

const listingContainer = document.getElementById('booksContainer')

listingContainer.addEventListener('click', (e)=>{
    if(e.target.classList.contains("remove-btn")){
        const deleteButton = e.target
        const bookId = deleteButton.getAttribute('data-book-id')
        handleDelete(bookId)
    }
})


# 📚 Système de Gestion de Librairie

Une application web permettant de gérer l'inventaire d'une librairie, développée avec Node.js, Express, MySQL et Docker.

## 🚀 Fonctionnalités

- ✨ Affichage de la liste des livres
- ➕ Ajout de nouveaux livres
- 🗑️ Suppression de livres
- 🔍 Recherche de livres par titre
- 🏷️ Filtrage par catégorie

## 🛠️ Technologies Utilisées

- **Frontend** : HTML, CSS, JavaScript vanilla
- **Backend** : Node.js, Express
- **Base de données** : MySQL
- **Conteneurisation** : Docker
- **API** : REST

## 📋 Prérequis

- Docker
- Docker Compose
- Node.js (version 14 ou supérieure)
- npm

## 🔧 Installation

1. Clonez le repository :

git clone https://github.com/ThibaultCoybes/Librairie-Docker.git
cd [nom-du-projet]

2. Installez les dépendances :

npm install

3. Lancez les conteneurs Docker :

docker-compose up -d

4. L'application sera accessible à :
- Frontend : http://localhost:80
- API : http://localhost:3000

## 📁 Structure du Projet

```
├── frontend/
│   ├── index.html
│   ├── script.js
│   ├── styles.css
│   └── book/
│       ├── index.html
│       └── script.js
├── node-api/
│   ├── server.js
│   └── package.json
├── docker-compose.yml
└── README.md
```

## 🔌 API Endpoints

- `GET /books` : Récupère tous les livres
- `POST /create-book` : Ajoute un nouveau livre
- `DELETE /delete-book/:id` : Supprime un livre

## 👥 Auteurs

- Thibault Coybes

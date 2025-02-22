FROM nginx:alpine

COPY index.html /usr/share/nginx/html
COPY /book/create-book.html /usr/share/nginx/html/book/create-book.html
COPY /book/script.js /usr/share/nginx/html/book/script.js
COPY styles.css /usr/share/nginx/html
COPY script.js /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

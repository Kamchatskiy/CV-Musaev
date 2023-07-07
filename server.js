const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Указываем путь к статическим файлам
app.use(express.static(path.join(__dirname, 'build')));

// Обработка маршрута '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запуск сервера
app.listen(port, () => {
  console.log("Сервер запущен на порту ${port}");
});
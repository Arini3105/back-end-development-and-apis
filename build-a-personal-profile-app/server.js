const express = require('express');
const app = express();
const PORT = 3000;

// 2. GET route untuk root path /
app.get('/', (req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});

// 3. GET route untuk /hobbies
app.get('/hobbies', (req, res) => {
  res.send('I cycle, go boating, and play guitar.');
});

// 4. GET route untuk /skills
app.get('/skills', (req, res) => {
  res.send('JavaScript, Node.js, and Express.js!');
});

// 5. GET route untuk /api/profile (JSON)
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Camper Bot',
    hobbies: ['cycling', 'boating', 'guitar'],
    skills: ['JavaScript', 'Node.js', 'Express.js']
  });
});

// 1. Server Express berjalan di port 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
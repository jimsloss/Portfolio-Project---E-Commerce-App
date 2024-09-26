const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello from your Express.js server!!</h1>');
  });
  
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


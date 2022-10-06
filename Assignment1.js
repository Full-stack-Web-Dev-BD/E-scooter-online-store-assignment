const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path')

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public')); 

app.get('/', (req, res) => {
  res.sendFile(`select.html`, { root: path.join(__dirname, './Files') });
});
app.get('/select/:variable', (req, res) => {
  res.sendFile(`${req.params.variable}.html`, { root: path.join(__dirname, './Files') });
}) 

app.get("*", (req, res) => {
  res.send("File Not Found.")
}) 
app.listen(PORT, () => console.log('Listening on port:', PORT));
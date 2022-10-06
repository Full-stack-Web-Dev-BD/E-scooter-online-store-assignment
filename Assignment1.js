const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public')); 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/select/:id', (req, res) => {
  res.sendFile(__dirname + `/views/${req.params.id}.html`);

  // res.sendFile(`${req.params.id}.html`)
}) 

app.get("*", (req, res) => {
  res.render("error.html")
}) 
app.listen(PORT, () => console.log('Listening on port:', PORT));

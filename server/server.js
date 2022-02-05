const express = require('express');
const app = express();
const PORT = 8080;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended:'false'}));

// for parsing application/json
app.use(express.json());
  
// basic root get
app.get('/', function (req, res) {
  res.send('oh Hey World!')
})

app.listen(PORT, () => {
  console.log("Example app listening on port", PORT);
});

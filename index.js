const express = require('express');
const bodyParser = require("body-parser");
const { isAlphaNumeric } = require("./__tests/alphanumeric");

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000

app.get('/', (req, res) => {
    res.sendFile( __dirname  + '/page.html');
})

app.post('/post.html', function(request, res) {
let variable = request.body.variable; 
if (isAlphaNumeric(variable)) res.send(variable)
else res.send('Input non alphanumeric')


});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
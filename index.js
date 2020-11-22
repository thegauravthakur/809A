const express = require('express')
const path = require('express');
const app = express();
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/clister-web.png`)
})
app.listen(process.env.PORT|| 3000, () => console.log('server started'))

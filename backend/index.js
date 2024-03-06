const express = require('express')
const cors = require('cors')
const connectToMongo = require('./data')


const app = express()

// PORT --------------------
const port = 3000

app.use(express.json());
app.use(cors());


app.use('/api/auth', require('./routes/auth'));
app.use('/api/appointment', require('./routes/appointment'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

connectToMongo();
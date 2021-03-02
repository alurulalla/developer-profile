const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

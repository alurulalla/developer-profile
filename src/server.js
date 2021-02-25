const app = require('./app');

const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT;

app.listen(5000, () => {
  console.log(`Server running at ${port}`);
});

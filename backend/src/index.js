const express = require('express');

const app = express();
const config = {
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  port: process.env.SERVER_PORT || 3000,
};

app.get('/', (req, res) => {
  res.send('Hello');
});

const server = app.listen(config.port, () => console.log(`Server is ready. PORT: ${config.port}`));

const shutdown = () => {
  server.close(err => {
    if (!!err) {
      console.error(err);
      process.exit(1);
    }

    process.exit();
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

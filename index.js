const express = require('express');
const chalk = require('chalk');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log(chalk.blue('Received a GET request on /'));
  res.send('🎉 CI/CD Workflow Ready to Start!');
});

app.listen(PORT, () => {
  console.log(chalk.green(`Server running on http://localhost:${PORT}`));
});

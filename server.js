const express = require('express');
const app = express();
app.use(express.static('./dist/test-app-task-manager'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: './dist/test-app-task-manager/'});
});
app.listen(process.env.PORT || 8080);

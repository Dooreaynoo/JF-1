const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/hello', (req, res) => {
  res.json({
    message: '欢迎来到衣绘的 Express 服务',
    status: 'ok',
    time: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`服务器已启动：http://localhost:${port}`);
});

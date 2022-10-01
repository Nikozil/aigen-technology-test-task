const jsonServer = require('json-server');
const server = jsonServer.create();
const db = jsonServer.router('mock-server/db.json');
const cors = require('cors');

server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', '*');
  setTimeout(next, 1000);
});
server.use(jsonServer.bodyParser);

server.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
);
server.options('*', cors());

server.use(db);

server.listen(5000, () => {
  console.log('JSON Server is running');
});

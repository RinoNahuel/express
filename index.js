const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
/* const { faker } = require('@faker-js/faker'); */

const PORT = 3000;

whitelist = ['http://localhost:8080'];

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola, este es mi servidor en express');
});

app.get('/otraRuta', (req, res) => {
  res.send('Mi otra tienda en express');
});

/* app.get('/:id', (req, res) => {
  res.send(`Mi tienda en express ${req.params.id}`);
}); */

/* app.get('/json/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 15
  });
}); */

// Get: Recibir parametros
/* app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },
    {
      name: 'Product 2',
      price: 1000
    }
  ])
}); */

/* app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    nombre: 'Product 1',
    cantidad: 1500
  });
}); */

/* app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId
  });
}); */

routerApi(app);



app.use(logErrors);
//app.use(errorHandler);
app.use(boomErrorHandler);

app.listen(8080, function() {
  console.log('CORS-ENABLEB web server listening on port 8080');
})

app.listen(PORT, () => {
  console.log("My port: " + PORT);
});

// Get Parametros con query
// api.example.com/products
// api.example.com/products?page=1
// api.example.com/products?limit=10&offset=0
// api.example.com/products?region=USA
// api.example.com/products?region=USA&brand=XYZ

/* app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
}); */

/* app.get('/products', (req, res) => {
  const products = [];

  for (let index = 0; index < 100; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()
    })
  }

  res.status(200).json(products);
}); */
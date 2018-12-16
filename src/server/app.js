const app = require('express')();

const middlewares = require('./middlewares');
const apiRoutes = require('./routes/api');

app.use(middlewares.errorHandler);

app.use('/api', apiRoutes);

app.listen(3000, (error) => {
  console.log('listen 3000 port');
});

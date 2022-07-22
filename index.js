import express from 'express';
const app = express();
const port = 8080;
import { graphqlHTTP } from 'express-graphql';
import schema from './src/schema/index.js';

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

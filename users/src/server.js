//const express = require('express');
import express from 'express';
import expressGraphQL from 'express-graphql';

const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));


app.listen(4000, () => console.log('Listening on port 4000'));

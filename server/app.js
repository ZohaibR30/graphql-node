const schema = require('./schema/schema');
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/graphql')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB ', err));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('Listening on Port 3000');
});
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type File {
    id: ID!
    title: String!
    isRead: Boolean!
  }

  type Query {
    getFile(id: ID!): File
    getFiles: [File]
  }

  type Mutation {
    createFile(title: String!, isRead: Boolean!): File
    updateFile(id: ID!, title: String, isRead: Boolean): File
    deleteFile(id: ID!): File
  }
`);


module.exports = schema;

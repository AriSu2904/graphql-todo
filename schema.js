const typeDefs = `#graphql
scalar Date
type Todo {
    id: ID!,
    title: String!,
    description: String!,
    createdAt: Date,
    updatedAt: Date
}

type Query {
    getAll: [Todo!]!,
    getById(id: ID!): Todo!
},

type Mutation {
    addTodo(title: String!, description: String!): Todo
    updateTodo( id: ID!, title: String!, description: String!): Todo
    deleteTodo(id: ID!): Boolean
}
`

export default typeDefs
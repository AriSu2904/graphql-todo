const typeDefs = `#graphql
    scalar Date   
    type Todo {
        id: ID!,
        title: String!,
        description: String!,
        created_at: Date,
        updated_at: Date
    }

    type Query {
        getAll: [Todo!]!,
    }
`

export default typeDefs
const { ApolloServer, gql } = require("apollo-server")

const typeDefs = gql`
    type Query {
        name: String,
        age: Int,
        isMarried: Boolean
    }
`

const resolvers = {
    Query: {
        name: () => {
            return "World!"
        },
        age: () => {
            return 24
        },
        isMarried: () => {
            return true
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) =>{
    console.log("Server is ready at" + url)
})
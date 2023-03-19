const { ApolloServer, gql } = require("apollo-server")
const productsJson = require("./products.json")
const typeDefs = gql`
    type Query {
        name: String,
        age: Int,
        isMarried: Boolean,
        friends: [String],
        exGirlfriends: [String],
        products: [Product]
    }
    type Product {
        name: String,
        type: String,
        cost: Int,
        quantity_available: Int,
        description: String
    }
`

const resolvers = {
    Query: {
        name: () => {
            return "Sankalp Pol"
        },
        age: () => {
            return 24
        },
        isMarried: () => {
            return false
        },
        friends: () => {
            return [
                "Rahul",
                "Rajesh",
                "Rohan",
                "Raj"
            ]
        },
        products: () => {
            return productsJson
        }
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) =>{
    console.log("Server is ready at" + url)
})
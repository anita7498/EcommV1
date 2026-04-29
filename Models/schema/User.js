const UserSchema = `

type User {
    id: ID!,
    name: String!,
    email: String!,
    order: [Order]
}

type Order {
    id: ID!,
    product: String!,
    price: Int!,
    status: String!,
    createdAt: String

}

type Query {
    getUser: [User]
    viewer: [User]
}

`;

export {UserSchema}
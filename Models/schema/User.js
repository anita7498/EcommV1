const UserSchema = `

type User {
    id: ID!,
    name: String!,
    email: String!
}

type Query {
    getUser: [User]
}

`;

export {UserSchema}
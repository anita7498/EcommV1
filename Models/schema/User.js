const UserSchema = `

type User {
    id: ID!,
    name: String!,
    email: String!,
    orders: [Order]
}

type Order {
    id: ID!,
    product: String!,
    price: Int!,
    status: String!,
    createdAt: String
}

input OrderFilter {
    status: String,
    minPrice: Int,
    date: FilterDate
}

input FilterDate {
    startDate: String,
    endDate: String
}

type Query {
    getUser: [User]
    viewer: User
    getMyOrders(filter: OrderFilter): [Order]
}

`;

export {UserSchema}
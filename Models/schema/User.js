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

input PaginationInput {
    limit: Int,
    offset: Int

}

type Query {
    getUser: [User]
    viewer: User
    getMyOrders(filter: OrderFilter, pagination: PaginationInput): [Order]
}

`;

export {UserSchema}
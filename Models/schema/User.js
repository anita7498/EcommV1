const UserSchema = `

type User {
    id: ID!,
    name: String!,
    email: String!,
    orders: OrderResponse
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
    page: Int

}

type PaginationMeta {
    totalRecord: Int!
    page: Int!
    limit: Int!
    totalPages: Int!
    hasNext: Boolean!
    hasPrev: Boolean!
    remaining: Int!
}

type OrderResponse {
    data: [Order]!
    meta: PaginationMeta!
}

type Query {
    getUser: [User]
    viewer: User
    getMyOrders(filter: OrderFilter, pagination: PaginationInput): OrderResponse!
}

`;

export { UserSchema }
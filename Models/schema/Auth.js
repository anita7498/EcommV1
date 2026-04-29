const AuthSchema = `

    type User {
        id: ID!
        email: String!
    }

    input UserCredential {
        email: String!,
        password: String!
    }

    type AuthPayload {
        token: String!
        user: User!
    }

    type Mutation {
        login(input: UserCredential): AuthPayload
  }

`

export { AuthSchema }
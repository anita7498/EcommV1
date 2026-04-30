import { GraphQLError } from "graphql";

function isAuthenticated(context) {
    if (!context.userId) {
        throw new GraphQLError("Please login and continue", {
            extensions: {
                code: "UNAUTHENTICATED"
            }
        });
    }
}

export default isAuthenticated;
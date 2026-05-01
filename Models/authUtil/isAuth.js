import { GraphQLError } from "graphql";

function isAuthenticated(context) {
    if (!context.userId) {
        throw new GraphQLError("Please login and continue", {
            extensions: {
                code: "UNAUTHENTICATED"
            }
        });
    }
    if (context.userId && context.expired) {
        throw new GraphQLError("Session Expired, Please login", {
            extensions: {
                code: "UNAUTHENTICATED"
            }
        });
    }
}

export default isAuthenticated;
import { GraphQLError } from "graphql";
import { authLoginService, authLogoutService } from "../services/authService.js";

const AuthResolver = {

    Mutation: {
        login: async (_, { input }) => {
            const result = authLoginService(input);
            if (!result.success) {
                if (result.code == "INVALID_CREDENTIALS") {
                    throw new GraphQLError("Invalid Credentials", {
                        extensions: {
                            code: "UNAUTHENTICATED"
                        }
                    });
                }
                if (result.code == "INTERNAL_ERROR") {
                    throw new GraphQLError("Internal Server Error", {
                        extensions: {
                            code: "INTERNAL_SERVER_ERROR"
                        }
                    });
                }
            }
            if(result.success){
                return {
                    token: result.token,
                    user: result.user
                }
            }
        },

        logout: async (parent, args, context) => {
            return await authLogoutService(context.token);
        }

    }
};

export { AuthResolver }


import { GraphQLError } from "graphql";
import { authLoginService } from "../services/authService.js";
import { userInfo } from "os";

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

    }
};

export { AuthResolver }


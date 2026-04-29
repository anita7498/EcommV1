import { authLoginService } from "../services/authService.js";

const AuthResolver = {

    Mutation: {
        login: async (_, { input }) => {
            return await authLoginService(input);
        },

    }
};

export { AuthResolver }


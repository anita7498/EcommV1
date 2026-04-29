import { getUserService } from '../services/users.js'

const UserResolver = {
    Query: {
        getUser: async () => {
            return await getUserService();
        },

        viewer: async (_,__,context) => {
            console.log(context);
        }
    }
}

export { UserResolver }
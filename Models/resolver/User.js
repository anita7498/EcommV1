import { getUserService } from '../services/users.js'

const UserResolver = {
    Query: {
        getUser: async () => {
            return await getUserService();
        }
    }
}

export { UserResolver }
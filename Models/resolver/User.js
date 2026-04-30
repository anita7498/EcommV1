import { getUserService, getViewerService, getOrderService } from '../services/users.js'

const UserResolver = {
    Query: {
        getUser: async () => {
            return await getUserService();
        },

        viewer: async (_,__,context) => {
            return await getViewerService(context.userId);
        }
    },

    User: {
        order: async (parent) => {
            return await getOrderService(parent.id);
        }
    }
}

export { UserResolver }
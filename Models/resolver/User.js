import isAuthenticated from '../authUtil/isAuth.js';
import { getUserService, getViewerService, getOrderService } from '../services/users.js'

const UserResolver = {
    Query: {
        getUser: async () => {
            return await getUserService();
        },

        viewer: async (_,__,context) => {
            isAuthenticated(context);
            return await getViewerService(context.userId);
        },

        getMyOrders: async (parent, args, context) => {
            isAuthenticated(context);
            return await getOrderService(context.userId, args);
        }

    },

    User: {
        orders: async (parent) => {
            return await getOrderService(parent.id);
        }
    }
}

export { UserResolver }
import { users, orders } from '../../mockData.js'

const getUserService = () => {
    const data = users.map(({ id, name, email }) => {
        return {
            id,
            name,
            email
        };
    })

    return data;
}

const getViewerService = (userid) => {
    const viewerDetail = users.find((elem) => elem.id == userid)
    return {
        id: viewerDetail.id,
        name: viewerDetail.name,
        email: viewerDetail.email,
    };

}

const getOrderService = (id) => {
    const order = orders.filter((elem) => elem.userId == id)
    return order;

}

export { getUserService, getViewerService, getOrderService };
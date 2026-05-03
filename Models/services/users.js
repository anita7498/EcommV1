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

const getOrderService = (id, { filter = {} } = {}) => {

    let order = orders.filter((elem) => elem.userId == id)

    //Filteration
    if(filter?.status){
        order = order.filter((elem) => elem.status == filter.status.toUpperCase())
    }

    if(filter?.minPrice){
        order = order.filter((elem) => elem.price >= filter.minPrice)
    }

    return order;

}

export { getUserService, getViewerService, getOrderService };
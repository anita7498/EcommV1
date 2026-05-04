import { users, orders } from '../../mockData.js'
import isValidDate from '../authUtil/dateValidator.js';

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

const getOrderService = (id, args = {}) => {

    const { filter = {} } = args
    const { status, minPrice, date = {} } = filter
    const { startDate, endDate } = date

    let order = orders.filter((elem) => elem.userId == id)

    //Filteration
    if (filter?.status) {
        order = order.filter((elem) => elem.status == filter.status.toUpperCase())
    }

    if (filter?.minPrice) {
        order = order.filter((elem) => elem.price >= filter.minPrice)
    }

    //Date format YYYY/MM/DD
    if (startDate || endDate) {

        if (startDate && !isValidDate(startDate)) {
            throw new Error("Invalid startDate");
        }

        if (endDate && !isValidDate(endDate)) {
            throw new Error("Invalid endDate");
        }

        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;


        if (start && end && start > end) {
            throw new Error("startDate cannot be greater than endDate");
        }

        order = order.filter((elem) => {
            const orderDate = new Date(elem.createdAt);

            if (start && orderDate < start) return false;
            if (end && orderDate > end) return false;

            return true;
        })
    }

    return order;

}

export { getUserService, getViewerService, getOrderService };
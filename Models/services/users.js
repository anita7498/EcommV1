import { users } from '../../mockData.js'

const getUserService = () => {
    const data = users.map((elem) => {
        return {
            id: elem.id,
            name: elem.name,
            email: elem.email
        };
    })

    return data;
}

export { getUserService };
import { users } from '../../mockData.js'

const getUserService = () => {
    const data = users.map(({id, name, email}) => {
        return {
            id,
            name,
            email
        };
    })

    return data;
}

export { getUserService };
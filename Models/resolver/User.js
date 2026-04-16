import { users } from '../../mockData.js'

const UserResolver = {
    Query: {
        getUser: () => {
            return users.map((elem) => {
                return { 
                    id: elem.id,
                    name: elem.name,
                    email: elem.email
                };
            })
        }
    }
}

export { UserResolver }
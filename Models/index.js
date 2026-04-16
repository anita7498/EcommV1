import { UserSchema } from "./schema/User.js";

import { UserResolver } from "./resolver/User.js";

const schema = [UserSchema];
const resolvers = [UserResolver];

export { schema, resolvers };
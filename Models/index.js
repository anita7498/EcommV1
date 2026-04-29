import { UserSchema } from "./schema/User.js";
import { AuthSchema } from "./schema/Auth.js";

import { UserResolver } from "./resolver/User.js";
import { AuthResolver } from "./resolver/Auth.js";

const schema = [UserSchema, AuthSchema];
const resolvers = [UserResolver, AuthResolver];

export { schema, resolvers };
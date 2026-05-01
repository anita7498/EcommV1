import { readJSON, writeJSON } from "../authUtil/fileHelper.js";
import { generateToken } from "../authUtil/generateToken.js";
import path from 'path';
import { fileURLToPath } from 'url';

import { users as userdb } from "../../mockData.js";
import { GraphQLError } from "graphql";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function authLoginService({ email, password }) {
    try {
        const user = userdb.find(
            elem => elem.email === email && elem.password === password
        );
        if (!user) {
            return {
                success: false,
                code: "INVALID_CREDENTIALS"
            }
        }
        const token = generateToken();
        const sessions = readJSON(path.join(__dirname, "../authUtil/sessions.json"));
        sessions.push({ token, userId: user.id, expiresAt: Date.now() + 1000 * 60 * 60 });
        const flag = writeJSON(path.join(__dirname, "../authUtil/sessions.json"), sessions);
        if (flag) {
            const updatedSessions = readJSON(path.join(__dirname, "../authUtil/sessions.json"));
            const exists = updatedSessions.some(s => s.token === token);
            if (!exists) {
                throw new GraphQLError("Token Not Stored", {
                    extensions: {
                        code: "INTERNAL_ERROR"
                    }
                });
            }
        } else {
            throw new GraphQLError("no write operation", {
                extensions: {
                    code: "INTERNAL_ERROR"
                }
            });
        }
        return {
            success: true,
            token,
            user
        };
    } catch (err) {
        console.error("Internal Server Error:", err.message);
        return {
            success: false,
            code: "INTERNAL_ERROR"
        };
    }
}

export { authLoginService }
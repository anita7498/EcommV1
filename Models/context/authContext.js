import { error } from "console";
import { readJSON } from "../authUtil/fileHelper.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const authContext = (req) => {
    try {
        const token = req?.headers?.authorization?.replace("Bearer ", "") || "";
        const sessions = readJSON(path.join(__dirname, "../authUtil/sessions.json")) || [];
        const session = sessions.find(elem => elem.token === token);

        if (session) {
            if (Date.now() > session.expiresAt) {
                return {
                    userId: session.userId,
                    token,
                    expired: true
                }
            }
            return {
                userId: session.userId,
                token,
                expired: false
            };
        }

    } catch (err) {
        console.error("Context Error:", err.message);
        return {
            userId: null,
            token: "",
            expired: false
        }
    }

};

export { authContext }
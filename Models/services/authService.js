import { readJSON, writeJSON } from "../authUtil/fileHelper.js";
import { generateToken } from "../authUtil/generateToken.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function authLoginService({ email, password }) {
    const userdb = readJSON(path.join(__dirname, "../authUtil/users.json"));
    const user = userdb.find(
        elem => elem.email === email && elem.password === password
    );
    if (!user) {
        throw new Error("Invalid credentials");
    }

    const token = generateToken();

    const sessions = readJSON(path.join(__dirname, "../authUtil/sessions.json"));
    sessions.push({ token, userId: user.id });
    const success = writeJSON(path.join(__dirname, "../authUtil/sessions.json"), sessions);
    if (success) {
        const updatedSessions = readJSON(path.join(__dirname, "../authUtil/sessions.json"));
        const exists = updatedSessions.some(s => s.token === token);
        if (!exists) {
            throw new Error("Token not stored!");
        }
    }

    return {
        token,
        user
    };
}

export { authLoginService }
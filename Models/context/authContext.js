import { error } from "console";
import { readJSON } from "../authUtil/fileHelper.js";
import path from 'path';
import { fileURLToPath } from 'url';
import { userInfo } from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const authContext = (req) => {
    try {
        const token = req?.headers?.authorization?.replace("Bearer ", "") || "";
        const sessions = readJSON(path.join(__dirname, "../authUtil/sessions.json")) || [];
        const session = sessions.find(elem => elem.token === token);
        
        return {
            userId: session ? session.userId : null,
            token
        };
    } catch(err) {
        console.error("Context Error:", err.message);
        return {
            userId: null,
            token: ""
        }
    }
  
};

export { authContext }
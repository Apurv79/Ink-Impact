import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

console.log("Appwrite URL in AuthService:", conf.appwriteUrl);
export class AuthService {
    client = new Client();
    account;

    constructor() {
        console.log("Appwrite URL in AuthService:", conf.appwriteUrl);
        console.log("Appwrite Project ID in AuthService:", conf.appwriteProjectId);

        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }
    async createEmailPasswordSession(email, password) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("AuthService :: createEmailPasswordSession :: error", error);
            throw error;
        }
    } 

    async createAccount({ name, email, password }) {
        try {
            return await this.account.create(ID.unique(), email, password, name);
        } catch (error) {
            console.log("AuthService :: createAccount :: error", error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("AuthService :: login :: error", error);
            throw error;
        }
    }
    

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService


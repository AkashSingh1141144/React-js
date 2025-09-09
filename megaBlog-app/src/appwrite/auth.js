import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  accout;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.accout = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.accout.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //TODO: call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.accout.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.accout.get();
    } catch (error) {
      console.log("Appwrite servie :: getCurrentUser", error);
    }
    return null;
  }

  async logout() {
    try {
      return await this.accout.deleteSessions();
    } catch (error) {
      console.log("Appwrite servie :: logout", error);
    }
  }
}

const authService = new AuthService();

export default authService;

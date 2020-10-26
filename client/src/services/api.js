import AuthService from "./AuthService";
import UserService from "./UserService";

const DEMO = false;

export class Api {
  constructor(authToken, demo = DEMO) {
    this.token = authToken;
    this.demo = demo;
    this.auth = new AuthService(this, demo);
    this.user = new UserService(this, demo);
  }
}

export default Api;

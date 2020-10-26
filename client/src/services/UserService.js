import axios from "axios";
import { baseURL } from "../config";

class UserService {
  constructor(api) {
    this.api = api;
  }

  async getPendingUsers() {
    const headers = {
      Authorization: this.api.token,
    };
    const { data } = await axios.post(
      `${baseURL}/api/get-pending-verification-users`,
      {},
      { headers }
    );
    return data;
  }
}

export default UserService;

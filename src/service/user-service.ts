import {autowired, service} from "coco-mvc";
import Axios from "../component/axios";

@service()
class UserService {

  @autowired()
  axios: Axios;

  async login(username: string, password: string) {
    const res = await this.axios.post("/user/login", {username, password})
    return res;
  }
}


export default UserService;
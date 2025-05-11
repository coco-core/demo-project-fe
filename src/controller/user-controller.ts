import {autowired, controller} from 'coco-mvc';
import UserApi from "@/api/user-api";
import LocalStorage from "../component/local-storage";

@controller()
class UserController {

  @autowired()
  userApi: UserApi;

  @autowired()
  localStorage: LocalStorage

  async login(username: string, password: string): Promise<any> {
    const { data } = await this.userApi.login(username, password);
    const { success, token} = data;
    if (success) {
      this.localStorage.set('token', token);
    }
    return success;
  }
}

export default UserController;
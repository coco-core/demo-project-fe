import {autowired, controller} from 'coco-mvc';
import UserService from "../service/user-service";
import LocalStorage from "../service/local-storage";

@controller()
class UserController {

  @autowired()
  userService: UserService;

  @autowired()
  localStorage: LocalStorage

  async login(username: string, password: string): Promise<any> {
    const res = await this.userService.login(username, password);
    console.info(res)
    // this.localStorage.set('token', res);
  }
}

export default UserController;
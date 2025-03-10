import {autowired, controller} from 'coco-mvc';
import UserService from "../service/user-service";
import LocalStorageService from "../service/local-storage-service";

@controller()
class UserController {

  @autowired()
  userService: UserService;

  @autowired()
  localStorage: LocalStorageService

  async login(username: string, password: string): Promise<any> {
    const { data } = await this.userService.login(username, password);
    const { success, token} = data;
    if (success) {
      this.localStorage.set('token', token);
    }
    return success;
  }
}

export default UserController;
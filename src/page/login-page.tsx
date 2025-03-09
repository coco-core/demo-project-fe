import {view, route, Router, autowired, bind} from 'coco-mvc';
import UserController from "../controller/user-controller";

@route('/login')
@view()
class LoginPage {
  @autowired()
  userController: UserController

  @autowired()
  router: Router

  @bind()
  async handleClick() {
    await this.userController.login('jcg', '123');
    this.router.navigateTo("/welcome");
  }

  render() {
    return <div>
      <input/>

      <button onClick={this.handleClick}>登录</button>
    </div>;
  }
}

export default LoginPage;

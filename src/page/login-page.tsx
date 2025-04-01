import {page, route, Router, autowired, bind, ref} from 'coco-mvc';
import UserController from "../controller/user-controller";

@route('/login')
@page()
class LoginPage {
  @autowired()
  userController: UserController

  @autowired()
  router: Router

  @bind()
  async handleClick(e) {
    e.preventDefault();
    const username = (this.username.current as any).value
    const password = (this.password.current as any).value
    const success = await this.userController.login(username, password);
    if (success) {
      this.router.navigateTo("/welcome");
    } else {
      window.alert("用户名或密码错误");
    }
  }

  @ref()
  username: { current: HTMLElement }
  @ref()
  password: { current: HTMLElement }

  render() {
    return <form>
      <p>
        <label htmlFor="username">用户名</label>
        <input id="username" name="username" ref={this.username} />
      </p>
      <p>
        <label htmlFor="password">密码</label>
        <input id='password' name="password" type={'password'} ref={this.password} />
      </p>
      <button onClick={this.handleClick}>登录</button>
    </form>;
  }
}

export default LoginPage;

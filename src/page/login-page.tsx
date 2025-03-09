import { view, route } from 'coco-mvc';

@route('/login')
@view()
class LoginPage {
  render() {
    return <div>
      <input/>

      <button>登录</button>
    </div>;
  }
}

export default LoginPage;

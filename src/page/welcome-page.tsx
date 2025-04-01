import { page, route } from 'coco-mvc';

@route('/welcome')
@page()
class WelcomePage {
  render() {
    return <div>welcome to coco-mvc</div>;
  }
}

export default WelcomePage;

import { view, route } from 'coco-mvc';

@route('/welcome')
@view()
class WelcomePage {
  render() {
    return <div>welcome to coco-mvc</div>;
  }
}

export default WelcomePage;

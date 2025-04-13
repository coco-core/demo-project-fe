import { page, route } from 'coco-mvc';
import Counter from "@/view/counter";

@route('/counter')
@page()
class CounterPage{
  render() {
    return <Counter />;
  }
}

export default CounterPage;

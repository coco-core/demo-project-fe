import {reactive, view} from 'coco-mvc';

@view()
class Counter {
  @reactive()
  count: number = 0;

  handleClick = () => {
    this.count += 1;
  }

  render() {
    return <div>
      <button onClick={this.handleClick}>+1</button>
      {this.count}
    </div>;
  }
}

export default Counter;

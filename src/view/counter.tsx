import {bind, reactive, view} from 'coco-mvc';

@view()
class Counter {
  @reactive()
  count: number = 0;

  @bind()
  handleClick () {
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

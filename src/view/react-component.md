
```jsx
  class F extends React.Component {
    state = { count : 1 }

    handleClick = () => {
      this.setState({ count: this.state.count + 1 })
    }

    render() {
      return <div>
        <button onClick={this.handleClick}>+1</button>
        {this.state.count}
      </div>
    }
  }
```

```typescript jsx
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
```

```jsx
  class G extends React.Component {
    constructor() {
      super();
      this.handleClick = this.handleClick.bind(this);
    }
    state = { count : 1 }

    handleClick() {
      this.setState({ count: this.state.count + 1 })
    }

    render() {
      return <div>
        <button id={'btn'} onClick={this.handleClick}>+1</button>
        {this.state.count}
      </div>
    }
  }
```
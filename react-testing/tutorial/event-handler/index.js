const root = ReactDOM.createRoot(document.getElementById('root'));
  
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleClick2 = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button onClick={this.handleClick2}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        {/* Bad because this creates a callback on each render;
            if prop is passed to lower components, components will
            need to be rerendered. */}
        <button onClick={() => this.handleClick()}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    )
  }
}

root.render(<Toggle />);

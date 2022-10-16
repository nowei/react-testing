const root = ReactDOM.createRoot(document.getElementById('root'));

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

// Equiv to:
// class Welcome extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
//   }

// Tip was to refactor as much as possible to reusable, convenient components
function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    )
}

const element = <App />;

root.render(element);
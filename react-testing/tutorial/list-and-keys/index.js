const root = ReactDOM.createRoot(document.getElementById('root'));

function ListItem(props) {
  const number = props.value;
  return <li>{number}</li>
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()} value={number}/>
  );
  return (
    <ul>{listItems}</ul>
  )
}

const numbers = [1, 2, 3, 4, 5];
root.render(<NumberList numbers={numbers} />);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => 
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) => 
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'},
]

root2.render(<Blog posts={posts}/>);
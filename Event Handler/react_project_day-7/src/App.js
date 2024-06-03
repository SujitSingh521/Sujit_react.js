import React,{useState} from "react";
import Post from "./components/Post";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  };
  return (
    
    <div className="App">
      <button onClick={getPosts}>GET POSTS</button>
      <div className="posts-container">
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            
          />
        ))}
      </div>
    </div>
  );
}
export default App;

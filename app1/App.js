import React, { useState } from "react";

import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
function App() {
  const [posts, setPostes] = useState([
    { id: 1, title: "Javascript", body: "Язык программирования" },
    { id: 2, title: "Javascript", body: "Язык программирования" },
    { id: 3, title: "Javascript", body: "Язык программирования" },
  ]);

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста" />
        <input type="text" placeholder="Описание поста" />
        <button>Создать пост</button>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}
export default App;

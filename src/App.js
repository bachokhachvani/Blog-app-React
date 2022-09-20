import React from "react";
import PostCreate from "./components/PostCreate";
import PostList from "./components/Posts/PostList";

export default function App() {
  return (
    <div>
      blog app!!
      <PostCreate></PostCreate>
      <PostList></PostList>
    </div>
  );
}

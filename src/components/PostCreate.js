import React, { useState } from "react";
import axios from "axios";
import { useQueryClient, useMutation, useQuery } from "react-query";

export default function PostCreate() {
  const [post, setPost] = useState("");

  const postCreate = async (data) => {
    const post = await axios.post("http://posts.com/posts/create", data);
    console.log(post);
  };

  const queryClient = useQueryClient();
  const createPost = useMutation(postCreate, {
    onSuccess: () => {
      queryClient.invalidateQueries("getPost");
    },
  });
  const onSubmit = (e) => {
    e.preventDefault();
    // postCreate(post);
    createPost.mutate({ title: post });
    setPost("");
  };
  console.log("saga", post);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>title</label>
        <input
          type="text"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></input>
        <button>submit</button>
      </form>
    </div>
  );
}

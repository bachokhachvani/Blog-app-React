import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default function PostList() {
  const { data, isLoading, isError } = useQuery("getPost", async () => {
    return await axios.get("http://posts.com/posts");
  });
  if (isLoading) {
    return "loading";
  }
  if (isError) {
    return "error";
  }
  const posts = Object.values(data.data);
  console.log("data:", posts);

  return (
    <div
      className="post-container"
      style={{
        margin: "20px",
        display: "grid",
        columnGap: "20px",
        rowGap: "20px",
        gridTemplateColumns: "repeat(2,1fr)",
      }}
    >
      {posts.map((data) => {
        return (
          <div
            key={data.id}
            style={{
              borderRadius: "5px",
              borderStyle: "solid",
              borderColor: "grey",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "16px", margin: "10px" }}>{data.title}</h1>
            <ul>
              {data.comments.map((comment) => {
                return (
                  <CommentList
                    key={comment.id}
                    id={comment.id}
                    status={comment.status}
                    content={comment.content}
                  ></CommentList>
                );
              })}
            </ul>
            <CommentCreate id={data.id}></CommentCreate>
          </div>
        );
      })}
    </div>
  );
}

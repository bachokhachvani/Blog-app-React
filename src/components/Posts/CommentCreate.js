import React, { useState } from "react";
import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

export default function CommentCreate(props) {
  const [comment, setComment] = useState("");
  const queryClient = useQueryClient();
  const createApi = async (data) => {
    const comment = await axios.post(
      `http://posts.com/posts/${props.id}/comments`,
      data
    );
    console.log("sac", comment);
  };

  const createComment = useMutation(createApi, {
    onSuccess: () => {
      queryClient.invalidateQueries("getPost");
    },
  });

  const onClick = (e) => {
    e.preventDefault();
    createComment.mutate({ content: comment });
    setComment("");
  };

  return (
    <div>
      <form onSubmit={onClick}>
        <label>comment</label>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

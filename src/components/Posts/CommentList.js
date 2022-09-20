import React from "react";

export default function CommentList({ id, content, status }) {
  if (status === "pending") {
    return <li>Pending</li>;
  }
  if (status === "rejected") {
    return <li>this comment is rejected</li>;
  }

  return <li>{content}</li>;
}

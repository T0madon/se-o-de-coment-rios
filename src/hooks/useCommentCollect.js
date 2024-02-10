import { useState } from "react";

export default function useCommentCollect() {
  const [comments, setComments] = useState(() => {
    const storedComm = localStorage.getItem("list-comm");
    if (!storedComm) return [];
    return JSON.parse(storedComm);
  });

  const addComment = ({ userEmail, userComentario }) => {
    const id = Math.floor(Math.random() * 1000000);
    const newComment = { id, userEmail, userComentario };
    setComments((atual) => {
      const newState = [...atual, newComment];
      localStorage.setItem("list-comm", JSON.stringify(newState));
      return newState;
    });
  };

  const removeComment = (id) => {
    setComments((atual) => {
      const newState = atual.filter((com) => com.id !== id);
      localStorage.setItem("list-comm", JSON.stringify(newState));
      return newState;
    });
  };

  return { comments, addComment, removeComment };
}

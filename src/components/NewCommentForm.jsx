import { useState } from "react";
import PropTypes from "prop-types";

NewCommentForm.proptypes = {
  addComment: PropTypes.func,
};

export default function NewCommentForm({ addComment }) {
  const [userEmail, setUserEmail] = useState("");
  const [userComentario, setUserComentario] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addComment({ userEmail, userComentario });
    setUserEmail("");
    setUserComentario("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Seção de Comentários</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={userEmail}
        onChange={(ev) => setUserEmail(ev.target.value)}
      />
      <label htmlFor="comentario" value={userComentario}>
        Comentário
      </label>
      <textarea
        id="comentario"
        cols="35"
        rows="8"
        value={userComentario}
        onChange={(ev) => setUserComentario(ev.target.value)}
      ></textarea>
      <button>Enviar Comentário</button>
    </form>
  );
}

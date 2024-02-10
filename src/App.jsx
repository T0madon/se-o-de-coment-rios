import NewCommentForm from "./components/NewCommentForm";
import Comment from "./components/Comment";
import useCommentCollect from "./hooks/useCommentCollect";

export default function App() {
  const { comments, addComment, removeComment } = useCommentCollect();

  return (
    <div className="app">
      <NewCommentForm addComment={addComment} />
      <div className="comments">
        {comments.length > 0 ? (
          comments.map((c) => {
            return (
              <Comment
                id={c.id}
                userComentario={c.userComentario}
                userEmail={c.userEmail}
                onRemove={() => removeComment(c.id)}
              />
            );
          })
        ) : (
          <h2>Seja o primeiro a comentar</h2>
        )}
      </div>
    </div>
  );
}

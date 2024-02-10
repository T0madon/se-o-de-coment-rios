import PropTypes from "prop-types";

Comment.propTypes = {
  id: PropTypes.number,
  userComentario: PropTypes.string,
  userEmail: PropTypes.string,
  onRemove: PropTypes.func,
};

export default function Comment({ id, userComentario, userEmail, onRemove }) {
  let day = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();

  return (
    <div key={id} className="lista-comentario">
      <div className="data">
        <h5 className="userEmail">{userEmail}</h5>
        <h5>
          Em {day}/{month}/{year}
        </h5>
      </div>
      <p className="userText">{userComentario}</p>
      <button className="remove" onClick={onRemove}>
        Remover
      </button>
    </div>
  );
}

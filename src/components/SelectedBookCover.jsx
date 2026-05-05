const SelectedBookCover = function (props) {
  return (
    <div>
      {props.selectedBook ? (
        <div>
          <img
            src={props.selectedBook.img}
            alt={props.selectedBook.title}
            className="w-100"
          />
          <h2>{props.selectedBook.title}</h2>
        </div>
      ) : (
        <p>Nessun libro trovato</p>
      )}
    </div>
  );
};

export default SelectedBookCover;

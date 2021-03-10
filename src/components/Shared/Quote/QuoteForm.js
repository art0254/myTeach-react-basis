import { useState, useEffect } from 'react';

const QuoteForm = ({ title, quote, handleFormSubmit, handleDelete }) => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (quote) {
      setText(quote.text);
      setAuthor(quote.author);
    }
  }, [quote]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const quote = { text, author };
    handleFormSubmit(quote);
  };
  return (
    <div>
      <h1 className="form-title">{title}</h1>
      <div className="bottom-line"></div>
      <form className="form" onSubmit={handlerSubmit}>
        <div className="form-group">
          <label>Quote</label>
          <textarea
            rows="3"
            className="form-control"
            placeholder="Please Insert Text Quote"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            className="form-control"
            placeholder="Please Insert Author"
            type="text"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            value={author}
          />
        </div>
        <div className="manage">
          <button className="btn btn-primary" type="submit">
            SEND
          </button>
          {quote && (
            <button className="btn btn-danger" onClick={handleDelete}>
              DELETE
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;

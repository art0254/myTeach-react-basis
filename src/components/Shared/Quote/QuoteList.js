import { Link } from 'react-router-dom';

const QuoteList = ({ title, quotes }) => {
  return (
    <div className="quote-list">
      <h1 className="quote-title">{title}</h1>
      <div className="bottom-line"></div>
      {quotes.map((quote) => (
        <Link className="links" to={`quotes/${quote.id}`} key={quote.id}>
          <div className="quote-preview">
            <p className="quote-text">{quote.text}</p>
            <p className="quote-author">{quote.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default QuoteList;

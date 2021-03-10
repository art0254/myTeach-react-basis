import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuoteForm from '../Shared/Quote/QuoteForm';
import { useHistory } from 'react-router-dom';

const Edit = ({ title, quotes }) => {
  const { id } = useParams();
  const [quote, setQuote] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:8000/quotes/' + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuote(data);
      });
  }, []);

  const handleFormSubmit = (quoteData) => {
    fetch('http://localhost:8000/quotes/' + quote.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quoteData),
    }).then(() => {
      history.push('/');
    });
  };

  const handleDelete = () => {
    fetch('http://localhost:8000/quotes/' + quote.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div>
      <QuoteForm
        handleFormSubmit={handleFormSubmit}
        handleDelete={handleDelete}
        title="UPDATE"
        quote={quote}
      />
    </div>
  );
};

export default Edit;

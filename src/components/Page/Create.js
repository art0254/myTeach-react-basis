import QuoteForm from '../Shared/Quote/QuoteForm';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const history = useHistory();
  const handleFormSubmit = (quote) => {
    fetch('http://localhost:8000/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quote),
    }).then(() => {
      history.push('/');
    });
  };
  return (
    <div>
      <QuoteForm title="CREATE" handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default Create;

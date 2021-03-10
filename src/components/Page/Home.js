import { useState, useEffect } from 'react';
import QuoteList from '../Shared/Quote/QuoteList';
const Home = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/quotes')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setQuotes(data);
      });
  }, []);

  return (
    <div className="home">
      <QuoteList title="favorite quotes" quotes={quotes} />
    </div>
  );
};
export default Home;

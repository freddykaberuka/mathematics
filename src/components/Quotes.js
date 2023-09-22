import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [quoteError, setQuoteError] = useState('');

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=computers',
          {
            headers: {
              'X-Api-Key': 'QpSPqtCezVld+xnq6vgFXw==wZwkCal20Yi17pOx',
            },
          },
        );
        const data = await response.json();
        setQuote(data[0].quote);
        setIsLoading(false);
      } catch (error) {
        setQuoteError('Error occurred fetching quotes!');
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      fetchQuotes();
    }, 1000);
  }, []);

  return (
    <div>
      <div className="quotes">
        <h2>Computer Quotes</h2>
        {isLoading && <div>Loading...</div>}
        {quoteError && (
          <div>
            Error:
            {' '}
            {quoteError}
          </div>
        )}
        {!isLoading && !quoteError && (
          <div>
            <blockquote>
              `&quot;`
              {quote}
              `&quot;`
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quotes;

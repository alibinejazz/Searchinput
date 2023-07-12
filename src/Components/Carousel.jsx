import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const [allResults, setAllResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('https://mocki.io/v1/6756a93f-6a4d-4f7d-b0aa-d52eedaf7089')
      .then(response => response.json())
      .then(data => {
        setAllResults(data);
        setSearchResults(data);
      });
  }, []);

  const handleSearch = () => {
    if (searchText.trim() === '') {
      setSearchResults(allResults);
    } else {
      const filteredResults = allResults.filter(result =>
        result.name.toLowerCase().includes(searchText.toLowerCase()) ||
        result.experience.toLowerCase().includes(searchText.toLowerCase()) ||
        result.location.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  return (
    <div>
      <div>
        <input data-testid="searchinput" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button data-testid='search' onClick={handleSearch}>Search</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {searchResults.map(result => (
          <div key={result.id} className="card" style={{ width: '18rem' }}>
            <img src={result.image} className="card-img-top" alt="..." />
            <p className="card-text">{result.name}</p>
            <p>{result.price}</p>
            <p>{result.experience}</p>
            <p>{result.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

import React, { useState } from 'react'
import SearchBar from './Searchbar';
import ResultComponent from './FetchApi';
import { Col, Container, Row } from 'react-bootstrap';

function Result() {
    const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
        <Container style={{marginTop:'3rem', marginBottom:'3rem'}} >
        <SearchBar handleSearch={handleSearch} />
        </Container>
         
         <Container>
         <Col>
         <Row>
           
            <ResultComponent searchQuery={searchQuery} />
            
         </Row>
         </Col>
         </Container>
    </div>
  );
}
  

export default Result
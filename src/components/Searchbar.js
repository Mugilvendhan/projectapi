import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchBar({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
    <Form onSubmit={handleSubmit} className="d-flex  align-items-center">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        value={searchQuery}
        onChange={handleChange}
        aria-label="Search"
      />
      <Button type="submit" variant="outline-success">Search</Button>
    </Form>
    </Container>
  );
}

export default SearchBar;

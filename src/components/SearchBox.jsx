import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Srch from '../assets/srch.png';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  // FIX: uncontrolled input - urlKeyword may be undefined
  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <div class="srch">
        <input
          type="text"
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          placeholder="Search products..." />
        <div class="symbol">
          <div class="lens">
            <img src={Srch} width='20px' height='20px' alt="" />
          </div>
        </div>
      </div>
    </Form>
  );
};

export default SearchBox;

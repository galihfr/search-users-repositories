import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getResultSearch, resetResultSearch } from '../store/actions/SearchEngineAction';
import { Button } from '.';

const FormSearch = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');  

  const onChangeHandler = (e) => {
    setUserName(e.target.value);    
  }

  const submitSearchHandle = async (e) => {
    e.preventDefault();    
    dispatch(getResultSearch(userName));
  }

  useEffect(() => {
    if(userName === ""){
      dispatch(resetResultSearch());
    }
  }, [dispatch, userName])

  return (
      <>
        <form className="form-search-container" onSubmit={submitSearchHandle}>      
            <input className="form-search-input" type="search" value={userName} onChange={onChangeHandler} placeholder="Search username" />            
            <Button onClick={submitSearchHandle} color="primary" label="Search" />
        </form>
      </>
  );
};

export default FormSearch;

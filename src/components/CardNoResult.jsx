import React from 'react';
import { IlustrationNoResult } from '../assets/images'

function CardNoResult() {
  return (
    <div className="card-no-result">
        <img src={IlustrationNoResult} alt="no-result" />
        <p>Sorry, Keyword not Found :(</p>
    </div>
  );
}

export default CardNoResult;

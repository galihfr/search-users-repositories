import React from 'react';

const CardRepo = ({data}) => {
  return (
    <div className="card-repo">
        <h4 className="card-repo-name">{data.name}</h4>          
        <a className="card-repo-link" href={data.html_url} target="_blank" rel="noopener noreferrer">View Repository</a>
    </div>
  );
};

export default CardRepo;

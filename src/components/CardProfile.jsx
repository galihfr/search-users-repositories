import React from 'react';
import { IconLocation } from '../assets/images';

const CardProfile = ({data}) => {
  return (
    <div className="card-profile">
        <div className="card-profile-container">
            <div className="card-profile-left">
                {!data.avatar_url ? (
                    " "
                    ) : (
                    <img src={data.avatar_url} alt={data.avatar_url} />
                    )
                }                
            </div>
            <div className="card-profile-right">
                <h3 className="card-profile-name">{data.name}</h3>
                <div className="card-profile-desc">
                    <h4 className="card-profile-user-name">{data.login}</h4>
                    <span className="card-profile-location"><img src={IconLocation} alt="icon-location"/> {data.location}</span>
                </div>
                <h4 className="card-profile-bio">{!data.bio ? "-" : data.bio}</h4>
            </div>
        </div>
    </div>
  );
};

export default CardProfile;

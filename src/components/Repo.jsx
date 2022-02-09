import React from 'react';
import { useSelector } from 'react-redux';
import { CardProfile, CardRepo, CardNoResult } from '.'; 

const Repo = () => {
  let { profile, repositories, errorMessage } = useSelector((state) => state.SearchEngineReducer);      
  return (
    <>
        {errorMessage === true ? (
            <CardNoResult />
        ): (            
            profile.name !== undefined ? (
                <div className="repo-container">
                    <div>
                        <h3 className="repo-title">Profile</h3>
                        <CardProfile data={profile}/>
                    </div>            
                
                    <h3 className="repo-title mt-48">Repositories</h3>
                    <div className="card-repo-container">               
                        {repositories.map((item, index) => (                
                            <div key={index}>
                                <CardRepo data={item}/>
                            </div>                
                        ))} 
                    </div>
                </div>
            ) : " "                    
        )}           
    </>
  );
};

export default Repo;

import React from 'react';
import { GithubLogoTagline } from '../assets/images';
import { FormSearch, Repo } from '../components';

const Home = () => {    
  return (
    <div className="home-page">
      <div className="logo-title">
        <div className="logo-title-icon">
          <img src={GithubLogoTagline} alt="github-logo" />
        </div>
      </div>

      <div className="container">
        <section className="main-content">
          <FormSearch />
          <Repo />
        </section>
      </div>      
    </div>
  );
};

export default Home;

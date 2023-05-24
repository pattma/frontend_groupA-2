import { React, useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import Heroes from '../../components/home/Heroes';
import Activities from '../../components/home/Activities';
import Features from '../../components/home/Features';
import Footer from '../../components/home/Footer';
import Cookies from 'js-cookie';

const Home_Page = function() {

  const token = Cookies.get('TOKEN');

  return (
    <Layout token={token}>
      <div className='home'>
        <Heroes />
        <Activities />
        <Features />
        <Footer />
      </div>
    </Layout>
  );
};

export default Home_Page;
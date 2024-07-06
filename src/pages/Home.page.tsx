/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { MainLayout } from '../layouts';
import Lottie from 'lottie-react';
import home from '../animation/home.json';
import AboutPage from './About.page';
import { ArrowRight } from 'react-feather';
import Cta from './Product.page';
// import { Height } from '@mui/icons-material';

function HomePage() {
  // const style = {
  //   width: '100%',
  //   Height: '100%',
  // };
  return (
    //  bg-red-300 sm:bg-pink-400 md:bg-blue-300 lg:bg-yellow-500 xl:bg-orange-400
    <MainLayout>
      <section className="container mx-auto h-fit bg-gradient-to-b from-[#ef957a]  bg-red-300 sm:bg-pink-400 md:bg-blue-300 lg:bg-yellow-500 xl:bg-orange-200 ">
        <div className=" lg:flex items-center">
          <div className="text-white px-12">
            <h3 className="text-4xl font-bold "> Welcome! to my Website</h3>
            <p className="text-sm">
              Printo offers online printing services like customised Visiting
              Card Printing,Business Cards printing and much more. We deliver
              anywhere in India.
            </p>
            <button
              type="button"
              className="bg-[#0a0a0a] shadow-inner rounded-xl p-2 px-3 my-6 flex"
            >
              View More <ArrowRight />
            </button>
          </div>

          <Lottie animationData={home} />
        </div>
      </section>
      <AboutPage />
      <Cta />
    </MainLayout>
  );
}

export default HomePage;

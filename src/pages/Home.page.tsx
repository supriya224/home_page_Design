/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { MainLayout } from '../layouts';
import Lottie from 'lottie-react';
import home from '../animation/home.json';
import AboutPage from './About.page';
import { ArrowRight } from 'react-feather';
import Cta from './CTA';
import ContactPage from './Contact.page';
import CardData from '../components/core/Card';
import Offer from '../components/domains/Offer';

function HomePage() {
  // bg-red-900 sm:bg-teal-600 md:bg-blue-600 lg:bg-yellow-500 xl:bg-pink-600
  return (
    <MainLayout>
      <section className="container mx-auto h-fit ">
        <div className=" lg:flex items-center">
          <div className="hidden sm:flex w-[300px] h-[300px] bg-gradient-to-b from-[#cba6f8] to-[#e0967f] absolute rounded-full top-[1%] left-[10%]  sm:top-[10%] sm:left-[20%]  md:top-[10%] md:left-[1%]    lg:top-[1%] lg:left-[10%]  xl:top-[4%] xl:left-[5%] translate-x-[50%] translate-y-[50%] blur-[80px] hover:transform hover:scale-100 hover:bg-yellow-300 animate-pulse" />
          <div className=" px-12">
            <h3 className="text-4xl font-bold "> Welcome! to my Website</h3>
            <p className="text-sm relative">
              Printo offers online printing services like customised Visiting
              Card Printing,Business Cards printing and much more. We deliver
              anywhere in India.
            </p>
            <button
              type="button"
              className="bg-[#0a0a0a] relative text-white shadow-inner rounded-xl p-2 px-3 my-6 flex"
            >
              View More <ArrowRight />
            </button>
          </div>
          <Lottie animationData={home} />
        </div>
      </section>
      {/* other components */}
      <div>
        <CardData />
        <AboutPage />
        <Offer />
        <Cta />
        <ContactPage />
      </div>

      <div className="hidden sm:flex w-[250px] h-[250px] overflow-hidden bg-gradient-to-b from-[#cba6f8] to-[#e0967f] absolute rounded-full top-[3%] left-[-50%]  sm:top-[16%] sm:left-[-20%]   md:top-[19%] md:left-[-8%]    lg:top-[20%] z-1 lg:left-[-9%]  xl:top-[21%] xl:left-[-5%] translate-x-[50%] translate-y-[50%] blur-[40px] z-1 hover:transform hover:scale-100  animate-pulse" />
      <div className="hidden sm:flex w-[300px] h-[300px] overflow-hidden bg-gradient-to-b from-[#cba6f8] to-[#e0967f] absolute rounded-full top-[3%] left-[-50%] sm:top-[12%] sm:left-[25%]    md:top-[12%] md:left-[35%]  lg:top-[10%] lg:left-[45%]  xl:top-[12%] xl:right-[-30%] translate-x-[100%] translate-y-[50%] blur-[40px] z-1 hover:transform hover:scale-100  animate-pulse" />

      {/* <div className=" w-[300px] h-[300px] bg-gradient-to-b from-[#cba6f8] to-[#e0967f] absolute rounded-full top-[3%] left-[-50%]  sm:top-[20%] sm:left-[40%]   lg:top-[15%] lg:left-[55%]  xl:top-[4%] xl:left-[5%] translate-x-[50%] translate-y-[50%] blur-[60px] hover:transform hover:scale-100 hover:bg-yellow-300 animate-pulse" /> */}
      {/* <div className=" w-[300px] h-[300px] bg-gradient-to-b from-[#cba6f8] to-[#e0967f] absolute rounded-full top-[3%] left-[-50%]  sm:top-[20%] sm:left-[40%]   lg:top-[15%] lg:left-[55%]  xl:top-[4%] xl:left-[5%] translate-x-[50%] translate-y-[50%] blur-[60px] hover:transform hover:scale-100 hover:bg-yellow-300 animate-pulse" /> */}
    </MainLayout>
  );
}

export default HomePage;

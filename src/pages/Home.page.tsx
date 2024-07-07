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
  return (
    <MainLayout>
      <section className="container mx-auto h-fit ">
        <div className=" lg:flex items-center">
          <div className=" w-[300px] h-[300px] bg-gradient-to-b from-[#cba6f8] to-[#e0967f] absolute rounded-full top-[3%] left-[-50%]  sm:top-[20%] sm:left-[40%]   lg:top-[15%] lg:left-[55%]  xl:top-[4%] xl:left-[5%] translate-x-[50%] translate-y-[50%] blur-[60px] hover:transform hover:scale-100 hover:bg-yellow-300 animate-pulse" />
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
    </MainLayout>
  );
}

export default HomePage;

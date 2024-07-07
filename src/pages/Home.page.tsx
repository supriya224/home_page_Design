/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { MainLayout } from '../layouts';
import Lottie from 'lottie-react';
import home from '../animation/home.json';
import AboutPage from './About.page';
import { ArrowRight } from 'react-feather';
import Cta from './Product.page';
import ContactPage from './Contact.page';
import CardData from '../components/core/Card';
import Offer from '../components/domains/Offer';

function HomePage() {
  return (
    <MainLayout>
      <section className="container mx-auto h-fit  ">
        <div className=" lg:flex items-center">
          <div className=" px-12">
            <h3 className="text-4xl font-bold "> Welcome! to my Website</h3>
            <p className="text-sm">
              Printo offers online printing services like customised Visiting
              Card Printing,Business Cards printing and much more. We deliver
              anywhere in India.
            </p>
            <button
              type="button"
              className="bg-[#0a0a0a] text-white shadow-inner rounded-xl p-2 px-3 my-6 flex"
            >
              View More <ArrowRight />
            </button>
          </div>

          <Lottie animationData={home} />
        </div>
        <CardData />
      </section>

      <AboutPage />
      <Offer />
      <Cta />
      <ContactPage />
    </MainLayout>
  );
}

export default HomePage;

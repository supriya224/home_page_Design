/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import { MainLayout } from '../layouts';
import Lottie from 'lottie-react';
import home from '../animation/home.json';
import AboutPage from './About.page';
import { ArrowRight } from 'react-feather';
import Cta from './CTA';
import ContactPage from './Contact.page';
import CardData from '../components/core/Card';
import Offer from '../components/domains/Offer';
import GallaryPage from './Gallary.page';

function HomePage() {
  // bg-red-900 sm:bg-teal-600 md:bg-blue-600 lg:bg-yellow-500 xl:bg-pink-600
  return (
    <MainLayout>
      <section className="container mx-auto h-fit ">
        <div className="area">
          <ul className="circles">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
        <div className="  lg:order-1 lg:flex items-center">
          <div className="hidden sm:flex w-[300px] h-[300px] bg-gradient-to-b from-[#cba6f8] to-[#e0967f] absolute rounded-full top-[1%] left-[10%]  sm:top-[10%] sm:left-[20%]  md:top-[10%] md:left-[1%]    lg:top-[1%] lg:left-[10%]  xl:top-[4%] xl:left-[5%] translate-x-[50%] translate-y-[50%] blur-[80px] hover:transform hover:scale-100 hover:bg-yellow-300 animate-pulse" />
          <div className=" px-12">
            <h3 className="text-4xl font-bold mt-12 ">
              {' '}
              Welcome! to my Website
            </h3>
            <p className="text-sm relative">
              Printo offers online printing services like customised Visiting
              Card Printing,Business Cards printing and much more. We deliver
              anywhere in India.
            </p>
            <button
              type="button"
              className="bg-orange-500 relative text-white shadow-inner rounded-xl p-2 px-3 my-6 flex"
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
        <GallaryPage />
        <Cta />
        <ContactPage />
      </div>
    </MainLayout>
  );
}

export default HomePage;

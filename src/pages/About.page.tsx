/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/img-redundant-alt */
import Lottie from 'lottie-react';
import { ArrowRight } from 'react-feather';
import about from '../animation/about.json';

function AboutPage() {
  return (
    <section className="container mx-auto w-auto h-fit">
      <div className=" bg-white">
        <div className="container px-6 text-gray-600">
          <div className=" md:space-y-12 md:flex md:gap-6 lg:items-center lg:gap-32 ">
            <div className="w-1/2 flex items-center justify-center md:3/12 lg:w-4/12">
              <Lottie animationData={about} width={300} height={100} />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h3 className="text-2xl text-gray-900 font-bold md:text-4xl">
                About my company
              </h3>
              <p className="mt-6 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p className="mt-4 text-gray-600">
                {' '}
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
              <button
                type="button"
                className="flex items-center my-12  text-sm uppercase font-medium rounded hover:underline focus:outline-none hover:italic hover:bg-red-400"
              >
                <span className="hover:italic flex gap-2 items-center bg-orange-500 hover:bg-orange-500 p-1 px-3 rounded-3xl absolute duration-150">
                  Let's Go <ArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;

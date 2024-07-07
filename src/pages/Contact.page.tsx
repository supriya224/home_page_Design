/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
// <!-- Tailwind Play: https://play.tailwindcss.com/qIqvl7e7Ww  -->
import Lottie from 'lottie-react';
import React from 'react';
import contact from '../animation/contact.json';

function ContactPage() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row w-full gap-32 h-fit my-12  bg-white">
      <div className="px-12 w-full lg:w-1/2 ">
        <h3 className="text-4xl font-medium">Contact us</h3>
        <p className="mt-3">Email us at help@domain.com or message us here:</p>

        <form action="https://api.web3forms.com/submit" className="mt-10">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                type="text"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-orange-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600 peer-focus:dark:text-gray-500">
                Your name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-orange-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor=""
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600 peer-focus:dark:text-gray-500"
              >
                Your email
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows={6}
                // rows="5"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600 peer-focus:dark:text-gray-500">
                Your message
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 rounded-md bg-black px-10 py-2 text-white"
          >
            Send Message
          </button>
        </form>
      </div>
      <Lottie animationData={contact} />
    </div>
  );
}

export default ContactPage;

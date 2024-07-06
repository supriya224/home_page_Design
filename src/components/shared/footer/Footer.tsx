/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Facebook,
  Globe,
  Instagram,
  Mail,
  PhoneCall,
  Twitter,
} from 'react-feather';

function Footer() {
  return (
    <div className="flex items-end w-full container mx-auto">
      <footer className="w-full text-gray-700 bg-gray-200 p-12">
        <div className="grid lg:grid-cols-4 gap-32 ">
          {' '}
          <img
            className="p-12"
            src="https://printo-s3.dietpixels.net/site/Printo-logo/printo-logo_1710143759.png?quality=70&format=webp&w=320"
            alt=""
            loading="lazy"
          />
          <div className="">
            <ul>
              <li className="font-bold">Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Gallary</li>
              <li>Feedback</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="font-bold">Services</li>
              <li>About</li>
              <li>Services</li>
              <li>Gallary</li>
              <li>Feedback</li>
            </ul>
          </div>
          <div className="">
            <ul className="flex gap-3">
              <Facebook />
              <Instagram />
              <Twitter />
              <Globe />
            </ul>
            <span className="mt-7 flex gap-4 items-center">
              <PhoneCall size={18} /> +91 xxxxxxxxxx
            </span>
            <span className="mt-4 flex gap-4 items-center">
              <Mail size={18} /> print.io23@gmail.com
            </span>
          </div>
        </div>

        <div>
          <span className="bg-blue-400" />
          <p className="text-sm my-4 text-gray-500 text-center">
            ©2024 Printo Document Services Pvt. Ltd.. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

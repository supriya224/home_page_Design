import React from 'react';

function GallaryPage() {
  return (
    <section className=" container mx-auto w-auto px-3">
      <div className="w-full">
        <h3 className="text-center font-bold text-3xl">Brands</h3>
        <div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-3">
          {/* Component about Daniel Clifford */}
          <div className="bg-indigo-400 w-full lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0">
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/715/992/non_2x/young-adults-walking-in-the-city-fashionable-elegance-generative-ai-free-photo.jpg"
              alt="Young adults walking in the city"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Component about Jonathan Walters */}
          <div className="bg-gray-900 lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0">
            <img
              src="https://st3.depositphotos.com/1441511/12748/i/450/depositphotos_127486824-stock-photo-woman-in-fashion-clothing-posing.jpg"
              alt="Woman in fashion clothing posing"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Component about Jeanette Harmon */}
          <div className="bg-primary-color-white lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8">
            <img
              src="https://i.pinimg.com/736x/11/8c/e1/118ce1ca8e4bd8cdd15be27d0a057510.jpg"
              alt="Jeanette Harmon"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Component about Patrick Abrams */}
          <div className=" lg:order-4 lg:row-span-2 flex items-center justify-center 2xl:row-span-1 col-span-2 rounded-lg shadow-xl lg:mb-0 lg:pb-14">
            <img
              src="https://i.pinimg.com/736x/c1/d8/ab/c1d8abec7e0f0fb4ae66d7bba679b4a0.jpg"
              alt="Patrick Abrams"
              className="h-full object-cover bg-cover"
              loading="lazy"
            />
          </div>

          {/* Component about Kira Whittle */}
          <div className="bg-primary-color-white lg:order-2 lg:row-span-4 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:pb-4 2xl:h-screen">
            <img
              src="https://images.unsplash.com/photo-1618886614638-80e3c103d31a?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D"
              alt="Kira Whittle"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallaryPage;

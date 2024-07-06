import React from 'react';

function AboutPage() {
  return (
    <section className="container mx-auto h-fit my-1  ">
      <section className="flex justify-between mb-1  ">
        <div className="mt-16">
          <img
            className="border rounded-lg p-12 "
            src="https://cdn.prod.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e298cf3bb93c3f_6309fc4305a883fc64b964cc_DrawKit0041_E-commerce_and_Online_Shopping_Banner.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="px-32 my-12">
          <p className="pt-12 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            beatae cupiditate atque, minus blanditiis placeat repudiandae
            obcaecati non quibusdam tempora numquam, harum dicta, dolores error
            inventore earum tempore cumque quam?
          </p>
          <button
            type="button"
            className="bg-black text-white p-3 rounded-lg my-4 hover:bg-gray-800 translate-x-3"
          >
            View More
          </button>
        </div>
      </section>
      <section className=" flex justify-between mb-5 ">
        <div className="pr-28 my-12">
          <p className="pt-12 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            beatae cupiditate atque, minus blanditiis placeat repudiandae
            obcaecati non quibusdam tempora numquam, harum dicta, dolores error
            inventore earum tempore cumque quam?
          </p>
          <button
            type="button"
            className="bg-black text-white p-3 rounded-lg my-4"
          >
            View More
          </button>
        </div>
        <div className="mt-16">
          <img
            className="border rounded-lg p-12 "
            src="https://cdn.prod.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e298cf3bb93c3f_6309fc4305a883fc64b964cc_DrawKit0041_E-commerce_and_Online_Shopping_Banner.png"
            alt=""
            loading="lazy"
          />
        </div>
      </section>
    </section>
  );
}

export default AboutPage;

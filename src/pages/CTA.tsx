/* eslint-disable import/no-extraneous-dependencies */
function Cta() {
  return (
    <div className="2xl:mx-auto 2xl:container mx-4 py-16">
      <div className="w-full relative flex items-center justify-center">
        <img
          src="https://i.ibb.co/4sYZ8gC/img-2.png"
          alt="dining"
          className="w-full h-full absolute z-0  xl:block"
          loading="lazy"
        />

        <div className="w-fit h-fit my-9 mx-4 bg-gradient-to-b from-[#d9c5f0] to-[#ffc9b9] opacity-85 md:my-16 lg:py-16 py-10 lg:w-full  md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
          <h1 className="text-4xl font-semibold leading-9 text-black text-center">
            Don’t miss out!
          </h1>
          <p className="text-base leading-normal text-center text-black mt-6">
            Subscribe to your newsletter to stay in the loop. Our newsletter is
            sent once in <br />a week on every friday so subscribe to get latest
            news and updates.
          </p>
          <div className="sm:border border-black flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
            <input
              className="border border-black sm:border-transparent text-base w-full font-medium leading-none text-black p-4 focus:outline-none bg-transparent placeholder-black"
              placeholder="Email Address"
            />
            <button
              type="button"
              className="focus:outline-none text-white focus:ring-offset-2 focus:ring border border-black sm:border-transparent w-full sm:w-auto bg-black py-4 px-6 hover:bg-opacity-75"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;

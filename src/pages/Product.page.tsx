/* eslint-disable import/no-extraneous-dependencies */

// import System from '../components/core/cards/Card';

function Cta() {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <div className="w-full">
          <div className="rounded-xl m-5 sm:m-16 shadow-inner shadow-[#2e2538] border-b bg-gradient-to-b from-[#ef957a]  bg-red-300 sm:bg-pink-400 md:bg-blue-300 lg:bg-yellow-500 xl:bg-orange-200 ">
            <div className="flex flex-col p-10 py-12  px-5 sm:px-16 space-y-6  items-center text-center">
              <h1 className="font-bold md:text-6xl text-3xl  tracking-wide ">
                About us
                {/* <span
                  id="spin"
                  className="text-transparent font-normal bg-clip-text pl-2 bg-gradient-to-r from-[#bc8ef1] via-[#f5bbaa] to-[#1d1129] "
                /> */}
                <br />
              </h1>
              <p className="text-gray-100 md:text-2xl text-xl px-18">
                We are India's largest print-on-demand platform with a vision to
                be the world's largest. We have over 15 years of experience in
                the print industry, 28 retail stores across 6 cities, and have
                serviced more than 1 Million customers online & offline.
              </p>
              <button
                type="button"
                className="rounded-lg px-3 w-fit py-2 shadow-lg shadow-[#000000] bg-black text-white sm:rounded-full  md:text-lg sm::py-4 sm:px-6 duration-150 hover:bg-white hover:text-black"
              >
                About More
              </button>
            </div>
          </div>
          {/* <Lottie animationData={animate} />/ */}
        </div>
      </div>
      {/* <System /> */}
    </div>
  );
}

export default Cta;

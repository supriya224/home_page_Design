/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */

import { ArrowRight } from 'react-feather';

function CardData() {
  const cardsData = [
    {
      title: 'Womens Fashion',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ,consequatur. Deleniti hic eum culpa.',
      img: 'https://www.digitaloutlook.com.au/wp-content/uploads/2019/02/fashion-ecommerce.jpg',
    },
    {
      title: 'Men Fashion',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ,consequatur. Deleniti hic eum culpa.',
      img: 'https://cdn.shopify.com/s/files/1/0014/0342/0766/files/denim-jackets_17a0bfec-d63b-482c-bc42-7c63abda7ca6.jpg',
    },
    {
      title: 'Kids Fashion',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ,consequatur. Deleniti hic eum culpa.',
      img: 'https://media.licdn.com/dms/image/D4D12AQFifWk_9B65rQ/article-cover_image-shrink_600_2000/0/1681894467016?e=2147483647&v=beta&t=OcaSyNx0xgcxOTnnumRKJ4D-74hicix1PU3YfIsXc74',
    },
    {
      title: 'Electronics Items',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ,consequatur. Deleniti hic eum culpa.',
      img: 'https://etimg.etb2bimg.com/photo/75179056.cms',
    },
    {
      title: 'Books',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ,consequatur. Deleniti hic eum culpa.',
      img: 'https://m.media-amazon.com/images/I/71airM48HGL._AC_UF350,350_QL80_.jpg',
    },
    {
      title: 'Gifts and cards',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ,consequatur. Deleniti hic eum culpa.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2HRwoZYLDgbHeILkhUGNYhj0npLR78AveyA&s',
    },
    {
      title: 'Kids toys',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ,consequatur. Deleniti hic eum culpa.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwx6XZdWe6qs1KHhOMshUOdekWOcpglmtKyw&s',
    },
    {
      title: 'Cosmetics Products',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ,consequatur. Deleniti hic eum culpa.',
      img: 'https://getsuckered.com/cdn/shop/articles/xhOSEa52pLEX5wYN3oM3PhpE5QPssnpH1597239421.jpg?v=1598372991',
    },
    {
      title: 'Kitchen Products',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ,consequatur. Deleniti hic eum culpa.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSU8ZWcKBerP_ytMroXHEjFKHz2ExZ6Bx7g&s',
    },
    {
      title: 'Winter Collections',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ,consequatur. Deleniti hic eum culpa.',
      img: 'https://www.nicobar.com/cdn/shop/products/1_3b152640-99e0-4a32-b98b-945da03c2147_470x.jpg?v=1667116139',
    },
  ];

  return (
    <section className="container mx-auto w-auto h-fit  my-12">
      <div className="my-3 px-3">
        <div className="flex flex-col md:flex-row my-6 gap-1 mt-8 md:-mx-4">
          <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2 relative  transform hover:scale-95 transition ease-in-out duration-500">
            <img
              src="https://img.freepik.com/premium-vector/big-summer-sale-banner-template-product-podium-with-summer-elements_560226-857.jpg"
              alt=""
              className=" absolute opacity-50 w-full h-full"
              loading="lazy"
            />
            <div className=" bg-black flex items-center h-full ">
              <div className="px-3 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  Summer offer here
                </h2>
                <p className="mt-2 text-xs text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore facere provident molestias ipsam sint voluptatum
                  pariatur.
                </p>
                <button
                  type="button"
                  className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none hover:italic hover:bg-red-400"
                >
                  <span className="hover:italic flex gap-2 items-center hover:bg-red-400 p-1 rounded-lg absolute duration-150">
                    Shop Now <ArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2 relative   transform hover:scale-95 transition ease-in-out duration-500">
            <img
              src="https://png.pngtree.com/background/20210711/original/pngtree-december-hello-white-art-hand-painted-e-commerce-small-fresh-banner-picture-image_1067611.jpg"
              alt=""
              className=" absolute opacity-50 h-full"
              loading="lazy"
            />
            <div className=" bg-black flex items-center h-full ">
              <div className="px-2 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  Winter Collection offer start now
                </h2>
                <p className="mt-2 text-xs text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore facere provident molestias ipsam sint voluptatum
                  pariatur.
                </p>
                <button
                  type="button"
                  className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none hover:italic hover:bg-red-400"
                >
                  <span className="hover:italic flex gap-2 items-center hover:bg-red-400 p-1 rounded-lg absolute duration-150">
                    Shop Now <ArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* banner  */}
        <div className="w-full h-96 shadow-xl shadow-gray-500  bg-contain mt-8 rounded-md overflow-hidden bg-center md:mt-0 relative transform hover:scale-95 transition ease-in-out duration-500">
          <img
            src="https://davidtutera.com/wp-content/uploads/2019/03/cielo-dress-banner-no-text-david-tutera-main-site.jpg"
            alt=""
            className=" absolute opacity-50 w-full h-full"
            loading="lazy"
          />
          <div className=" bg-black flex items-center h-full ">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-white font-semibold relative">
                Wedding sale here
              </h2>
              <p className="mt-2 text-xs text-white relative">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore facere provident molestias ipsam sint voluptatum
                pariatur.
              </p>
              <button
                type="button"
                className="flex items-center relative mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none hover:italic hover:bg-red-400"
              >
                <span className="hover:italic flex gap-2 items-center hover:bg-red-400 p-1 rounded-lg absolute duration-150">
                  Shop Now <ArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* next section */}
      <div className="mt-12 px-3">
        <div className="px-5 ">
          <h3 className="text-xl text-center font-bold xl:text-2xl">
            Our cotegories and collections
          </h3>
          <p className="my-2 text-xl text-center ">Customize your products</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 my-9 h-full w-full">
          {/* Card Component */}
          {cardsData.map((card, index) =>
            card.img ? (
              <div
                key={index}
                className="card w-full h-64 rounded-xl cursor-pointer group perspective"
              >
                <div className="card-inner relative rounded-xl shadow-lg shadow-gray-300 preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  <div className="card-front absolute backface-hidden w-full h-full flex flex-col items-center justify-center">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="card-back absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full text-gray-800">
                      <h4> {card.title}</h4>
                      <p className="text-xs mx-2">{card.content}</p>
                      <button
                        type="button"
                        className="bg-blue-500 p-2 px-4 font-semibold text-white rounded-full absolute bottom-10 delay-500 duration-800 scale-75 group-hover:scale-100"
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
}

export default CardData;

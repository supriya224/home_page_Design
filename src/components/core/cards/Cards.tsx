import React from 'react';

function Cards() {
  return (
    <section className="container mx-auto w-auto h-auto">
      <h3 className="text-4xl text-center py-12">Our products</h3>
      <div className="flex justify-center flex-wrap my-5 gap-12">
        <select
          name=""
          id=""
          className="px-12 outline-none rounded-xl p-2 border"
        >
          <option>Womens</option>
          <option>Tops</option>
          <option>Jackets</option>
          <option>jeans</option>
        </select>
        <select
          name=""
          id=""
          className="px-12 outline-none rounded-xl p-2  border"
        >
          <option>Electronics</option>
          <option>Mobile</option>
          <option>Laptop</option>
          <option>Freez</option>
          <option>Washing Machine</option>
        </select>
        <select
          name=""
          id=""
          className="px-12 outline-none rounded-xl p-2  border"
        >
          <option>Cards</option>
          <option>For Wedding</option>
          <option>For Birthday</option>
          <option>For party</option>
        </select>
        <select
          name=""
          id=""
          className="px-12 outline-none rounded-xl p-2  border"
        >
          <option>Winter</option>
          <option>Jackets</option>
          <option>sweaters</option>
          <option>Hoodies</option>
        </select>
      </div>

      <section className="flex flex-wrap justify-center gap-8 pb-7">
        <div className="bg-gray-100 w-56 h-fit rounded-lg border">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5oasRSpHwOCqG4jFLEiFmkzoaWty0CbGbA&s"
            alt=""
            width={900}
            className=""
          />
          <div className="px-3 py-5">
            <h3 className="font-bold">Fashion</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              consequatur. Deleniti hic eum culpa.
            </p>
            <button type="button" className="underline float-end pb-5">
              View More
            </button>
          </div>
        </div>

        <div className="bg-gray-100 w-56 h-fit rounded-lg border">
          <img
            src="https://grind.studio/wp-content/uploads/2021/11/Entrepreneurship-books-scaled.jpg"
            alt=""
            className="w-full h-32"
          />
          <div className="px-3 py-5">
            <h3 className="font-bold">Books</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              consequatur. Deleniti hic eum culpa.
            </p>
            <button type="button" className="underline float-end pb-5">
              View More
            </button>
          </div>
        </div>
        <div className="bg-gray-100 w-56 h-fit rounded-lg border">
          <img
            src="https://img.paisawapas.com/ovz3vew9pw/2021/10/06223906/amazon-trending.jpg"
            alt=""
            className="w-full h-32"
          />
          <div className="px-3 py-5">
            <h3 className="font-bold">Electroincs</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              consequatur. Deleniti hic eum culpa.
            </p>
            <button type="button" className="underline float-end pb-5">
              View More
            </button>
          </div>
        </div>
        <div className="bg-gray-100 w-56 h-fit rounded-lg border">
          <img
            src="https://i.pinimg.com/736x/b2/6b/f6/b26bf672114fca4a0061b1aa4ddcc000.jpg"
            alt=""
            className="w-full h-32"
          />
          <div className="px-3 py-5">
            <h3 className="font-bold">Grocery</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              consequatur. Deleniti hic eum culpa.
            </p>
            <button type="button" className="underline float-end pb-5">
              View More
            </button>
          </div>
        </div>
        <div className="bg-gray-100 w-56 h-fit rounded-lg border">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToknYkflsgnOM4MgeMwTjYsgGlLxsBb8o95A&s"
            alt=""
            className="w-full h-32"
          />
          <div className="px-3 py-5">
            <h3 className="font-bold">Gifts</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              consequatur. Deleniti hic eum culpa.
            </p>
            <button type="button" className="underline float-end pb-5">
              View More
            </button>
          </div>
        </div>
        <div className="bg-gray-100 w-56 h-fit rounded-lg border">
          <img
            src="https://ecommerceaward.org/new21/wp-content/uploads/2022/09/Correo_Compras.jpg"
            alt=""
            className="w-full h-32"
          />
          <div className="px-3 py-5">
            <h3 className="font-bold">Awards and Mementos</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              consequatur. Deleniti hic eum culpa.
            </p>
            <button type="button" className="underline float-end pb-5">
              View More
            </button>
          </div>
        </div>
        <div className="bg-gray-100 w-56 h-fit rounded-lg border">
          <img
            src="https://static.india.com/wp-content/uploads/2017/11/Winter-style.jpg"
            alt=""
            width={900}
            className=""
          />
          <div className="px-3 py-5">
            <h3 className="font-bold">Winter</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              consequatur. Deleniti hic eum culpa.
            </p>
            <button type="button" className="underline float-end pb-5">
              View More
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Cards;

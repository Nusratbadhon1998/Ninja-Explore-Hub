import React from "react";

function Review() {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="relative px-6 py-3 text-stone-700 group max-w-2xl mx-auto my-8  text-center xl:col-span-2 xl:text-left">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-stone-600"></span>
            <span className="relative space-y-6">
              <h2
                data-aos="fade-right"
                data-aos-duration="1200"
                className="text-4xl text-stone-100 font-bold pt-5"
              >
                What Clients say about Us!!
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="1200"
                className="dark:text-gray-600 text-stone-100"
              >
                Discover the Ultimate Adventure Hub at Ninja Explore Hub, Where
                Every Journey Begins. Located in a Prime Destination, this
                Exquisite Hub Personifies Unrivaled Exploration and Thrills.
                
              </p>
            </span>
          </div>

          <div className="p-6 xl:col-span-3">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div
                  data-aos="fade-down"
                  data-aos-duration="900"
                  className="p-6 mt-12 rounded shadow-md dark:bg-gray-50  bg-[#2b2739] text-stone-200 border border-stone-800"
                >
                  <p className="">
                  At Ninja Explore Hub, I experienced a level of luxury and sophistication like never before. The opulent interiors, adorned with the finest materials and meticulous craftsmanship, left me speechless. 
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?1"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Leroy Jenkins</p>
                      <p className="text-sm dark:text-gray-600">
                        Russia
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-duration="900"
                  className="p-6 rounded shadow-md dark:bg-gray-50  bg-[#2b2739] text-stone-200 border border-stone-800"
                >
                  <p>
                  It was truly a haven of luxury and convenience, where every need was anticipated and effortlessly fulfilled. Ninja Explore Hub has set a new standard for excellence, and I can't wait to return for another unforgettable stay
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?2"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Leroy Jenkins</p>
                      <p className="text-sm dark:text-gray-600">
                        Netherlands
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4 ">
                <div
                  data-aos="fade-up"
                  data-aos-duration="900"
                  className="p-6 rounded shadow-md dark:bg-gray-50 bg-[#2b2739] text-stone-200 border border-stone-800"
                >
                  <p>
                  Ninja Explore Hub has set a new standard for luxury travel, and I can't wait to return for another indulgent getaway.From the state-of-the-art fitness facilities that helped me maintain my routine to the exclusive concierge services that catered to my every need.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?3"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Leroy Jenkins</p>
                      <p className="text-sm dark:text-gray-600">
                        England
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="900"
                  className="p-6 rounded shadow-md dark:bg-gray-50  bg-[#2b2739] text-stone-200 border border-stone-800"
                >
                  <p>
                  After booking my trip through Ninja Explore Hub, I had the pleasure of adding a perfectly tailored destination to my itinerary. The process was seamless, and I was impressed by the range of options available. 
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?4"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Leroy Jenkins</p>
                      <p className="text-sm dark:text-gray-600">
                        Paris
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;

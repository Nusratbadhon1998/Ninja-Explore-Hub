import React from "react";

function Review() {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
        
          <div className="relative px-6 py-3 font-bold text-black group max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
            <span className="relative">
              <h2
                data-aos="fade-right"
                data-aos-duration="1200"
                className="text-4xl font-bold pt-5"
              >
                What Clients say about Us!!
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="1200"
                className="dark:text-gray-600"
              >
                "Experience the Pinnacle of Luxurious Living at Duo Assum Utroque, Where Luxury Meets Comfort. Situated in an Ideal Location, this Exceptional Residence Embodies Unmatched Elegance and Sophistication."
              </p>
            </span>
          </div>

          <div className="p-6 xl:col-span-3">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div
                  data-aos="fade-down"
                  data-aos-duration="900"
                  className="p-6 mt-12 rounded shadow-md dark:bg-gray-50"
                >
                  <p>
                    Indulge in opulent interiors adorned with the finest
                    materials and craftsmanship. Every detail, from the grand
                    foyer to the lavish living spaces, exudes timeless luxury.
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
                        Luxury Real Estate Agent
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-duration="900"
                  className="p-6 rounded shadow-md dark:bg-gray-50"
                >
                  <p>
                    Relish in the breathtaking views of the city skyline or
                    serene landscapes from expansive windows and private
                    terraces. It's a sanctuary where tranquility meets
                    sophistication.
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
                        Luxury Real Estate Agent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div
                  data-aos="fade-up"
                  data-aos-duration="900"
                  className="p-6 rounded shadow-md dark:bg-gray-50"
                >
                  <p>
                    Experience unparalleled amenities and services designed to
                    elevate your lifestyle. From state-of-the-art fitness
                    centers to exclusive concierge services, every need is
                    anticipated and exceeded.
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
                        Luxury Real Estate Agent
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="900"
                  className="p-6 rounded shadow-md dark:bg-gray-50"
                >
                  <p>
                    Discover a lifestyle of unparalleled luxury and
                    sophistication at Duo assum utroque appetere an. It's more
                    than just a residence; it's an exquisite masterpiece where
                    every moment is extraordinary.
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
                        Luxury Real Estate Agent
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
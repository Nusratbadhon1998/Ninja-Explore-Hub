import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Home() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Ninja Explore Hub</title>
      </Helmet>
      <div className="flex  flex-col md:flex-col lg:flex-row gap-5 items-center w-full h-[500px] bg-[#e5e8ee]">
        <div className=" w-full lg:w-1/3 space-y-3 ml-8">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={70}
              words={[
                
                "It's a Big World Out There,Go Explore.",
              ]}
            />
          </h1>
          <p className="text-stone-800">
            No matter where you would want to go we will help you there, Plan
            and book your perfect trip with expert advice, Travel, Tips,
            Destinations, And inspiration from us.
          </p>
        </div>
        <Swiper
          style={{
            clipPath: " circle(70.5% at 50% 70%)",
            // clipPath:
            //   "polygon(100% 100%, 0% 100% , 0.00% 97.67%, 2.00% 97.53%, 4.00% 97.13%, 6.00% 96.45%, 8.00% 95.52%, 10.00% 94.32%, 12.00% 92.87%, 14.00% 91.18%, 16.00% 89.26%, 18.00% 87.11%, 20.00% 84.75%, 22.00% 82.19%, 24.00% 79.45%, 26.00% 76.54%, 28.00% 73.49%, 30.00% 70.30%, 32.00% 66.99%, 34.00% 63.59%, 36.00% 60.11%, 38.00% 56.57%, 40.00% 52.99%, 42.00% 49.40%, 44.00% 45.81%, 46.00% 42.25%, 48.00% 38.73%, 50.00% 35.27%, 52.00% 31.90%, 54.00% 28.63%, 56.00% 25.48%, 58.00% 22.47%, 60.00% 19.62%, 62.00% 16.94%, 64.00% 14.44%, 66.00% 12.15%, 68.00% 10.08%, 70.00% 8.23%, 72.00% 6.62%, 74.00% 5.25%, 76.00% 4.14%, 78.00% 3.29%, 80.00% 2.71%, 82.00% 2.39%, 84.00% 2.35%, 86.00% 2.57%, 88.00% 3.07%, 90.00% 3.83%, 92.00% 4.85%, 94.00% 6.14%, 96.00% 7.67%, 98.00% 9.44%, 100.00% 11.44%)",
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper hidden lg:block"
        >
          <SwiperSlide>
            <img
              className="w-full h-full bg-cover inset-0"
              src="https://img.freepik.com/free-photo/beautiful-shot-famous-roman-colosseum-amphitheater-breathtaking-sky-sunrise_181624-6998.jpg?t=st=1714096609~exp=1714100209~hmac=0960aafd4387c995086f99ef71762e168446e03177c125410e4a5ba72410cee4&w=826"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full bg-cover inset-0"
              src="https://img.freepik.com/free-photo/general-view-toledo-from-hill_1398-4496.jpg?t=st=1714096664~exp=1714100264~hmac=338b54333d4cbdf26b1adfa421f6dcf4ce734d6d82d49d302b744d07f15825d7&w=826"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full bg-cover inset-0"
              src="https://img.freepik.com/free-photo/view-prague-by-night_268835-1129.jpg?t=st=1714096709~exp=1714100309~hmac=d108ed4d9beb3a81a4270d3949bd97e4f355a73a201229efd13cc0ec1b67c762&w=996"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full bg-cover inset-0"
              src="https://img.freepik.com/free-photo/mesmerizing-view-houses-fields-covered-snow-surrounded-by-mountains-trees_181624-13827.jpg?t=st=1714096750~exp=1714100350~hmac=8226c7e60cd36159d6ee05c32f823e36e8e0d28ba90cbae86e69d6be400fe48b&w=996"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full bg-cover inset-0"
              src="https://img.freepik.com/free-photo/amazing-autumn-scenery-santa-maddalena-village-with-church-colorful-trees-meadows-rising-sun-rays-dolomite-alps-italy_661209-245.jpg?t=st=1714096862~exp=1714100462~hmac=b8563a1e73426fbec95ea71b4a7c8c81bdaf7ab2c8c3864a8d7cdac246b3048c&w=996"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-1/3 bg-[url(https://blush.design/api/download?shareUri=Sos4_bWubBuZQ9aU&c=Hair_0%7Ef5da2d_Skin_0%7Eb17606&w=800&h=800&fm=png)] bg-auto h-full relative">
          <img
            className="w-32 h-32 absolute top-4 left-5"
            style={{ clipPath: " circle(50% at 50% 50%)" }}
            src="https://img.freepik.com/free-photo/beautiful-shot-famous-roman-colosseum-amphitheater-breathtaking-sky-sunrise_181624-6998.jpg?t=st=1714096609~exp=1714100209~hmac=0960aafd4387c995086f99ef71762e168446e03177c125410e4a5ba72410cee4&w=826"
            alt=""
          />
          <img
            className="w-32 h-32 absolute top-36 right-24"
            style={{ clipPath: " circle(50% at 50% 50%)" }}
            src="https://img.freepik.com/free-photo/view-prague-by-night_268835-1129.jpg?t=st=1714096709~exp=1714100309~hmac=d108ed4d9beb3a81a4270d3949bd97e4f355a73a201229efd13cc0ec1b67c762&w=996"
            alt=""
          />
          <img
            className="w-32 h-32 absolute bottom-12 left-4"
            style={{ clipPath: " circle(50% at 50% 50%)" }}
            src="https://img.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg?t=st=1714100045~exp=1714103645~hmac=3d4fbdd7a6fa1701cc8d910849f6f9714d1e1b04a99b5200351e92721a3ad5f4&w=996"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

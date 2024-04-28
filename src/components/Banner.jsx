import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './styles.css'
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
function Banner() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row gap-5 items-center w-full h-[500px] bg-base">
        {/* First Part */}
    <div className="w-full md:w-full lg:w-1/3 space-y-3 ml-8">
      <h1 className="text-xl text-stone-800 md:text-3xl lg:text-5xl font-bold">
        <Typewriter
          cursor
          cursorBlinking
          delaySpeed={1000}
          deleteSpeed={25}
          loop={1}
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
    {/* Middle Part */}
    <Swiper
      style={{
        clipPath: " circle(70.5% at 50% 70%)",
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
      className="mySwiper"
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
    
    {/* Last part */}
    <div className="hidden lg:block w-1/3 bg-[url(https://blush.design/api/download?shareUri=Sos4_bWubBuZQ9aU&c=Hair_0%7Ef5da2d_Skin_0%7Eb17606&w=800&h=800&fm=png)] bg-auto h-full relative">
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
  )
}

export default Banner
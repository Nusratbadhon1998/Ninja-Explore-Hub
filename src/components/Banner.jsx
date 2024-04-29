import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import bg from "../assets/bg.jpg";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
function Banner() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row gap-5 items-center w-full h-[600px] relative">
      <img
        className="absolute opacity-70 inset-0 w-full h-full"
        src={bg}
        alt=""
      />
      {/* First Part */}
      <div className="relative z-20 w-full p-4 lg:p-0 md:w-full lg:w-1/3 space-y-3 lg:ml-8">
        <h1
          className={`text-2xl text-center lg:text-left text-stone-200 md:text-3xl lg:text-5xl font-bold`}
        >
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={1}
            typeSpeed={70}
            words={["It's a Big World Out There,Go Explore."]}
          />
        </h1>
        <p className="text-center lg:text-left text-stone-200">
          No matter where you would want to go we will help you there, Plan and
          book your perfect trip with expert advice, Travel, Tips, Destinations,
          And inspiration from us.
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
          delay: 1200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper hidden"
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
            src="https://images.unsplash.com/photo-1594069758873-e79e9075eb7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full bg-cover inset-0"
            src="https://images.unsplash.com/photo-1545073334-9cb53498f1dc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full bg-cover inset-0"
            src="https://images.unsplash.com/photo-1610046226394-be65aabee26d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full bg-cover inset-0"
            src="https://images.unsplash.com/photo-1551634979-2b11f8c946fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      {/* FOR SMALL DEVICE */} 
     <div className="h-96 block relative z-50 lg:hidden carousel carousel-vertical rounded-box">
        <div className="carousel-item h-full">
          <img src="https://img.freepik.com/free-photo/beautiful-shot-famous-roman-colosseum-amphitheater-breathtaking-sky-sunrise_181624-6998.jpg?t=st=1714096609~exp=1714100209~hmac=0960aafd4387c995086f99ef71762e168446e03177c125410e4a5ba72410cee4&w=826" />
        </div>
        <div className="carousel-item h-full">
          <img src="https://img.freepik.com/free-photo/amazing-autumn-scenery-santa-maddalena-village-with-church-colorful-trees-meadows-rising-sun-rays-dolomite-alps-italy_661209-245.jpg?t=st=1714096862~exp=1714100462~hmac=b8563a1e73426fbec95ea71b4a7c8c81bdaf7ab2c8c3864a8d7cdac246b3048c&w=996" />
        </div>
        <div className="carousel-item h-full">
          <img src="https://img.freepik.com/free-photo/view-prague-by-night_268835-1129.jpg?t=st=1714096709~exp=1714100309~hmac=d108ed4d9beb3a81a4270d3949bd97e4f355a73a201229efd13cc0ec1b67c762&w=996" />
        </div>
      </div>

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
  );
}

export default Banner;

import bannerImage from "../assets/user_image.png";
import bannerWallpaper from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const Banner = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["AWS Developer", "Fullstack Developer", "Backend Developer", "Coach and Mentor"],
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 10,
      backDelay: 100,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerWallpaper})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center pb-10"
    >
      {/* First section */}
      <div className="w-full flex justify-center">
        {/* text */}
        <div className="w-2/3 space-y-2 ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-4xl font-bold">Abdoulaye WANE</h1>
          <h2 className="text-3xl">I am <span className="font-bold underline" ref={el}></span></h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            culpa vel aut totam odit quasi et, in recusandae sapiente adipisci
            eos, exercitationem dignissimos hic ducimus. Perferendis vero eaque
            voluptates? Debitis.
          </p>
          <div className="icons-container flex space-x-5">
            <a className="hover:bg-orange-400 border cursor-pointer px-3 py-3 w-14 h-14 rounded-full flex justify-center bg-gray-100">
              <i className="fa-brands text-4xl fa-facebook"></i>
            </a>
            <a className="hover:bg-orange-400 border cursor-pointer px-3 py-3 w-14 h-14 rounded-full flex justify-center bg-gray-100">
              <i className="fa-brands text-4xl fa-linkedin-in"></i>
            </a>
            <a className="hover:bg-orange-400 border cursor-pointer px-3 py-3 w-14 h-14 rounded-full flex justify-center bg-gray-100">
              <i className="fa-brands text-4xl fa-github"></i>
            </a>
            <a className="hover:bg-orange-400 border cursor-pointer px-3 py-3 w-14 h-14 rounded-full flex justify-center bg-gray-100">
              <i className="fa-brands text-4xl fa-youtube"></i>
            </a>
            <a className="hover:bg-orange-400 border cursor-pointer px-3 py-3 w-14 h-14 rounded-full flex justify-center bg-gray-100">
              <i className="fa-brands text-4xl fa-x-twitter"></i>
            </a>
          </div>
          <br />
          <a
            className="text-xl px-3 py-2 my-2 bg-orange-400 rounded-md hover:bg-orange-600"
            href="/contact"
          >
            Contact Me
          </a>
        </div>
      </div>
      {/* Second section */}
      <div className="w-full flex justify-center">
        {/* image */}
        <img
          className="rounded-full shadow-lg w-fit"
          src={bannerImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;

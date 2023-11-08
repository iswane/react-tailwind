import { useState } from "react";
import bannerImage from "../assets/user_image.png";

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer",
    desc1: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Explicabo mollitia iure quas quo amet ratione odit tempora nulla`,
    desc2: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Explicabo mollitia iure quas quo amet ratione odit tempora nulla`,
    actionButton: {
      title: "Read More.. ",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h2 className="text-center pb-16 text-5xl underline font-bold">
          About Me
        </h2>
        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="rounded-full shadow-lg w-fit"
              src={data.image}
              alt="Abdoulaye WANE"
            />
          </div>
          {/* text container */}
          <div className="w-full flex justify-center">
            <div className="space-y-5 w-2/3">
              <h1 className="text-5xl font-semibold">{data.title}</h1>
              <p>{data.desc1}</p>
              <p> {data.desc2}</p>
              <button className="text-xl px-3 py-2 bg-orange-400 rounded-md hover:bg-orange-600">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

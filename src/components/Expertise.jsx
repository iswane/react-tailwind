import { useState } from "react";
import bannerWallpaper from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  const [dataSkills, setDataSkills] = useState([
    {
      id: 1,
      title: "Java Core",
      icon: <i className="fa-brands fa-java"></i>,
    },
    {
      id: 2,
      title: "Spring Framework",
      icon: <i></i>,
    },
    {
      id: 3,
      title: "Spring Boot",
      icon: <i></i>,
    },
    {
      id: 4,
      title: "AWS",
      icon: <i className="fa-brands fa-aws"></i>,
    },
    {
      id: 5,
      title: "Git",
      icon: <i className="fa-brands fa-git-alt"></i>,
    },
    {
      id: 6,
      title: "Angular",
      icon: <i className="fa-brands fa-angular"></i>,
    },
    {
      id: 7,
      title: "ReactJS",
      icon: <i className="fa-brands fa-react"></i>,
    },
    {
      id: 8,
      title: "Typescript",
      icon: <i></i>,
    },
    {
      id: 9,
      title: "Javascript",
      icon: <i className="fa-brands fa-js"></i>,
    },
    {
      id: 10,
      title: "Jenkins",
      icon: <i></i>,
    },
    {
      id: 11,
      title: "Maven",
      icon: <i></i>,
    },
    {
      id: 12,
      title: "GitHub",
      icon: <i></i>,
    },
    {
      id: 13,
      title: "Intellij",
      icon: <i></i>,
    },
  ]);
  return (
    <>
      <div className="mt-2">
        <h1 className="mb-16 text-5xl underline text-center font-bold">
          My Expertise
        </h1>
        {/* box section */}
        <div className="box-container items-center flex py-8">
          <div
            style={{
              backgroundImage: `url(${bannerWallpaper})`,
              backgroundSize: "cover",
            }}
            className="flex justify-center"
          >
            <div className="w-2/3 text-center space-x-3">
              {/* text container */}
              <h1 className="text-4xl font-bold">I love these technologies</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                nobis? Soluta officia quasi consequuntur. Deserunt eveniet sunt
                illo maiores ut quis dolores cupiditate magni! Ex odit facilis
                delectus? Labore, in.
              </p>
              <button className="text-xl px-4 py-2 rounded-md bg-orange-400 hover:bg-orange-600 shadow-lg">
                Hire me
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap">
              {/* skills container */}
              {dataSkills.map((skill) => (
                <p key={skill.id} className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-xl hover:bg-orange-400 cursor-pointer">
                {skill.icon} 
                  {skill.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;

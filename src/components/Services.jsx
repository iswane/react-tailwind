import { useState } from "react";

const Services = () => {
  const [dataService, setDataService] = useState([
    {
      id: 1,
      title: "AWS Web Developer",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in magnam eligendi vel dicta iure accusantium repellat harum illo, perspiciatis suscipit, cum eaque nam animi libero`,
      icon: <i className="text-5xl fa-brands fa-aws"></i>,
      actionButton: {
        title: "Check",
        link: "/link-button",
      },
    },
    {
      id: 2,
      title: "Backend Developer",
      description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Accusamus, in magnam eligendi vel dicta 
        iure accusantium repellat harum illo, perspiciatis 
        suscipit, cum eaque nam animi libero`,
        icon: <i className="text-5xl fa-solid fa-server"></i>,
      actionButton: {
        title: "Check",
        link: "/link-button",
      },
    },
    {
      id: 3,
      title: "Mentor & Coach",
      description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Accusamus, in magnam eligendi vel dicta 
        iure accusantium repellat harum illo, perspiciatis 
        suscipit, cum eaque nam animi libero`,
        icon: <i className="text-5xl fa-solid fa-chalkboard"></i>,
      actionButton: {
        title: "Check",
        link: "/link-button",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-16">
        <h1 className="text-5xl font-bold underline text-center">
          My Services
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          { dataService.map((data) => (
             <div key={data.id} className="cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl">
               {data.icon}
               <h1 className="text-4xl">{data.title}</h1>
               <p> {data.description} </p>
               <button
                 className="px-3 py-2 bg-orange-400 text-xl rounded-md hover:bg-orange-600">
                 { data.actionButton.title}
               </button>
             </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;

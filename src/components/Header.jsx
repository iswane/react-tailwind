import { useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("Abdoulaye WANE");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "home",
      link: "/hone",
      id: 1,
    },
    {
      title: "about",
      link: "/about",
      id: 2,
    },
    {
      title: "skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "portfolio",
      link: "/portfolio",
      id: 4,
    },
    {
      title: "contact",
      link: "/contact",
      id: 5,
    },
  ]);
  const [actionButton, setActionButton] = useState({
    title: "Resume",
    link: "/hure-me"
  });
  return (
    <div className="h-20 border main flex justify-between
     items-center px-8 bg-black-300
      bg-gray-100">
      <div>
        {/* brand logo */}
        <h1 className="text-xl font-semibold">{brandName}</h1>
      </div>

      <div className="space-x-4 uppercase">
        {/* menu links */}
        {menuLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="hover:text-orange-400">
              {link.title}
            </a>
        ))}
      </div>
      <div>
        {/* bouton */}
        <button className="px-3 py-2
         bg-orange-400 rounded-md hover:bg-orange-600">
          {actionButton.title}
        </button>
      </div>
    </div>
  );
};

export default Header;

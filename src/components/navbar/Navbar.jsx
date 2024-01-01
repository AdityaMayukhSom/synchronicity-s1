import { useState, useEffect } from "react";

const navbarLinks = [
  {
    link: "#about",
    name: "About",
  },
  {
    link: "#themes",
    name: "Themes",
  },
  {
    link: "#sponsors",
    name: "Sponsors",
  },
  /*{
    link: "#teams",
    name: "Teams",
  },*/
  {
    link: "#faqs",
    name: "FAQs",
  },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav
      className="flex flex-row justify-between p-3"
      style={{
        backgroundColor: "#121930",
        padding: "10px 60px",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="flex items-center justify-center h-full font-semibold text-white">
        synchronicity - s1
      </div>
      <ul className="hidden md:flex flex-row items-center justify-center h-12 text-gray-200 list-none">
        {navbarLinks.map((el) => (
          <li className="p-4" key={el.link}>
            <a href={el.link}>
              <span className="links">{el.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <button
        className="md:hidden p-0 m-0 text-2xl text-white border-none cursor-pointer bg-none"
        onClick={toggleNav}
        aria-label="Toggle navigation"
      >
        &#9776;
      </button>
      <ul
        className={`fixed md:hidden top-0 ${
          isNavOpen ? "right-0" : "right-[-200px]"
        } w-2/5 h-screen pt-14 text-white`}
        style={{
          backgroundImage: `url(/pattern.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <button className="text-3xl absolute top-6 right-6" onClick={toggleNav}>
          &#10006;
        </button>
        {navbarLinks.map((el) => (
          <li className="p-4 text-xl font-semibold" key={el.link}>
            <a href={el.link}>
              <span className="links">{el.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Cta from "components/cta1";

// const link = [
//   {
//     id: 1,
//     title: "Home",
//     url: "/",
//   },
//   {
//     id: 2,
//     title: "Fitur",
//     url: "#fitur",
//   },
//   {
//     id: 3,
//     title: "Harga",
//     url: "#harga",
//   },
//   {
//     id: 4,
//     title: "Tentang Kami",
//     url: "/about",
//   },
// ];

export default function Header() {
  // hamburger active
  useEffect(() => {
    const handleHamburgerClick = () => {
      const hamburger = document.querySelector("#hamburger");
      const navMenu = document.querySelector("#nav-menu");

      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    };

    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      if (window.scrollY > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };

    const hamburger = document.querySelector("#hamburger");
    hamburger.addEventListener("click", handleHamburgerClick);

    window.addEventListener("scroll", handleScroll);

    return () => {
      hamburger.removeEventListener("click", handleHamburgerClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-transparent fixed top-0 left-0 w-full items-center z-10">
      <div className="absolute lg:z-30 w-full py-6 lg:py-4"></div>
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-6 py-2">
            <Image id="logo" src="logo.svg" alt="" width={144} height={144} />
          </div>

          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-4 lg:hidden mt-0"
            >
              <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out origin-top-left"></span>
              <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out"></span>
              <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="nav-menu"
              className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex">
                {}
                <li className="group">
                  <Link href="/" legacyBehavior>
                    <a className="px-9 text-gray-900 group-hover:text-primary">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="group">
                  <Link href="/#fitur" legacyBehavior>
                    <a className="px-9 text-gray-900 group-hover:text-primary">
                      Fitur
                    </a>
                  </Link>
                </li>
                <li className="group">
                  <Link href="/#harga" legacyBehavior>
                    <a className="px-9 text-gray-900 group-hover:text-primary">
                      Harga
                    </a>
                  </Link>
                </li>
                <li className="group">
                  <Link href={"/about"} legacyBehavior>
                    <a className="px-9 text-gray-900 group-hover:text-primary">
                      Tentang Kami
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-auto">
            <ul className=" items-center px-4 hidden md:block">
              <Cta />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

{
  /* <bottom
            className={[
              "w-auto flex items-center justify-center lg:hidden p-2 appearance-none z-50",
              menu ? "text-black fixed right-0" : "relative text-inherit",
            ].join(" ")}
            onClick={toggleMenu}
          >
            <span class="material-symbols-outlined cursor-pointer">
              {menu ? "close" : "menu"}
            </span>
          </bottom> */
}

// export default function Header() {
//   const hamburger = document.querySelector("#hamburger");
//   const navMenu = document.querySelector("#nav-menu");

//   hamburger.addEventListener("click", function () {
//     hamburger.classList.toggle("hamburger-active");
//     navMenu.classList.toggle("hidden");
//   });
//   // navbar-fixed
//   if (typeof window !== "undefined") {
//     window.onscroll = function () {
//       const header = document.querySelector("header");
//       const fixedNav = header.offsetTop;

//       if (window.scrollY > fixedNav) {
//         header.classList.add("navbar-fixed");
//       } else {
//         header.classList.remove("navbar-fixed");
//       }
//     };
//   }

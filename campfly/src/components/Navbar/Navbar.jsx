import { NavLink } from "react-router-dom";
import { Buttons } from "../components";

function Navbar() {
  return (
    <div className="sticky top-0 z-10">
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl py-[0.5rem] px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <img src="./Main-logo.svg" alt="" className="invert" />
              </a>
            </div>
            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6">
                  <div className="relative hidden lg:block">
                    <input
                      className="appearance-none border-2 pl-10 border-gray-500 hover:border-gray-400 transition-colors rounded-full w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Search Destinations"
                    />

                    <div className="absolute left-0 inset-y-0 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500 rotate-90"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <li>
                    <NavLink
                      className="text-[#000000] transition hover:text-gray-500/75"
                      activeClassName="border-b-2 border-gray-500"
                      to="/honeymoon"
                    >
                      Honeymoon
                    </NavLink>
                  </li>

                  <li>
                    <a
                      className="text-[#000000] transition hover:text-gray-500/75"
                      href="/"
                    >
                      Family/Friends
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-[#000000] transition hover:text-gray-500/75"
                      href="/"
                    >
                      Solo
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <Buttons title={"Sign in"} px={"px-[1rem]"} py={"py-[0.4rem]"} />

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

import { FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div>
          <div className=" flex flex-col lg:flex-row justify-between">
            <section className="grid grid-cols-2 lg:grid-cols-4 w-full">
              <div>
                <p className="font-medium -tracking-wide text-gray-300">
                  Category
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      World
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Game
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      References
                    </a>
                  </li>
                </ul>
              </div>

              {/* Category 2 */}
              <div>
                <p className="font-medium -tracking-wide text-gray-300">
                  Apples
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Web
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      E-commerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Business
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Entertainment
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>

              {/* Category 3 */}
              <div>
                <p className="font-medium -tracking-wide text-gray-300">
                  Cherry
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Media
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Brochure
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      NGO
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </div>

              {/* Category 4 */}
              <div>
                <p className="font-medium -tracking-wide text-gray-300">
                  Business
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Infopreneur
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Personal
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Wiki
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Forum
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Community
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Subscription */}
            <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-16 md:mt-5">
              <p className="font-medium tracking-wide text-gray-300">
                Subscribe for updates
              </p>

              <form className="mt-4 flex flex-col md:flex-row">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="flex-grow w-full h-12 px-4 mb-3 transition
                   duration-200 bg-white border border-gray-300 rounded 
                   shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-purple-400
                    focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center
                 justify-center h-12 px-6 font-medium -tracking-wide
                  text-white rounded transition duration-200 shadow-md
                   hover:bg-orange-500 focus:outline-none border"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti veritatis, tempora ducimus tempore facilis eius
                cupiditate ea aspernatur labore ut, quia nostrum incidunt.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; Copyright 2024 | All right reserved
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-orange-400 "
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-orange-400 "
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-orange-400 "
            >
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

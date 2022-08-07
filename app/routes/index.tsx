import { Link } from "@remix-run/react";
import img from "../../public/alex-headshot.png";
import { Menu } from "@headlessui/react";
import React from "react";

export default function Index() {
  return (
    <div className="min-h-full">
      <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  to="/"
                  className="rounded-md px-3 py-2 font-medium hover:text-blue-400 active:text-blue-600"
                >
                  <svg
                    width="101"
                    height="29"
                    viewBox="0 0 101 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.68813 22.4689C10.9709 22.4689 12.9534 21.6579 14.6354 20.0058L11.9622 17.1824C11.1211 18.0234 10.0398 18.4739 8.83831 18.4739C6.64562 18.4739 5.1738 16.9721 5.1738 14.7193C5.1738 12.4666 6.67565 10.9647 8.83831 10.9647C9.94968 10.9647 11.001 11.3852 11.812 12.1361L14.4252 9.28263C12.8633 7.78078 10.8208 6.96979 8.59802 6.96979C3.76207 6.96979 0.488037 10.0936 0.488037 14.7494C0.488037 19.4952 3.67195 22.4689 8.68813 22.4689Z"
                      fill="#D95C4B"
                    />
                    <path
                      d="M27.3584 7.30019V15.0798C27.3584 17.0922 26.157 18.4739 24.3548 18.4739C22.7328 18.4739 21.7115 17.3325 21.7115 15.4102V7.30019H16.9957V15.6805C16.9957 19.9458 19.3386 22.4689 22.9731 22.4689C24.9255 22.4689 26.5775 21.7179 27.6889 20.4263L27.9892 22.1385H32.0743V7.30019H27.3584Z"
                      fill="#D95C4B"
                    />
                    <path
                      d="M47.4008 7.30019L47.1005 9.04234C45.899 7.72071 44.1869 6.99982 42.1744 6.99982C37.9993 6.99982 35.0857 10.1537 35.0857 14.7193C35.0857 19.2849 37.9993 22.4388 42.1744 22.4388C44.1869 22.4388 45.869 21.7179 47.1005 20.3663L47.4008 22.1385H51.4859V7.30019H47.4008ZM43.2858 18.4739C41.2132 18.4739 39.7715 16.9421 39.7715 14.7193C39.7715 12.4966 41.2132 10.9647 43.2858 10.9647C45.3884 10.9647 46.8301 12.4966 46.8301 14.7193C46.8301 16.9421 45.3884 18.4739 43.2858 18.4739Z"
                      fill="#D95C4B"
                    />
                    <path
                      d="M54.6971 22.1385H59.4129V1.11258H54.6971V22.1385Z"
                      fill="#D95C4B"
                    />
                    <path
                      d="M65.0165 5.82838C66.6385 5.82838 67.7799 4.77709 67.7799 3.27524C67.7799 1.77339 66.6385 0.69206 65.0165 0.69206C63.3945 0.69206 62.2531 1.77339 62.2531 3.27524C62.2531 4.77709 63.3945 5.82838 65.0165 5.82838ZM62.6436 22.1385H67.3594V7.30019H62.6436V22.1385Z"
                      fill="#D95C4B"
                    />
                    <path
                      d="M77.4635 6.51923C77.4635 4.98735 78.2745 4.35657 79.476 4.35657C80.2269 4.35657 80.7676 4.59687 81.4284 4.98735L83.0204 2.01369C81.8189 1.08254 80.3471 0.631989 78.7551 0.631989C75.7214 0.631989 72.6877 2.37413 72.6877 6.51923V7.30019H70.0745V11.0849H72.6877V22.1385H77.4635V11.0849H81.4885V7.30019H77.4635V6.51923Z"
                      fill="#D95C4B"
                    />
                    <path
                      d="M95.3817 7.30019L93.4894 11.986L91.7473 16.8219L90.1253 11.986L88.4132 7.30019H83.3369L89.104 21.9282L86.2205 28.5664H91.2367L100.488 7.30019H95.3817Z"
                      fill="#D95C4B"
                    />
                  </svg>
                </Link>
              </div>
              {/* Start left nav container */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/forms"
                    className="rounded-md px-3 py-2 font-medium hover:text-blue-400 active:text-blue-600"
                  >
                    Forms
                  </Link>
                </div>
              </div>
            </div>
            {/* Start right nav container */}
            <div className="hidden md:block">
              {/* Start of profile icon */}
              <div className="relative ml-4 flex items-center md:ml-6">
                <Menu as="div" className="relative ml-3">
                  <Menu.Button
                    type="button"
                    className="flex max-w-xs items-center rounded-full"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img className="h-10 w-10 rounded-full" src={img} alt="" />
                  </Menu.Button>
                  {/* Start of dropdown menu */}
                  <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 hover:outline-blue-300 focus:outline-none">
                    <Menu.Item as={React.Fragment}>
                      {({ active }) => (
                        <Link
                          to="#"
                          className={`block px-4 py-2 text-sm
                          ${
                            active ? "bg-blue-500 text-white" : "text-slate-800"
                          }`}
                        >
                          Your Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="#"
                          className={`block px-4 py-2 text-sm
                          ${
                            active ? "bg-blue-500 text-white" : "text-slate-800"
                          }`}
                        >
                          Settings
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="#"
                          className={`block px-4 py-2 text-sm
                          ${
                            active ? "bg-blue-500 text-white" : "text-slate-800"
                          }`}
                        >
                          Sign out
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
              {/* Start of dropdown menu */}
            </div>
          </div>
        </div>
      </nav>
      <header>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

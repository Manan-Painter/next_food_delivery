import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="p-4">
      <div className="relative w-full h-96">
        <img
          className="absolute h-full w-full object-cover object-center"
          src="/images/bread.avif"
          alt="nature image"
        />
        <div className="absolute inset-0 h-full w-full bg-black/50"></div>
        <div className="relative pt-28 text-center">
          <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-orange-600 mb-4 text-3xl lg:text-4xl">
            Contact Information
          </h2>
          <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-orange-600 mb-9 opacity-70">
            <b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              purus feugiat, vestibulum mi nec, ultricies metus.
            </b>
          </p>
        </div>
      </div>
      <div className="-mt-16 mb-8 px-8">
        <div className="container mx-auto">
          <div className="py-12 flex justify-center rounded-xl border border-white bg-orange-500 shadow-md shadow-black/5 saturate-200">
            <div className="my-8 grid gap-6 px-4">
              {/* Address */}
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                  123 Main Street, Los Angeles, CA
                </p>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                  +1 123 456 7890
                </p>
              </div>
              {/* Email */}
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                  info@lahospital.com
                </p>
              </div>
              {/* Support Ticket */}
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                  Open Support Ticket
                </p>
              </div>
            </div>
            {/* Form */}
            <form action="#">
              <div className="mb-6">
                <div className="relative w-full rounded-lg bg-slate-100 min-w-[200px] h-11 !min-w-full">
                  <input
                    type="text"
                    name="Name"
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50"
                    placeholder="Enter Your Name "
                  />
                  <label className="before:content[''] after:content[''] pointer-events-none absolute -top-0.5 left-0 flex h-full w-full text-blue-gray-500 text-[11px] font-normal leading-tight peer-disabled:peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-sm before:pointer-events-none before:mt-[6.5px] after:pointer-events-none after:mt-[6.5px] peer-placeholder-shown:before:mt-[17px] peer-focus:leading-tight">
                    
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <div className="relative w-full rounded-lg bg-slate-100 min-w-[200px] h-11 !min-w-full">
                  <input
                    type="email"
                    name="Email"
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50"
                    placeholder=" Enter Your Email"
                  />
                  <label className="before:content[''] after:content[''] pointer-events-none absolute -top-0.5 left-0 flex h-full w-full text-blue-gray-500 text-[11px] font-normal leading-tight peer-disabled:peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-sm before:pointer-events-none before:mt-[6.5px] after:pointer-events-none after:mt-[6.5px] peer-placeholder-shown:before:mt-[17px] peer-focus:leading-tight">
                    
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <div className="relative w-full rounded-lg bg-slate-100 min-w-[200px] h-11 !min-w-full">
                  <textarea
                    name="Message"
                    rows={8}
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50"
                    placeholder="Message"
                  />
                  <label className="before:content[''] after:content[''] pointer-events-none absolute -top-0.5 left-0 flex h-full w-full text-blue-gray-500 text-[11px] font-normal leading-tight peer-disabled:peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-sm before:pointer-events-none before:mt-[6.5px] after:pointer-events-none after:mt-[6.5px] peer-placeholder-shown:before:mt-[17px] peer-focus:leading-tight">
                    
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 w-full py-2 bg-white text-orange-600 font-semibold rounded-md hover:bg-orange-100 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="px-6 bg-orange-600">
        <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
          <p className="block text-white antialiased font-sans text-sm leading-normal text-inherit">
            &copy; 2023 LA Hospital. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Link href="/about">
                <p className="block text-white  antialiased font-sans text-sm font-normal leading-normal text-inherit">
                  <strong>About Us</strong>
                </p>
              </Link>
            </li>
            <li>
              <Link href="/license">
                <p className="block text-white antialiased font-sans text-sm font-normal leading-normal text-inherit">
                  <strong>License</strong>
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="block text-white antialiased font-sans text-sm font-normal leading-normal text-inherit">
                  <strong>Contact Us</strong>
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

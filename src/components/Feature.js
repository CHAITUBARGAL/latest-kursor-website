const Feature = () => {
    return (
      <main className="mr-28 ml-28 mt-20">
        <section className="py-10 py-lg-15">
          <div className="container">
            <div className="text-center mb-18">
              <h1
                className="mb-0 text-white text-5xl font-bold leading-normal"
                data-aos="fade-up"
              >
                Feel the power of AI, get everything on a click at{" "}
                <span className="text-purple-500">Kursor</span>
              </h1>
              <p className="text-white mt-5 text-2xl" data-aos="fade-up">
                Discover the power of AI technology with Kursor's one-click access
                to everything you need.
              </p>
            </div>
  
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-14 mt-20">
              <div
                className="flex flex-col gap-6 lg:flex-row"
                data-aos="fade-up-sm"
                data-aos-delay="200"
              >
                <div className="w-14 h-14 flex-shrink-0 d-flex items-center justify-center rounded-3 p-2 border-black bg-gradient-to-r from-black to-black text-white border-gray-500 border-opacity-10">
                  <svg
                    className="w-14 h-14 mb-4"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      className="fill-current text-purple-900"
                      width="64"
                      height="64"
                      rx="32"
                    />
                    <path
                      className="stroke-current text-purple-100"
                      d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                      strokeLinecap="square"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                    <path
                      className="stroke-current text-purple-300"
                      d="M43 42h-9M43 37h-9"
                      strokeLinecap="square"
                      strokeWidth="2"
                    />
                  </svg>
                  {/* <Image
                    src={logo2}
                    alt="Generates quality contents"
                    width={32}
                    height={32}
                  /> */}
                </div>
                <div className="content">
                  <h4 className="mb-4 text-white text-2xl font-bold">Explore</h4>
                  <p className="text-gray-400">
                    Want to know more? Select it, right click and explore instant
                    information using Kursor AI
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col gap-6 lg:flex-row"
                data-aos="fade-up-sm"
                data-aos-delay="250"
              >
                <div className="w-14 h-14 flex-shrink-0 d-flex items-center justify-center rounded-3 p-2 border-gray-300">
                  <svg
                    className="w-14 h-14 mb-4"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="fill-current text-purple-900"
                      cx="32"
                      cy="32"
                      r="32"
                    />
                    <path
                      className="stroke-current text-purple-100"
                      strokeWidth="2"
                      strokeLinecap="square"
                      d="M21 23h22v18H21z"
                      fill="none"
                      fillRule="evenodd"
                    />
                    <path
                      className="stroke-current text-purple-300"
                      d="M26 28h12M26 32h12M26 36h5"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                  </svg>
                  {/* <Image
                    src={logo1}
                    alt="Provides Useful Suggestions"
                    width={32}
                    height={32}
                  /> */}
                </div>
                <div className="content">
                  <h4 className="mb-4 text-white text-2xl font-bold">Compose</h4>
                  <p className="text-gray-400">
                    Want help in writing? Brainstorm and create your own content
                    smoothly with guidance
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col gap-6 lg:flex-row"
                data-aos="fade-up-sm"
                data-aos-delay="300"
              >
                <div className="w-14 h-14 flex-shrink-0 d-flex items-center justify-center rounded-3 p-2 ">
                  <svg
                    className="w-14 h-14 mb-6 "
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      className="fill-current text-purple-900"
                      width="64"
                      height="64"
                      rx="32"
                    />
                    <g
                      transform="translate(21 21)"
                      strokeLinecap="square"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <ellipse
                        className="stroke-current text-purple-300"
                        cx="11"
                        cy="11"
                        rx="5.5"
                        ry="11"
                      />
                      <path
                        className="stroke-current text-purple-100"
                        d="M11 0v22M0 11h22"
                      />
                      <circle
                        className="stroke-current text-purple-100"
                        cx="11"
                        cy="11"
                        r="11"
                      />
                    </g>
                  </svg>
                  {/* <Image
                    src={logo2}
                    alt="Improves Products Productivity"
                    width={32}
                    height={32}
                  /> */}
                </div>
                <div className="content">
                  <h4 className="mb-4 text-white text-2xl font-bold">Chat</h4>
                  <p className="text-gray-400">
                    Need someone to talk? Chat with Kursor AI and get all the
                    solution to your problem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default Feature;
  
import heroImg from '../assets/banner-stack.png'
const Hero = () => {
  return (
    <section className="container mx-auto bg-base-100">
      <div className="hero-content mx-auto max-w flex">
        <div className=" max-w text-center lg:text-left">
          <h1 className="text-7xl font-extrabold tracking-tight text-base-content">
            Build Your Ideal
            <span className="block bg-linear-to-r from-orange-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className=" my-10 max-w-md text-base text-base-content/60 sm:text-lg lg:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <a href="#" className=" rounded-lg bg-linear-to-r from-orange-500 via-rose-500 to-purple-600  text-sm font-semiboldsm font-semibold px-6 py-3 text-amber-50">
              Explore Technologies
            </a>
            <a href="#" className=' py-2.5 px-10 bg-white border border-gray-200 rounded-xl'>
              Learn More
            </a>
          </div>
        </div>

        <div className="col-auto">
          <img src={heroImg} alt="" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
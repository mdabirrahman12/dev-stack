import heroImg from '../assets/banner-stack.png'
const Hero = () => {
  return (
    <section className="container mx-auto bg-base-100">
      <div className="hero-content mx-auto max-w flex">
        <div className=" max-w text-center lg:text-left">
          <h1 className="font-extrabold tracking-tight text-base-content sm:text-1xl lg:text-[4rem] lg:leading-[1.1]">
            Build Your Ideal
            <span className= "block bg-linear-to-r from-orange-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className=" my-10 max-w-md text-base text-base-content/60 sm:text-lg lg:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="flex items-center justify-center gap-10 lg:justify-start">
            <a href="#" className=" rounded-lg bg-linear-to-r from-orange-500 via-rose-500 to-purple-600 px-6 py-3 
            text-sm font-semibold text-amber-50">
              Explore Technologies
            </a>
            <a href="#" className='btn'>
              Learn More
            </a>
          </div>
        </div>

        <div className=" relative mx-auto w-full max-w-lg">
          <img src={heroImg} alt="" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
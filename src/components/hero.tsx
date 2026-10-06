import heroImg from '../assets/banner-stack.png'
const Hero = () => {
  return (
    <section className="hero min-h-screen bg-base-100">
      <div className="hero-content mx-auto max-w flex">
        <div className=" max-w text-center lg:text-left">
          <h1 className="font-extrabold tracking-tight text-base-content sm:text-5xl lg:text-[3.4rem] lg:leading-[1.12]">
            Build Your Ideal
            <span className="block from-primary">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base text-base-content/60 sm:text-lg lg:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a href="#" className="btn btn-primary border-none ">
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
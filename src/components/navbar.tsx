import Logo from '../assets/logo-text.png'
const Navbar = () => {
  return (

    <nav className='border-b-[2.5px] container mx-auto border-solid border-gray-50 '>
      <div className='py-5 px-25 bg-white text-black container max-auto flex justify-between items-center'>
      <div><a href='#'>
        <img src={Logo} alt="" />
      </a>
      </div>
      <div>
        <ul className='flex justify-center items-center gap-5'>
          <li className=' hover:text-fuchsia-600'><a href="">Home</a></li>
          <li className=' hover:text-fuchsia-600'><a href="">Technologies</a></li>
          <li className=' hover:text-fuchsia-600'><a href=""> Projects</a></li>
          <li className=' hover:text-fuchsia-600'><a href="">About</a></li>
          <li className=' hover:text-fuchsia-600'><a href="">Contact</a></li>
        </ul>
      </div>
      <div className='flex justify-center items-center gap-5'>
        <ul>
          <li><a href="#">Sign In</a></li>
        </ul>
        <button className="btn rounded-full bg-pink-500 hover:bg-pink-600 text-white border-none">
  Sign Up
</button>
      </div>

      </div>
    </nav>
  );
};

export default Navbar;
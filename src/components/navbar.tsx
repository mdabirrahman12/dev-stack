import Logo from '../assets/logo-text.png'
const Navbar = () => {
  return (
    <nav className='bg-white text-black'>
      <div className=' container h-20 mx-auto flex justify-between items-center'>
      <div><a href='#'>
        <img src={Logo} alt="" />
      </a>
      </div>
      <div>
        <ul className='flex justify-center items-center gap-5'>
          <li><a href="">Home</a></li>
          <li><a href="">Technologies</a></li>
          <li><a href=""> Projects</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
      <div className='flex justify-center items-center gap-5'>
        <ul>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
        <div>Sign In</div>
        <button className="btn rounded-full bg-pink-500 hover:bg-pink-600 text-white border-none">
  Sign Up
</button>
      </div>

      </div>
    </nav>
  );
};

export default Navbar;
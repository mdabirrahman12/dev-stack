import Logo from '../assets/logo-text.png'
const Footer = () => {
  return (
    <section className='p-5'>
      <div className=' p-10 flex gap-20'>
        <ul>
          <li className='p-3'><a href="#"><img src={Logo} alt="" /></a></li>
          <li className=' p-3 text-gray-500'>Curated tools, technologies, and resources for developers <br/> building modern software.</li>
          <ul className='flex gap-5 p-3 text-shadow-gray-800 font-bold'>
            <div><a href="#">GitHub</a></div>
          <div><a href="#">Twitter</a></div>
          <div><a href="#">LinkedIn</a></div></ul>
        </ul>
        <div className='flex gap-48'>
        <div><ul className='gap-10'>
          <li className='text-base font-bold'><a href="#">Product</a></li>
          <li className='text-gray-500'><a href="">Home</a></li>
          <li className='text-gray-500'><a href="">Technologies</a></li>
          <li className='text-gray-500'><a href="">Projects</a></li>
          </ul></div>
           <div ><ul>
          <li className='text-base font-bold'><a href="#">COMPANY</a></li>
          <li className='text-gray-500'><a href="">About</a></li>
          <li className='text-gray-500'><a href="">Contact</a></li>
          <li className='text-gray-500'><a href="">Careers</a></li>
          </ul></div>
           <div><ul className='gap-10'>
          <li className='text-base font-bold'><a href="#">LEGAL</a></li>
          <li className='text-gray-500'><a href="">Privacy Policy</a></li>
          <li className='text-gray-500'><a href="">Terms of Service</a></li>
          </ul></div>
          </div>
      </div>
         <div className="divider p-5"></div>
         <div className='flex text-gray-500 gap-250 p-5'><p>© 2026 Dev Stack. All rights reserved.</p>
         <ul className='flex gap-5'><li><a href="">Privacy</a></li>
         <li><a href="">Terms</a></li></ul> </div>
    </section>
  );
};

export default Footer;
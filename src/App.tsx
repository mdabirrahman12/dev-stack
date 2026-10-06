import Navbar from './components/navbar'
import Footer from './components/footer'
import Hero from './components/hero'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <main>main content</main>
      <Footer/>
    </div>
  );
};

export default App;
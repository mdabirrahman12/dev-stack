import Navbar from './components/navbar';
import MainLayout from './components/mainLayout';
import Footer from './components/footer';
import Hero from './components/hero';
import { Suspense } from 'react';
import Loading from './components/loading';

const dataPromise= async()=>{
  const res= await fetch('/data.json');
  const data = await res.json();
  return data;
}
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Suspense fallback={<Loading/>}>
        <MainLayout dataPromise={dataPromise()}/>
      </Suspense>
      <Footer/>
    </div>
  );
};

export default App;
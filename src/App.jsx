

import './App.css'
import FirstNavPar from "./components/1-navPar/FirstNavPar";
import NavParThree from './components/1-navPar/NavParThree';
import SecondNav from "./components/1-navPar/SecondNav";
import Slider from './components/2-Slider/Slider';
import Brands from './components/3-hero/Brands';
import Categories from './components/3-hero/Categories';
import Essentials from './components/3-hero/Essentials';
import ForYou from './components/3-hero/ForYou';
import BeautyPicks from './components/4-Hero2/BeautyPicks';
import HeroTwo from './components/4-Hero2/HeroTwo';
import Clothes from './components/5-Hero3/Clothes';
import ClothesPicks from './components/5-Hero3/ClothesPicks';
import MostSelling from './components/6-Hero3/MostSelling';
import Services from './components/6-Hero3/Services';
import Footer from './components/7-Footer/Footer';




function App() {


  return (
    <div>
      <FirstNavPar />
      <SecondNav />
      <NavParThree />
      <Slider />
      <Categories />
      <ForYou />
      <Brands />
      <Essentials />
      <HeroTwo />
      <BeautyPicks />
      <Clothes />
      <ClothesPicks />
      <MostSelling />
      <Services />
      
      <Footer />
   
    </div>
  );
}

export default App

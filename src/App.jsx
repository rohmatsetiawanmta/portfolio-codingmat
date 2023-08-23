import Header from './components/header';
import Hero from './components/hero';

function App() {
  return (
    <>
      <Header />
      <Hero srcimg={'/images/placeholder.svg'} />
      {/* <Hero srcimg={'/images/hero.png'} /> */}
      {/* <Hero /> */}
    </>
  );
}

export default App;

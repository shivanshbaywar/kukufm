import './App.css';
import Header from './Header';
import Carousel from './components/Carousel'
import React, {Suspense} from 'react';
function App() {
  const LazyCards = React.lazy(() => import('./components/Cards'));
  return (
    <div className="App">
    <Header /> 
    <Carousel />
    <Suspense fallback={<div>Loading...</div>}>
    <LazyCards />
      </Suspense>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom'
import AllAssets from './components/AllAssets';
import Home from './components/Home';
import AllMarkets from './components/AllMarkets';
import Asset from './components/Asset';
import Market from './components/Market';

function App() {
  return(
    <div className='w-full min-w-[20em] h-10 md:max-w-screen-2xl md:m-auto '>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/all-assets' Component={AllAssets}/>
        <Route path='/all-markets' Component={AllMarkets}/>
        <Route path='/get-asset' Component={Asset}/>
        <Route path='/get-market' Component={Market}/>
        <Route path='/*' Component={Home}/>
      </Routes>
    </div>
  )
  
}

export default App;

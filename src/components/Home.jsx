import { useNavigate } from 'react-router'

let navigate;

function Home() {

  navigate = useNavigate ();

  const get_all_assets = ()=>{
    return navigate('/all-assets')
  }

  const get_all_markets = ()=>{
    return navigate('/all-markets')
  }

  const get_asset = ()=>{
    return navigate('/get-asset')
  }

  const get_market = ()=>{
    return navigate('/get-market')
  }

  return (
    <div className="App">
      <div className="w-full min-w-[20em] h-10 md:max-w-screen-2xl md:m-auto ">
        <div className="mt-10 flex flex-col justify-center items-center">
          <span className="my-3 font-bold italic text-2xl">RapidAPI BraveNewCoin</span>

          <button className="bg-green-500 p-3 rounded text-white my-2 " onClick={()=>{get_all_assets()}}>Get All Assets</button>
          <button className="bg-green-500 p-3 rounded text-white my-2 " onClick={()=>{get_all_markets()}}>Get All Markets</button>
          <button className="bg-green-500 p-3 rounded text-white my-2 " onClick={()=>{get_asset()}}>Get Asset By ID</button>
          <button className="bg-green-500 p-3 rounded text-white my-2 " onClick={()=>{get_market()}}>Get Market By ID</button>

        </div>
      </div>
    </div>
  );
}

export default Home;

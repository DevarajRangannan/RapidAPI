
function App() {
  return (
    <div className="App">
      <div className="w-full min-w-[20em] h-10 md:max-w-screen-2xl md:m-auto ">
        <div className="mt-10 flex flex-col justify-center items-center">
          <span className="my-3 font-bold italic">RapidAPI BraveNewCoin</span>

          <button className="bg-green-500 p-3 rounded text-white my-2 ">Get All Assets</button>
          <button className="bg-green-500 p-3 rounded text-white my-2 ">Get All Markets</button>
          <button className="bg-green-500 p-3 rounded text-white my-2 ">Get Asset By ID</button>
          <button className="bg-green-500 p-3 rounded text-white my-2 ">Get Market By ID</button>
          
        </div>
      </div>
    </div>
  );
}

export default App;

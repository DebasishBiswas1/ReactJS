import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-screen h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="gap-3 flex flex-wrap justify-center px-2 py-2 rounded-xl bg-slate-50 text-black">
        <button
          type="button"
          onClick={()=>setColor("violet")}
          className="rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          style={{backgroundColor:"violet"}}
        >
          Violet
        </button>
        <button
          type="button"
          onClick={()=>setColor("red")}
          className="rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          style={{backgroundColor:"red"}}
        >
          Red
        </button>
        <button
          type="button"
          onClick={()=>setColor("cyan")}
          className="rounded-full px-5 py-2 text-sm font-semibold text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          style={{backgroundColor:"Cyan"}}
        >
          Cyan
        </button>
        <button
          type="button"
          onClick={()=>setColor("yellow")}
          className="rounded-full px-5 py-2 text-sm font-semibold text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          style={{backgroundColor:"Yellow"}}
        >
          Yellow
        </button>
        </div>
      </div>
    </div>
  );
}

export default App;

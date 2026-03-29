"use client";
import { useState } from "react";

export default function Home() {
  const [eDia, setEDia] = useState(false);

  return (
    <div 
      onClick={() => setEDia(!eDia)}
      className={`flex flex-col justify-center items-center h-screen transition-colors duration-700 cursor-pointer overflow-hidden ${
        eDia ? "bg-sky-300" : "bg-slate-950"
      }`}
    >
      <div className={`absolute top-20 transition-all duration-1000 ${eDia ? "translate-y-0" : "translate-y-10"}`}>
        {eDia ? (
          <div className="w-20 h-20 bg-yellow-400 rounded-full shadow-[0_0_50px_#facc15]" />
        ) : (
          <div className="w-16 h-16 bg-slate-200 rounded-full shadow-[0_0_30px_#f8fafc]" />
        )}
      </div>

      <div className="text-center z-10">
        <h1 className={`text-2xl font-bold mb-8 transition-colors ${eDia ? "text-slate-800" : "text-white"}`}>
          {eDia ? "O lobo está descansando..." : "Auuu! O lobo observa a lua"}
        </h1>

        <div className="text-8xl transition-all duration-500 transform">
          {eDia ? (
            <span className="block scale-x-[-1] animate-pulse">🐺💤</span> 
          ) : (
            <div className="animate-bounce">
              <span className="block -rotate-45">🐺</span> 
            </div>
          )}
        </div>
      </div>

      <div className={`absolute bottom-0 w-full h-1/4 transition-colors duration-700 ${
        eDia ? "bg-green-800" : "bg-emerald-950"
      }`} />
    </div>
  );
}
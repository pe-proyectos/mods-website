import React from "react";

const StatisticsCount = () => {
  return (
    <div className="bg-[#171212] w-full max-w-[630px] mx-auto flex flex-row gap-2 justify-around max-sm:flex-col max-sm:w-1/2 max-[500px]:w-3/4 ">
      <div className="flex flex-col gap-1 w-1/3 items-center py-2 max-sm:w-full">
        <p className="opacity-80">{"Descargas"}</p>
        <p className="text-4xl font-black text-[#1DB88E] tracking-tighter">{"378511"}</p>
        <p className=" text-[#1DB88E] text-[11px]">{"Desde 2023"}</p>
      </div>
      <div className="flex flex-col gap-1  w-1/3 items-center max-sm:w-full border-l-[1px] border-r-[1px] border-shadow px-10  max-sm:border-0  max-sm:border-b-[1px] max-sm:border-t-[1px] max-sm:px-0  py-2   ">
        <p className="opacity-80">{"Usuarios"}</p>
        <p className="text-4xl font-black text-[#1DB8AB] tracking-tighter">{"474"}</p>
        <p className=" text-[#1DB88E] text-[11px]">{"Registrados"}</p>
      </div>
      <div className="flex flex-col gap-1  w-1/3 items-center py-2 max-sm:w-full">
        <p className="opacity-80">{"Mods Publicados"}</p>
        <p className="text-4xl font-black text-[#1EB854] tracking-tight ">{"140"}</p>
        <p className=" text-[#1DB88E] text-[11px]">{"De 22 desarrolladores"}</p>
      </div>
    </div>
  );
};

export default StatisticsCount;

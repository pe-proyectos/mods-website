import React, {useState} from "react";
import { callAPI } from "../utils/callApi";

const StatisticsCount = () => {
  const [download, setDownload] = useState(0);
  const [user, setUser] = useState(0);
  const [mods, setMods] = useState(0);
  const [developers, setDevelopers] = useState(0);

  React.useEffect(() =>{
    callAPI('/api/stats')
    .then(([error, stat]) => {
      setDownload(stat.downloads);
      setUser(stat.users);
      setMods(stat.mods);
      setDevelopers(stat.developers);
    }
    )
  },[])

  return (
    <div className="bg-[#171212] w-full max-w-[630px] mx-auto flex flex-row gap-2 justify-around max-sm:flex-col max-sm:w-1/2 max-[500px]:w-3/4 ">
      <div className="flex flex-col gap-1 w-1/3 items-center py-2 max-sm:w-full">
        <p className="opacity-80">{"Download"}</p>
        <p className="text-4xl font-black text-[#1DB88E] tracking-tighter">{download}</p>
        <p className=" text-[#1DB88E] text-[11px]">{"From 2023"}</p>
      </div>
      <div className="flex flex-col gap-1  w-1/3 items-center max-sm:w-full border-l-[1px] border-r-[1px] border-shadow px-10  max-sm:border-0  max-sm:border-b-[1px] max-sm:border-t-[1px] max-sm:px-0  py-2   ">
        <p className="opacity-80">{"Users"}</p>
        <p className="text-4xl font-black text-[#1DB8AB] tracking-tighter">{user}</p>
        <p className=" text-[#1DB88E] text-[11px]">{"Registered"}</p>
      </div>
      <div className="flex flex-col gap-1  w-1/3 items-center py-2 max-sm:w-full">
        <p className="opacity-80">{"Published Mods"}</p>
        <p className="text-4xl font-black text-[#1EB854] tracking-tight ">{mods}</p>
        <p className=" text-[#1DB88E] text-[11px]">{"of "}{developers}{" developers"}</p>
      </div>
    </div>
  );
};

export default StatisticsCount;

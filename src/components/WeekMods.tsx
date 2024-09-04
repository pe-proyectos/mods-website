import React, { useState } from "react";
import { CardWeekMod } from "./Cards";
import { callAPI } from "../utils/callApi";

const WeekMods = () => {
  const [dataWeekMod, setDataWeekMod] = useState([]);

  React.useEffect(() => {
    callAPI("/api/mods/featured").then(([error, data]) => {
      setDataWeekMod(data);
    });
  },[]);

  return (
    <section className="w-[90%] mx-auto flex flex-col gap-8 items-center  max-[830px]:hidden">
      <h2 className="text-text_primary text-4xl font-semibold">Mods of the Week</h2>
      <div className="flex flex-wrap justify-around  min-h-64">
        {dataWeekMod.map((item: any) => {
          return (
            <CardWeekMod
              topNumber={1}
              abstract={""}
              downloadNumbersWeek={item.last_week_downloads}
              downloadNumbersTotal={item.total_downloads}
              id={item.id}
              img={item.thumbnail_url}
              owner={item.user_name}
              title={item.name}
              key={item.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WeekMods;

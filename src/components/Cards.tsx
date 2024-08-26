import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { PiTimerFill } from "react-icons/pi";
import useHover from "../utils/useHover";

interface CardModProps {
  id: string;
  title: string;
  type: string;
  img: string;
  owner: string;
  version: number | string;
  abstract: string;
  downloadNumbers: number;
  timeAgo: number | string;
  nsfw: boolean;
}

export const CardMod: React.FC<CardModProps> = ({
  id,
  title,
  type,
  img,
  owner,
  version,
  abstract,
  downloadNumbers,
  timeAgo,
  nsfw,
}) => {
  return (
    <div className="max-w-[370px] min-w-[300px]   bg-secundary rounded-xl overflow-hidden  ">
      <figure className="w-full overflow-hidden object-cover relative h-[40%] min-h-[220px]">
        <img src={img} alt={title} className="opacity-80 " />
        {nsfw ? (
          <div className="absolute right-3 top-3 flex gap-2">
            <p className=" bg-[#1d1c1c63] px-3 py-0.5 rounded-md text-xs ">{type}</p>
            <p className=" bg-transparent  border-text_greenBlue  border text-text_greenBlue  px-3 py-0.5 rounded-md text-xs ">
              {"NSFW"}
            </p>
          </div>
        ) : (
          <p className="absolute right-3 top-3 bg-[#1d1c1c63] px-3 py-0.5 rounded-md text-xs ">
            {type}
          </p>
        )}
      </figure>
      <div className="w-full flex flex-col gap-2 py-2 px-4 text-text_primary ">
        <div className="w-full">
          <p className="flex flex-row gap-2 items-center">
            <span className="font-semibold text-xl">{title}</span>
            <sup className="text-[#09CDB3]">{version}</sup>
          </p>
        </div>
        <p className="text-[14px]">
          by <span className="text-btn_primary">{owner}</span>
        </p>
        <p className="text-[14px] line-clamp-3 text-ellipsis">{abstract}</p>
        <div className="w-full flex justify-end">
          <button
            className="btn btn-outline btn-accent py-1 min-h-[2.5rem] h-[2.5rem]"
            onClick={() => {
              if (id !== "-1") alert(`ID: ${id}`);
            }}
          >
            Ver más
          </button>
        </div>
        <div className="flex flex-row gap-3 w-full justify-end text-[11px]">
          <p className="flex flex-row gap-2 text-btn_primary">
            {`${downloadNumbers} descargas`}
            <HiMiniArrowTrendingUp className="size-4" />
          </p>
          <p className="flex flex-row gap-2">
            <PiTimerFill className="size-4" />
            {`${timeAgo} days ago`}
          </p>
        </div>
      </div>
    </div>
  );
};

interface CardWeekModProps {
  topNumber: number;
  id: string;
  title: string;
  img: string;
  owner: string;
  abstract: string;
  downloadNumbersWeek: number;
  downloadNumbersTotal: number;
}

export const CardWeekMod: React.FC<CardWeekModProps> = ({
  topNumber,
  id,
  title,
  img,
  owner,
  abstract,
  downloadNumbersWeek,
  downloadNumbersTotal,
}) => {
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover();

  return (
    <a
      className="mb-5 max-w-[370px] min-w-[300px] min-h-[225px]    rounded-xl   overflow-hidden object-cover relative cursor-pointer"
      onClick={() => {
        alert(id);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={img} alt={title} className=" h-[225px]" />
      <div
        className={
          "w-full min-w-[300px] min-h-[225px] absolute top-0  bg-[#000000bc] flex flex-col justify-between gap-2  py-8 px-[14px] " +
          (isHovered ? " block" : " hidden")
        }
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-1 items-center  ">
            <p className="text-white font-bold text-4xl mr-1">#{topNumber}</p>
            <p className="text-text_blue text-xl font-semibold line-clamp-2 text-ellipsis w-fit    ">
              {title}
            </p>
            <sup className="text-text_blue  h-full line-clamp-2 text-ellipsis text-xs ">{`by ${owner}`}</sup>
          </div>

          <p className="text-text_primary line-clamp-3 text-ellipsis ">{abstract}</p>
        </div>

        <p className="text-[15px] text-text_primary ">
          <span className="text-text_green "> {`${downloadNumbersWeek} `}</span>
          descargas en la última semana
          <span className="text-text_greenBlue">{` (${downloadNumbersTotal} total)`}</span>
        </p>
      </div>
    </a>
  );
};

interface CardDownloadModProps {
  id: string;
  img: string;
  abstract: string;
  followers: number;
  currentVersion: string;
  downloadLink: string;
  timeAgo: string;
  downloadNumbers: number;
}

export const CardDownloadMod: React.FC<CardDownloadModProps> = ({
  id,
  img,
  abstract,
  currentVersion,
  downloadLink,
  downloadNumbers,
  followers,
  timeAgo,
}) => {
  return (
    <div className="w-[full] flex flex-col bg-secundary rounded-lg items-center gap-4 p-3 overflow-hidden ">
      <img
        src={img}
        className="rounded-lg object-cover h-[350px]  max-sm:min-h-[200px] max-[540px]:min-h-[150px] w-full "
      />
      <p className="max-[540px]:text-center">{abstract}</p>
      <div className="flex flex-row items-center gap-5 justify-center   max-[540px]:flex-col max-[540px]:w-full ">
        <button className="btn btn-outline btn-accent rounded-full min-w-[200px]  max-[540px]:w-3/4">
          Descarga Directa
        </button>
        <button className="btn btn-outline btn-success rounded-full min-w-[200px] max-[540px]:w-3/4">
          Insalación en un click
        </button>
      </div>
      <div className="flex flex-row gap-3  text-xs max-[540px]:flex-col  ">
        <div className="flex flex-row gap-3 ">
          <p className="flex flex-row gap-2 text-btn_primary">
            <HiMiniArrowTrendingUp className="size-4 " />
            {`${downloadNumbers} descargas`}
          </p>
          <p className="flex flex-row gap-2 text-text_greenBlue">{`${followers} seguidores`}</p>
        </div>

        <p className="flex flex-row gap-2 opacity-70">
          <PiTimerFill className="size-4 " />
          {`Versión  ${currentVersion} lanzado ${timeAgo} ago`}
        </p>
      </div>
    </div>
  );
};

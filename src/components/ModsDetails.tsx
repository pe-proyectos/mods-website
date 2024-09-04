import React, {useState} from "react";
import { CardDownloadMod } from "../components/Cards";
import { TableHistoryVersion } from "../components/Tables";
import Comments from "../components/Comments";
import { callAPI } from "../utils/callApi";

interface ModDetailsProps {
    mod_code: string;
  }
  
export const ModDetails: React.FC<ModDetailsProps> = ({mod_code}) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [short_description, setShort_description] = useState(0);
  const [isNSFW, setIsNSFW] = useState(0);
  const [isApproved, setIsApproved] = useState(0);
  const [isFeatured, setIsFeatured] = useState('');
  const [category_slug, setCategory_slug] = useState('');
  const [category_name, setCategory_name] = useState('');
  const [user_name, setUser_name] = useState('');
  const [user_slug, setUser_slug] = useState('');
  const [user_imageUrl, setUser_imageUrl] = useState('');
  const [thumbnail_url, setThumbnail_url] = useState('');
  const [primary_imageUrl, setPrimary_imageUrl] = useState('');
  const [dependencies, setDependencies] = useState('');
  const [type, setType] = useState('');
  const [latest_version, setLatest_version] = useState('');
  const [downloads, setDownloads] = useState(0);
  const [favorites, setFavorites] = useState(0);
  const [total_downloads, setTotal_downloads] = useState(0);
  const [versions, setVersions] = useState([]);
  const [time_ago, setTime_ago] = useState('');

  React.useEffect(() => {
    callAPI('/api/mods/' + mod_code)
    .then(([error, info]) => {
      console.log(info)
      setId(info.id);
      setName(info.name);
      setSlug(info.slug);
      setDescription(info.description);
      setShort_description(info.short_description);
      setIsNSFW(info.nsfw);
      setIsApproved(info.approved);
      setIsFeatured(info.featured);
      setCategory_slug(info.category_slug);
      setCategory_name(info.category_name);
      setUser_name(info.user_name);
      setUser_slug(info.user_slug);
      setUser_imageUrl(info.user_imageUrl);
      setThumbnail_url(info.thumbnail);
      setPrimary_imageUrl(info.primary_image);
      setDependencies(info.dependencies);
      setType(info.type);
      setLatest_version(info.latest_version);
      setDownloads(info.downloads);
      setFavorites(info.favorites);
      setTotal_downloads(info.total_downloads);
      setVersions(info.versions);
      setTime_ago(info.time_ago);
    }
    )
  })

  return(
<div>
  <div className="flex flex-col gap-1 text-text_primary mx-auto items-center">
  <h1
    className="text-5xl mt-2 font-semibold max-sm:text-4xl max-[480px]:text-3xl max-[370px]:text-2xl"
  >
    { name }
  </h1>
  <p>
    por <span className="text-text_blue cursor-pointer hover:underline">{ user_name }</span>
  </p>
</div>

<div className="w-full px-10 mx-auto flex flex-row gap-2 mt-3 max-lg:flex-col">
  <div className="w-[50%] max-lg:w-full">
    <CardDownloadMod
      id="12"
      img={primary_imageUrl}
      abstract={description}
      currentVersion={latest_version}
      downloadLink={"/"}
      downloadNumbers={downloads}
      followers={favorites}
      timeAgo={time_ago}>
    </CardDownloadMod>
  </div>
  
  <div className="w-[50%] bg-[#161B22] rounded-lg min-h-[450px] max-lg:w-full">
    <textarea className="w-full bg-transparent min-h-[450px] text-text_primary font-mono py-5 px-6 text-start"
      disabled value={description}>
    </textarea>
  </div>
</div>

<div className="w-full px-10 flex cols-2 space-x-2 mt-5 mb-10 items-center flex-col lg:flex-row">
  <div className="lg:w-1/2 w-full">
    <p className="text-text_primary text-3xl font-semibold max-sm:text-2xl text-center mb-3 max-[480px]:text-3xl max-[370px]:text-xl">
      Historial de versiones
    </p>
    <TableHistoryVersion HistoryVersionArray={versions} />
  </div>
  <div className="lg:w-1/2 w-full">
    <p
      className="text-text_primary text-3xl font-semibold max-sm:text-2xl text-center mb-3 sm:mt-10 max-[480px]:text-3xl max-[370px]:text-xl"
    >
      Comentarios
    </p>
    <Comments />
  </div>
</div>
</div>
  )}

  
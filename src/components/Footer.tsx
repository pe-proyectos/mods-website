import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

interface Props {
  title: string;
  footerDescription: string;
  logoFooterImageUrl: string;
  youtubeUrl: string;
  facebookUrl: string;
  xUrl: string;
  instagramUrl: string;
  discordUrl: string;
  footerRelatedSitesCategory: Array<{
    id: number;
    title: string;
    gameId: number;
    gameRelatedSites: Array<{
      id: number;
      name: string;
      description: string;
      url: string;
    }>;
  }>;
}
const Footer: React.FC<Props> = (props) => {
  console.log("props");
  console.log(props);

  const linkTo = (title: string, url: string) => {
    return (
      <a className="hover:underline cursor-pointer" href={url} target="_blank">
        {title}
      </a>
    );
  };

  return (
    <footer className="py-4 px-3 flex flex-col gap-8 ">
      <div className="w-full flex flex-col md:flex-row text-sm text-text_primary px-4">
        {props.footerRelatedSitesCategory.map((footerCategory) => (
          <div key={footerCategory.id} className="flex flex-col gap-1 flex-1 mb-6">
            <p className="font-bold text-[#827F7F] text-base mb-3">{footerCategory.title}</p>
            {footerCategory.gameRelatedSites.map((relatedSite) => (
              <a 
                key={relatedSite.id} 
                className="hover:underline cursor-pointer" 
                href={relatedSite.url} 
                target="_blank" 
                rel="noopener noreferrer"
                title={relatedSite.description}
              >
                {relatedSite.name}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="w-full flex flex-row justify-between max-[600px]:flex-col gap-5">
        <div className="flex flex-row">
          <img src={props.logoFooterImageUrl} alt={props.title} className="w-20 grayscale" />
          <div className="flex flex-col items-start text-[14px] text-text_primary ">
            <p className="opacity-85">{props.title}</p>
            <p className="opacity-85">{props.footerDescription}</p>
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center mr-5 max-[600px]:ml-5">
          <FaTwitter className="size-6 text-text_primary hover:opacity-70 cursor-pointer" />
          <IoLogoYoutube className="size-6 text-text_primary hover:opacity-70 cursor-pointer" />
          <FaFacebookF className="size-6 text-text_primary hover:opacity-70 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

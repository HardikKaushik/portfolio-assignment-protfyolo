import React, { useContext } from "react";

import { DataContext } from "../scenes/Context";


const SocialMediaIcons = () => {
  const Item = useContext(DataContext);
  return (
 
   <div>

   
    {Item.data.map((user) => (
      <>
    <div className="flex justify-center md:justify-start my-10 ">
   
      {
                user.social_handles.map((social) => (
                  <>
                
      <a
        className="hover:opacity-50 hover:scale-75 transition duration-500"
        href={social.url}
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" className="w-1/2" src={social.image.url} />
      </a>
     
     
       </>
       ))}
    </div>
      </>
     ))}
     </div>
  );
};

export default SocialMediaIcons;

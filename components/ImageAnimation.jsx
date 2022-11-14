import {motion} from 'framer-motion';
import Script from 'next/script';
import React from "react";


const ImageAnimation = ( {imageURL ,className,link} )  => {
   return(
   
    <motion.div
    className="box"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className={className}>
    <Script src ="https://impulse.contextads.live/Branding_Impulse/branding_contextAds_Impulse_main.js?brandingFlag="></Script>
        <img src={imageURL} ></img></div>
  </motion.div>
   )
}
export default ImageAnimation;
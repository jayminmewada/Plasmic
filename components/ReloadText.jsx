import {motion} from 'framer-motion';
import React from "react";

const ReloadText = ( {imageURL,name , className} )  => {
    return (
        <motion.p initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .4
            }
          },
        }}>
          <div className={className}>
          <img src={imageURL} ></img></div></motion.p>
    )
}
export default ReloadText;
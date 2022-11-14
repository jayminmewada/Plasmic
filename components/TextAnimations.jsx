import {motion} from 'framer-motion';
import React from "react";

const TextAnimations = ( {name, className} )  => {
    return (
        <motion.p  whileHover={{
            scale: 1.2,
            transition: {
              duration: .2
            }
          }}>
          <div className={className}>{name}</div></motion.p>
    )
}
export default TextAnimations;
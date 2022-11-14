import * as React from 'react';
import { PlasmicCanvasHost , registerComponent } from "@plasmicapp/host";
import { PLASMIC } from '../plasmic-init';
import TextAnimations from '../components/TextAnimations';
import ReloadText from '../components/ReloadText'
import ImageAnimation from '../components/ImageAnimation'
import Banner from '../components/Banner';
import Expand from '../components/Expand.js'


registerComponent(TextAnimations,{
    name:"TextAnimations",
    importPath:"../components/TextAnimations.jsx",
    isAttachment:true,
    props:{
        name: {
            type:"string",
            defaultValue:"Plasmic",
        },
        childern:"slot",
    }, 
    defaultStyles: {
        width: '100%',
        maxWidth: '180px'
      }
})
registerComponent(ImageAnimation,{
    name: "ImageAnimation",
    importPath: '../components/ImageAnimation.jsx',
    isAttachment: true,
    props: {
        imageURL:{type:"imageUrl"},
        duration:{type:"string"},
        link:{type:"string"},
        children: "slot",
    },
    defaultStyles: {
        width: '100%',
        maxWidth: '180px'
      }
   
})


registerComponent(ReloadText,{
    name:"ReloadText",
    importPath:"../components/ReloadText.jsx",
    props:{
        name: {
            type:"string",
            
            defaultValue:"Plasmic",
        },
        imageURL:{type:"imageUrl"},
    },
});
registerComponent(Banner,{
    name:"Banner",
    importPath:"../components/Banner.jsx",
    props:{
        Logo: {
            type:"string",
        },
        info: {
            type:"string",
        },
        price: {
            type:"string",
        },
         children: "slot",
        imageURL:{type:"imageUrl"},
    },
});

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}

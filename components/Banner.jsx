import React from "react";

const Banner = ({className,imageURL,Logo,info,price}) => {
    return (
       
      <div className="wrapper">
        
        <div className="row">
          <div className="left">
            <div className="logo">
                
              <a className="Logo" >{Logo}</a>
             
            </div>
            <div className="titleBox">
              <div className="title">
                
                <h3 className="titleTwo">{info}</h3>
               
              </div>
            </div>
            <div className="details">
           
              <h4 className="price">{price}</h4>
            </div>
          </div>
          <div className="right">
          <img className={className} src={imageURL}></img>
          </div>
        </div>
      </div>
      
     
    );
  }
  export default Banner;
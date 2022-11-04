import React from 'react';
import "./index.css";
import { 
  FaLinkedin, 
  FaGithubSquare, 
  FaYoutubeSquare, 
  FaConfluence
 } from "react-icons/fa";

function Footerv1(props) {
    const time = new Date();
    const currentYear = time.getFullYear();    
    return (
        <div className="footer-4-dark">
        <div className="background">
          <span className="upskill-for-a-better">
          {props.upskillForABetter}
          </span>
          <span className="request-more-informa">{props.requestMoreInforma}</span>
          <span className="bostel-technologies">{props.bostelTechnologies}</span>
          <div className="rectangle">{props.rectangle}</div>
          <span className="num-2019-bostel-llc">Copyright © {currentYear} {props.num2019BostelLlc}</span>
          <img className="line-2" src={props.line2} />
          <div className="flex-container">
            <img className="logo" src={props.logo} />
            <span className="team">{props.item1}</span>
            <span className="case-studies">{props.item2}</span>
            <span>{props.item3}</span>
            <a href={props.linkLinkedin} className='link-shared' target="__blank">
              <FaLinkedin size="1.5rem"/>
            </a>  
            <a href={props.linkGithub} className='link-shared' target="__blank">
            <FaGithubSquare  size="1.5rem"/>
            </a>
            <a href={props.linkYoutube} className='link-shared' target="__blank">
              <FaYoutubeSquare  size="1.5rem"/>
            </a>  
            <a href={props.linkYoutube} className='link-shared' target="__blank">
              <FaConfluence  size="1.5rem"/>
            </a>             
          </div>
        </div>
      </div>
    );
  };

export default Footerv1;
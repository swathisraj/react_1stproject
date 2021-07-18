
import React, { Component } from "react";
import { FaInstagramSquare } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';

import { AiFillLinkedin } from 'react-icons/ai';
import { MdCall } from 'react-icons/md';
import {SiGmail} from 'react-icons/si';

 
class Contact extends Component {
  render() {
    return (
      <div id="linkclass">
      <p><b>Eager to know more about small business store? Your assisstant is here to help you!</b></p>
      <span style={{cursor: "pointer"}}><a id="link1" href="https://www.instagram.com/swathi.sraj/"><FaInstagramSquare color="black" size="2em"/></a>
      <a id="link2" href="https://wa.me/9738955966"><SiWhatsapp color="black"size="2em"/> </a>
      
      <a id="link4" href="https://www.linkedin.com/in/swathi-s-raj-5994511b2"><AiFillLinkedin color="black"size="2em"/></a>
      <a id="link5" href="tel:+9738955966"><MdCall color="black"size="2em"/></a>
      <a id="link6" href = "mailto: swathisraj47609@gmail.com"><SiGmail color="black"size="2em"/></a></span>
    </div>
  );
}
}

export default Contact;
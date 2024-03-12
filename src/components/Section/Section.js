import React, { Component } from "react";
import "./Section.css";
import Event from "../Event/Event.js";
import Organizer from "../Organizer/Organizer.js";
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";
import Sponsor from "../Sponsor/Sponsor.js";
import Partners from "../Partners/Partners.js";
import Past from "../Past/Past.js";

class Section extends Component {
  render() {
    return (
      <div className="Section">
        <h2>{this.props.section.sectionName}</h2>
        <h3>{this.props.section.subtitle}</h3>
        {this.props.section.sectionName === "About this hackathon" && <About />}
        {this.props.section.sectionName === "Past Events" && <Past />}
        {this.props.section.sectionName === "Themes" && (
          <Event />
        )}
        {this.props.section.sectionName === "Sponsors" && <Sponsor />}
        {this.props.section.sectionName === "Partners" && <Partners />}
        {this.props.section.sectionName === "FAQ" && <Contact />}
        {this.props.section.sectionName === "Our Team" && <Organizer />}
      </div>
    );
  }
}

export default Section;

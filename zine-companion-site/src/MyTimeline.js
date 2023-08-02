import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const MyTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<i className="fas fa-briefcase"></i>}
      >
        <h3 className="vertical-timeline-element-title">The Begining</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>Alan Turing concieves of AI</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<i className="fas fa-briefcase"></i>}
      >
        <h3 className="vertical-timeline-element-title">Primitive NLP</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>Primitive alogirithm generates Olivia Rodrigo Lyrics</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<i className="fas fa-briefcase"></i>}
      >
        <h3 className="vertical-timeline-element-title">Primitive NLP</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>Primitive alogirithm generates Olivia Rodrigo Lyrics</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<i className="fas fa-briefcase"></i>}
      >
        <h3 className="vertical-timeline-element-title">Primitive NLP</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>Primitive alogirithm generates Olivia Rodrigo Lyrics</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<i className="fas fa-briefcase"></i>}
      >
        <h3 className="vertical-timeline-element-title">Primitive NLP</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>Primitive alogirithm generates Olivia Rodrigo Lyrics</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<i className="fas fa-briefcase"></i>}
      >
        <h3 className="vertical-timeline-element-title">Primitive NLP</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>Primitive alogirithm generates Olivia Rodrigo Lyrics</p>
      </VerticalTimelineElement>

      {/* Add more VerticalTimelineElement components here for other events */}
    </VerticalTimeline>
  );
};

export default MyTimeline;

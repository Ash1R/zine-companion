import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./FuzzyBackground.css"; // Import your CSS file for styling

const MyTimeline = () => {
  return (
    <div className="fuzzy-background">
      <div className="content">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "oldlace", color: "black" }}
            contentArrowStyle={{ borderRight: "oldlace" }}
            iconStyle={{ background: "oldlace", color: "black" }}
            icon={<i className="fas fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">1943</h3>
            <h4 className="vertical-timeline-element-subtitle">
              1st Neural Network
            </h4>
            <p>
              {" "}
              The first neural network was developed by McCulloch and Pitts.
              This development made it possible for computers to be fed
              information from various sources and generate one outcome.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "oldlace", color: "black" }}
            contentArrowStyle={{ borderRight: "oldlace" }}
            iconStyle={{ background: "oldlace", color: "black" }}
            icon={<i className="fas fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">1950</h3>
            <h4 className="vertical-timeline-element-subtitle">Binary Logic</h4>
            <p>
              Computers transitioned from functioning off the decimal logic to
              binary logic, allowing for data to be more thoroughly processed in
              a quicker time period and universal language. Alan Turing
              introduces the concept of a “general machine”, a theoretical
              proto-AI.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "oldlace", color: "black" }}
            contentArrowStyle={{ borderRight: "oldlace" }}
            iconStyle={{ background: "oldlace", color: "black" }}
            icon={<i className="fas fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">1956</h3>
            <h4 className="vertical-timeline-element-subtitle">
              AI becomes a term
            </h4>
            <p>
              {" "}
              J. McCarthy, AI pioneer, coins the term “Artificial intelligence”
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "oldlace", color: "black" }}
            contentArrowStyle={{ borderRight: "oldlace" }}
            iconStyle={{ background: "oldlace", color: "black" }}
            icon={<i className="fas fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">1961</h3>
            <h4 className="vertical-timeline-element-subtitle">Unimate!</h4>
            <p>
              The first industrial robot, Unimate, was invented and used by
              General Motors as a key asset to their assembly line production.
            </p>
          </VerticalTimelineElement>
          <a href={"https://web.njit.edu/~ronkowit/eliza.html"}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "oldlace", color: "black" }}
              contentArrowStyle={{ borderRight: "oldlace" }}
              iconStyle={{ background: "oldlace", color: "black" }}
              icon={<i className="fas fa-briefcase"></i>}
            >
              <h3 className="vertical-timeline-element-title">1964</h3>
              <h4 className="vertical-timeline-element-subtitle">Try ELIZA!</h4>
              <h4
                style={{ fontWeight: "bold" }}
                className="vertical-timeline-element-subtitle"
              >
                {" "}
                Click on this to talk to ELIZA!
              </h4>

              <p>
                Eliza, the first chatbot. Eliza was used in the 60s as a
                psychotherapeutic chatbot so as to give responses to those who
                utilized her as a therapeutic means, providing them with a sense
                of security in someone who “understands” their problems.
              </p>
            </VerticalTimelineElement>
          </a>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "oldlace", color: "black" }}
            contentArrowStyle={{ borderRight: "oldlace" }}
            iconStyle={{ background: "oldlace", color: "black" }}
            icon={<i className="fas fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">1997</h3>
            <h4 className="vertical-timeline-element-subtitle">
              The Great Game
            </h4>
            <p>
              {" "}
              Garry Kasporov, the main chess grandmaster of the nineties and
              15-year-running World Chess Champion, suffered defeat at the
              metaphorical hands of DeepBlue, a new AI invented by IBM. This was
              the first large-scale loss by a human to AI, and as such, a first
              milestone. Kasparov claimed DeepBlue was bogus.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "oldlace", color: "black" }}
            contentArrowStyle={{ borderRight: "oldlace" }}
            iconStyle={{ background: "oldlace", color: "black" }}
            icon={<i className="fas fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">1997</h3>
            <h4 className="vertical-timeline-element-subtitle">
              The Great Game
            </h4>
            <p>
              {" "}
              Garry Kasporov, the main chess grandmaster of the nineties and
              15-year-running World Chess Champion, suffered defeat at the
              metaphorical hands of DeepBlue, a new AI invented by IBM. This was
              the first large-scale loss by a human to AI, and as such, a first
              milestone. Kasparov claimed DeepBlue was bogus.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "oldlace", color: "black" }}
            contentArrowStyle={{ borderRight: "oldlace" }}
            iconStyle={{ background: "oldlace", color: "black" }}
            icon={<i className="fas fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">2010</h3>
            <h4 className="vertical-timeline-element-subtitle">A Leap</h4>
            <p>
              {" "}
              AI gains its current text capabilities. The efficiency levels of
              AI are made possible through computer graphics cards, and it
              begins to be used in current events.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "oldlace", color: "black" }}
            contentArrowStyle={{ borderRight: "oldlace" }}
            iconStyle={{ background: "oldlace", color: "black" }}
            icon={<i className="fas fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">2011</h3>
            <h4 className="vertical-timeline-element-subtitle">Hey Siri!</h4>
            <p>
              {" "}
              Siri was released for usage on all aptly-equipped Apple devices.
              Throughout the years, she has only grown in her capabilities as a
              digital assistant through her comprehension of vocal commands and
              ability to respond to conversational topics.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "oldlace", color: "black" }}
            contentArrowStyle={{ borderRight: "oldlace" }}
            iconStyle={{ background: "oldlace", color: "black" }}
            icon={<i className="fas fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">2014</h3>
            <h4 className="vertical-timeline-element-subtitle">The GANs Can</h4>
            <p>
              {" "}
              GAN (General Adversarial Network) models introduced by Ian
              Goodfellow, revolutionizing modern generative modeling.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "oldlace", color: "black" }}
            contentArrowStyle={{ borderRight: "oldlace" }}
            iconStyle={{ background: "oldlace", color: "black" }}
            icon={<i className="fas fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">2017</h3>
            <h4 className="vertical-timeline-element-subtitle">
              OpenAI enters the scene
            </h4>
            <p> OpenAI releases the Wavenet mode for audio synthesis</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "oldlace", color: "black" }}
            contentArrowStyle={{ borderRight: "oldlace" }}
            iconStyle={{ background: "oldlace", color: "black" }}
            icon={<i className="fas fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">2019</h3>
            <h4 className="vertical-timeline-element-subtitle">The calm...</h4>
            <p>
              {" "}
              OpenAI releases GPT-2, a precursor to the better known GPT-3.
              Limited debate about AI ethics begin, but the release flies under
              the radar.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "oldlace", color: "black" }}
            contentArrowStyle={{ borderRight: "oldlace" }}
            iconStyle={{ background: "oldlace", color: "black" }}
            icon={<i className="fas fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">2022</h3>
            <h4 className="vertical-timeline-element-subtitle">
              ...before the storm
            </h4>
            <p>
              {" "}
              Chat GPT-3 was released. This was the catalyst of AI text
              generators garnering heavy news coverage and international
              precedence, as well as them being thoroughly accessible to the
              global majority.
            </p>
          </VerticalTimelineElement>

          {/* Add more VerticalTimelineElement components here for other events */}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default MyTimeline;

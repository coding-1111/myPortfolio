import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Experiences = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="experience" id="experiences">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="experience-bx wow zoomIn">
                        <h2>Experiences</h2>                        
                        <p>I am a highly skilled software engineer with almost 2 years of experience in designing and delivering software solutions accross multiple technical areas within various business functions </p>
                        <VerticalTimeline>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2019"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                          >
                            <h3 className="vertical-timeline-element-title">Amdocs Fresher</h3>
                            <h4 className="vertical-timeline-element-subtitle">3 months</h4>
                            <p>
                              Worked as a software developer in the Amdocs for almost 1.2 years.
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2011 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                          >
                            <h3 className="vertical-timeline-element-title">Title of section</h3>
                            <h4 className="vertical-timeline-element-subtitle">Subtitle</h4>
                            <p>
                              Description of the event or milestone
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2011 - present"
                            iconStyle={{ background: '#800080', color: '#800080' }}
                            // icon={<WorkIcon />}
                          >
                            <h3 className="vertical-timeline-element-title">Title of section</h3>
                            <h4 className="vertical-timeline-element-subtitle">Subtitle</h4>
                            <p>
                              Description of the event or milestone
                            </p>
                          </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

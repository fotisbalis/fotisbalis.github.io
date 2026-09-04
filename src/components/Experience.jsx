import { education, career } from '../data/portfolio';
import { TimelineItem } from './TimelineItem';

export function Experience() {
  return (
    <section id="experience" className="section container" aria-labelledby="experience-title">
      <div className="section-heading reveal">
        <p className="eyebrow">Experience</p>
        <h2 id="experience-title">Career to Date</h2>
      </div>
      <div className="timeline-group" aria-labelledby="education-title">
        <h3 id="education-title" className="timeline-group-title">Education</h3>
        <div className="timeline">
          {education.map((item, index) => <TimelineItem item={item} index={index} key={`${item.title}-${item.period}`} />)}
        </div>
      </div>
      <div className="timeline-group" aria-labelledby="career-title">
        <h3 id="career-title" className="timeline-group-title">Career</h3>
        <div className="timeline">
          {career.map((item, index) => <TimelineItem item={item} index={index} key={`${item.title}-${item.period}`} />)}
        </div>
      </div>
    </section>
  );
}

const linkify = (text) => text.split(/(https?:\/\/[^\s]+)/g).map((part, index) => (
  part.startsWith('http')
    ? <a href={part} key={`${part}-${index}`} target="_blank" rel="noreferrer">{part}</a>
    : part
));

export function TimelineItem({ item, index }) {
  return (
    <article className="timeline-item reveal" style={{ '--delay': `${index * 90}ms` }}>
      <div className="timeline-marker" aria-hidden="true" />
      <div className="timeline-meta">
        <span>{item.type}</span>
        <time>{item.period}</time>
      </div>
      <div className="timeline-content">
        <h3>{item.title}</h3>
        <p className="timeline-organization">{item.organization}</p>
        <p>{linkify(item.description)}</p>
        <p className="timeline-detail">{item.details}</p>
      </div>
    </article>
  );
}

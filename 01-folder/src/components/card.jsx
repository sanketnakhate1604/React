export default function Card(props) {
  const {
    company,
    role,
    time,
    tags,
    salary,
    location,
    saved,
    logo,
  } = props;

  return (
    <div className="card">
      <div className="top">
        <img src={logo} alt={company} className="logo" />

        <button className="save-btn">
          {saved ? "Saved" : "Save"}
        </button>
      </div>

      <p className="company">
        {company} <span>{time}</span>
      </p>

      <h3>{role}</h3>

      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>

      <div className="bottom">
        <div>
          <strong>{salary}</strong>
          <p>{location}</p>
        </div>

        <button className="apply">Apply now</button>
      </div>
    </div>
  );
}

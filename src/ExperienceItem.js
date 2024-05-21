const ExperienceItem = ({ company, role, dates, description }) => {
  return (
    <div className="experience-item">
      <h3>{company}</h3>
      <h4>{role} ({dates})</h4>
      <p>{description}</p>
    </div>
  );
};

export default ExperienceItem;

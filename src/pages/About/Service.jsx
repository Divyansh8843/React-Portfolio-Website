export default function Service({ data }) {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <img src={data.icon} alt="icon" width="40" />
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">{data.title}</h4>
        <p className="service-item-text">{data.description}</p>
      </div>
    </li>
  );
}

export default function Testimonial({ data }) {
  return (
    <li className="testimonials-item">
      <div className="content-card">
        <figure className="testimonials-avatar-box">
          <img src={data.avatar} alt="" width="60" />
        </figure>
        <h4 className="h4 testimonials-item-title">{data.name}</h4>
        <div className="testimonials-text">
          <p>{data.testimonial}</p>
        </div>
      </div>
    </li>
  );
}

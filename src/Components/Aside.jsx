import ContactsIcon from "@mui/icons-material/Contacts";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
export default function Aside() {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="/images/Divyansh (1).jpg"
            alt=""
            height="150px"
          />
        </figure>
        <div className="info-content">
          <h1 className="name">Divyansh Agrawal</h1>
          <p className="title">Full Stack Web Developer</p>
        </div>
        <button className="info_more-btn">
          <span>Show Contacts</span>
          <ContactsIcon />
        </button>
      </div>
      {/* contact-info */}
      <div className="sidebar-info_more">
        <hr className="separator2" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <EmailIcon />
            </div>
            <div className="contact-info">
              <p className="contact-title">EMAIL</p>
              <a
                className="contact-link"
                href="mailto:divyanshagrawal8843@gmail.com"
              >
                divyanshagrawal8843@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <PhoneIcon />
            </div>
            <div className="contact-info">
              <p className="contact-title">PHONE</p>
              <a className="contact-link" href="tel:+918817298324">
                +91 88172 98324
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <CalendarMonthIcon />
            </div>
            <div className="contact-info">
              <p className="contact-title">BIRTHDAY</p>
              <time className="contact-link" dateTime="2005-01-21">
                January 21, 2005
              </time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <LocationOnIcon />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Gole Ka Mandir, Gwalior (M.P.)</address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

import logo from "../../images/footer/logo.svg";
import facebook from "../../images/footer/Facebook.svg";
import instagram from "../../images/footer/Instagram.svg";
import linkedin from "../../images/footer/Linked-In.svg";
import telegram from "../../images/footer/Telegram.svg";
import youtube from "../../images/footer/YouTube.svg";
import twitter from "../../images/footer/Twitter.svg";
import mail from "../../images/footer/Mail.svg";
import phone from "../../images/footer/Phone.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__info">
            <img src={logo} alt="Footer logo" className="footer__logo" />
            <p className="footer__description">
              Createx Online School is a leader in online studying. We have lots
              of courses and programs from the main market experts. We provide
              relevant approaches to online learning, internships and employment
              in the largest companies in the country.{" "}
            </p>
            <div className="footer__socials">
              <a href="#">
                <img src={facebook} alt="Social icon" />
              </a>
              <a href="#">
                <img src={twitter} alt="Social icon" />
              </a>
              <a href="#">
                <img src={youtube} alt="Social icon" />
              </a>
              <a href="#">
                <img src={telegram} alt="Social icon" />
              </a>
              <a href="#">
                <img src={instagram} alt="Social icon" />
              </a>
              <a href="#">
                <img src={linkedin} alt="Social icon" />
              </a>
            </div>
          </div>
          <div className="footer__nav">
            <div className="footer__col">
              <p>SITE MAP</p>
              <a href="#" className="footer__link">
                About Us
              </a>
              <a href="#" className="footer__link">
                Courses
              </a>
              <a href="#" className="footer__link">
                Events
              </a>
              <a href="#" className="footer__link">
                Blog
              </a>
              <a href="#" className="footer__link">
                Contacts
              </a>
            </div>
            <div className="footer__col">
              <p>COURSES</p>
              <a href="#" className="footer__link">
                Marketing
              </a>
              <a href="#" className="footer__link">
                Management
              </a>
              <a href="#" className="footer__link">
                HR & Recruting
              </a>
              <a href="#" className="footer__link">
                Design
              </a>
              <a href="#" className="footer__link">
                Development
              </a>
            </div>
            <div className="footer__col">
              <p>CONTACT US</p>
              <a href="tel:1111111111" className="footer__link">
                (111) 111-1111
              </a>
              <a href="mailto:hello@createx.com" className="footer__link">
                hello@createx.com
              </a>
            </div>
          </div>
          <div className="footer__news">
            <p>SIGN UP TO OUR NEWSLETTER</p>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
              />
            </div>
            <span>
              *Subscribe to our newsletter to receive communications and early
              updates from Createx SEO Agency.
            </span>
          </div>
        </div>
      </div>
      <div className="footer__privacy">
        <div className="footer__container">
          <p>© All rights reserved. Made with ♡ by Createx Studio</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            GO TO TOP
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

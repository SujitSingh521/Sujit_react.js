import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter,faInstagram,faGithub,} from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <section
      className="header_css text-light bg-dark p-5 mt-0 text-center text-sm-start"
      id="Home"
    >
      <div className="container py-5">
        <div className="d-sm-flex align-items-center justify-content-between py-5">
          <div className="cd-intro">
            <h1 className="cd-headline rotate-1">
              <span className="cd-words-wrapper">
                <div className="center">
                  <h1>
                    <em>
                      I'M {" "}
                      <b className="is-visible">
                        
                        <span className="text-danger">Sujit Singh</span>
                      </b>
                    </em>
                  </h1>
                </div>
                <div>
                  <h3 className="my-4">Full Stack Developer</h3>
                  <p className="lead my-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. <br />
                    Lorem Ipsum has been the industry's is no standard dummy
                    <br />
                    text ever since the 1500s,
                  </p>
                  <button className="btn btn-outline-danger text-light btn-lg">
                 I'M AVAILABLE
                  </button>
                  <div className="mt-3">
                    <a href="#" className="text-light me-3">
                      <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="#" className="text-light me-3">
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="#" className="text-light me-3">
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="#" className="text-light me-3">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                  </div>
                </div>
              </span>
            </h1>
          </div>
          <a href="#">
            <img
              src="https://st.depositphotos.com/1743476/1276/i/450/depositphotos_12765264-stock-photo-smiling-business-man.jpg"
              className="img-fluid"
              alt="Business Man"
              style={{
                // maxWidth: "100%",
                height: "500px",
                display: "block",
                margin: "0 auto",

              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;

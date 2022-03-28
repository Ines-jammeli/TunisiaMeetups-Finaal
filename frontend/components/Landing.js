import Link from "next/link";


function Landing() {
  return (
    <div>
      <div className="header-wrapper demo-style">
        <div className="container max-container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
              <Link href="/" >
              <a className="logo">
                <i className="feather-zap text-success display2-size me-3 ms-0"></i>
                <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                  Tunisia Meetups
                </span>{" "}
              </a>
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 d-none d-lg-block">
              <ul className="list-inline text-center mb-0 mt-2 pt-1">
                <li className="list-inline-item pe-4 ps-4">
                    <Link className="scroll-tiger" href="/#feature">
                      Our Commitment
                    </Link>
                </li>
                <li className="list-inline-item pe-4 ps-4">
                  <Link className="scroll-tiger" href="#contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6 text-right">
              <Link href="/login">
                <a
                  className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
                >
                  Login
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="banner-wrapper vh-100 bscover demo-style"
        style={{
          backgroundImage: `url("assets/images/demo/banner-bg.png")`,
        }}
      >
        <div className="banner-content">
          <div className="container max-container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-8">
                <h2 className="title-text mb-5 mt-5">
                  <b>
                  Get access to all of <span>Tunisian Associations&apos;</span> Events.
                  </b>
                </h2>
                <h4 className="d-inline-block">
                  +90{" "}
                  <span>
                    Tunisian <br /> Associations
                  </span>
                </h4>
                <h4 className="d-inline-block">
                  +1500{" "}
                  <span>
                    Active <br /> Members
                  </span>
                </h4>
                <h4 className="d-inline-block">
                  +250{" "}
                  <span>
                    Awesome <br /> Events
                  </span>
                </h4>
                <div className="clearfix"></div>

                <div className="icon-scroll pos-bottom-center icon-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section pb100 pt50 demo-style" id="feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://i.pinimg.com/564x/91/6c/47/916c4782c7159bb0e72960f0cb18cbd8--beautiful-smile-beautiful-children.jpg"
                alt="com"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-5 offset-lg-1">
              <h2 className="title-text2 mb-4 mt-5">
                <b>Everybody deservs Happiness</b>
              </h2>{" "}
              <p>
              Join us so that we can bring joy to as many people as possible.
              </p>
              <Link href="/login">
              <a
                className="btn btn-lg btn-primary mr-4 text-uppercase mt-4"
              >
                Join Us
              </a> 
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section pb100 pt50 demo-style" id="feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://priyadogra.com/wp-content/uploads/2021/05/national-environment-awarness-day.jpg"
                alt="com"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-5 offset-lg-1">
              <h2 className="title-text2 mb-4 mt-5">
                <b>Our Planet needs us.</b>
              </h2>{" "}
              <p>
                Life in Plastic ain&apos;t Fantastic. Let&apos;s make our Planet Green and Clean again
              </p>
              <Link href="/login"> 
              <a
                className="btn btn-lg btn-primary mr-4 text-uppercase mt-4"
              >
                Join Us
              </a> 
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section pb100 pt50 demo-style" id="feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://st4.depositphotos.com/16122460/21473/i/450/depositphotos_214731372-stock-photo-volunteers-serving-food-poor-people.jpg"
                alt="com"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-5 offset-lg-1">
              <h2 className="title-text2 mb-4 mt-5">
                <b>Everybody deservs to eat well.</b>
              </h2>{" "}
              <p>
              We want everyone to go to bed full of food. We believe that there is enough food on the planet for everyone.
              </p>
              <Link href="/login"> 
              <a
                className="btn btn-lg btn-primary mr-4 text-uppercase mt-4"
              >
                Join Us
              </a> 
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p100 bg-black demo-style" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="title-text2 text-white mt-4">
                <b>Contact Us</b>
              </h2>
              <p className="text-white ml-5 mr-5">
                Email: tunisia.meetups@gmail.com
              </p>
              <p className="text-white ml-5 mr-5">
                Address: Somwhere in Tunisia
              </p>
              <p className="text-white ml-5 mr-5">
                Tel: 77 777 777
              </p>
              <div className="col-sm-12 text-center mt-5">
                <Link href="/login"> 
                <a  className="btn-lg btn bg-white">
                  Join Us
                </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

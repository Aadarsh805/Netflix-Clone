import "./Landing.css";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Accordion from './Accordion/Accordion'
import {questions} from './Accordion/data'

const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="landing__header">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt=""
            className="landing__logo"
          />

          <div className="landing__buttons">
            <button className="landing__languageBtn landingBtn">
              <LanguageIcon sx={{ height: "20px", width: "20px" }} />
              <span>English</span>
              <ArrowDropDownIcon sx={{ height: "20px", width: "20px" }} />
            </button>
            <Link to="/login" className="landing__signInBtn landingBtn">
              <span>Sign In</span>
            </Link>
          </div>
        </div>

        <div className="landing__hero">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/3a073c5f-0160-4d85-9a42-6f59aa4b64b9/ce862595-09a3-4fbf-b41c-76386c05f759/IN-en-20220718-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt=""
            className="landing__background"
          />

          <div className="landing__hero-content">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="getStarted">
              <input
                type="text"
                className="email"
                placeholder="Email address..."
              />
              <Link to="/login" className="getStarted__link">
                <span>Get Started</span>
                <ArrowForwardIosIcon sx={{ height: "20px", width: "15px" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section-b">
        <div className="section-b__part part1">
          <div className="section-b__content">
            <h2>Enjoy on your TV.</h2>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="section-b__imgContainer">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
            />
            <video loop muted autoPlay >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="section-b__part part2">
          <div className="section-b__content">
            <h2>Download our shows to watch offline.</h2>
            <p>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
          <div className="section-b__imgContainer">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt=""
            />
            <div className="part2__video-container">
              <div className="part2__video-left">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt=""
                  className="part2__video-img"
                />
                <div className="part2__video info">
                  <p>Stranger Things</p>
                  <span>Downloading...</span>
                </div>
              </div>

              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt="gif"
                className="part2__video-right"
              />
            </div>
          </div>
        </div>

        <div className="section-b__part part3">
          <div className="section-b__content">
            <h2>Watch everywhere.</h2>
            <p>
              Stream unlimited movies and TV shows on your phone,tablet, laptop,
              and TV.
            </p>
          </div>
          <div className="section-b__imgContainer">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
              alt=""
            />
            <video loop muted autoPlay>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="section-b__part part4">
          <div className="section-b__content">
            <h2>Create profiles for children.</h2>
            <p>
            Send children on adventures with their favourite characters in a space made just for them—free with your membership.
            </p>
          </div>
          <div className="section-b__imgContainer">
            <img
              src="https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="section-c ">
        <h1>Frequently Asked Questions</h1>
        <div className="accordion__container">
            {questions.map((question) => (
                <Accordion 
                    id={question.id}
                    question={question.question}
                    answer={question.answer}
                />
            ))}
        </div>

        <div className="section-c__getStarted">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>

            <div className="buttonContainer getStarted">
            <input
                type="text"
                className="email"
                placeholder="Email address..."
              />
              <Link to="/login" className="getStarted__link">
                <span>Get Started</span>
                <ArrowForwardIosIcon sx={{ height: "20px", width: "15px" }} />
              </Link>
            </div>
        </div>
      </div>

      <div className="section-d">
        <div className="footer">
                
        </div>
      </div>
    </>
  );
};

export default Landing;

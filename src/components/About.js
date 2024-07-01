import { useContext } from "react";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  const today = new Date();
  const start = new Date(2022, 5, 1); // Months are 0-based, so 5 is June
  
  const yearsOfExperience = today.getFullYear() - start.getFullYear();
  const monthsOfExperience = today.getMonth() - start.getMonth();
  
  if (monthsOfExperience < 0 || (monthsOfExperience === 0 && today.getDate() < start.getDate())) {
      yearsOfExperience--;
  }
  
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          I design and code functional and compliant websites
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/about_bushman.jpg"
                alt="Benjamin Bushman"
              />
            </div>
            <p className="d-block d-md-none">
              {`I'm`} a Freelance UI/UX Designer and Developer based in Idaho, USA.
              I strives to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    Benjamin
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    Bushman
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    American
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>{yearsOfExperience} years
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Location</span>
                    Idaho, USA
                  </h6>
                </li>
               
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Langages</span>
                    English
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>801-372-1410
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    info@benjaminbushman.com
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Available
                  </h6>
                </li>
              </ul>
            </div>
            {/* <div className="col-12 resume-btn-container">
              <a href="#" className="btn btn-resume">
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
              </a>
            </div> */}
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Mar 2023 - Present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Project Manager, Software
                        <span className="separator" />
                        <span className="font-weight-700">American Heritage Worldwide</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Project Manager over software team. Running daily scrum meeting, managing developer tasks, reporting performance and metrics to Product Owner, extending current React and TypeScript projects.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Jan 2023 - Present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        web developer
                        <span className="separator" />
                        <span className="font-weight-700">Network Providers Inc.</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Front end developer building and maintaining websites for clients. React, Next.js, TypeScript, Wordpress.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Oct 2020 - May 2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Network Administrator
                        <span className="separator" />
                        <span className="font-weight-700">Network Providers Inc.</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Network Administrator managing 1000+ student and 200+ faculty accounts and devices. 
                        Managing all file servers, internet access points, domains, and DNS servers.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        June 2022 - Nov 2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Web Development Bootcamp
                        <span className="separator" />
                        <span className="font-weight-700">
                          University of Utah
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Participated and completed the 6 month web development bootcamp. Finished second in cohort of 80 students.
                        Learned JavaScript, React, MongoDB, MySQL, and various industry standards and best practices.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2016
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        High School Degree
                        <span className="separator" />
                        <span className="font-weight-700">
                          American Heritage School
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      Successfully completed high school with a strong academic record, demonstrating dedication and perseverance. 
                      Graduated with honors, actively participating in extracurricular activities and community service projects.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">html</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">css</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">TypeScript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={50}
                  style={{ width: "50%" }}
                />
                <span className="percent" style={{ right: "calc(50% - 21px)" }}>
                  50%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">wordpress</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">React</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={85}
                  style={{ width: "85%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">AWS</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={40}
                  style={{ width: "40%" }}
                />
                <span className="percent" style={{ right: "calc(60% - 21px)" }}>
                  40%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Figma</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">DNS</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={95}
                  style={{ width: "95%" }}
                />
                <span className="percent" style={{ right: "calc(5% - 21px)" }}>
                  95%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;

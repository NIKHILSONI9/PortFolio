import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Undergrad Student</h4>
                <h5>Jaypee University of Engineering and Technology</h5>
              </div>
              <h3>2022-26</h3>
            </div>
            <p>
            Welcome! I’m Nikhil Soni, a third-year B.Tech student at Jaypee University, Guna, with strong skills in Java, Python, web development, and machine learning.
             I’ve developed projects like a bus ticket booking system and a virtual wardrobe assistant, highlighting my expertise in programming, system design, and user experience.

My internships at Walmart and Goldman Sachs provided hands-on experience in software engineering, IT security, and problem-solving. I’m now honing my DSA and algorithm skills, preparing 
for roles at top tech companies like Google. Explore my portfolio to see how I apply my skills to real-world challenges!
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>INTERN</h4>
                <h5>Codsoft</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
              Aat Codsoft, I have significantly advanced my Java skills, mastering key concepts such as object-oriented programming (OOP), data structures, and algorithms. 
              The hands-on experience provided by the internship allowed me to apply my theoretical knowledge to real-world projects, where I contributed to coding, debugging,
               and testing software solutions. Working on live projects at Codsoft not only strengthened my technical proficiency in Java but also enhanced my problem-solving 
               abilities and familiarity with industry best practices. This experience has helped me become highly adept at tackling complex tasks in Java, preparing me for more 
               advanced roles in the tech industry.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5> Radical X</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              At Radical X, I gained valuable experience working on innovative projects in the tech space. As an intern, I had the opportunity to work with cutting-edge technologies 
              and collaborate with a team of talented professionals. The role helped me sharpen my skills in areas such as software development, problem-solving, and system design. 
              I contributed to various tasks like coding, debugging, and implementing features, while also learning how to optimize performance and enhance the user experience.

Radical X provided a dynamic environment where I could apply my knowledge of programming languages like Java and Python, as well as learn new tools and frameworks.
 The internship also gave me insight into how tech companies approach real-world challenges, manage projects, and deliver solutions. Overall, my time at Radical X 
 significantly enriched my skill set and prepared me for future career opportunities in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

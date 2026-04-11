import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          <span>INTERNSHIPS</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Training in Cyber Security</h4>
                <h5>Acmegrade</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed Cyber Security training. Developed practical skills in ethical hacking, network security, and vulnerability assessment.
              Worked with tools like Wireshark, Nmap, Metasploit, and Burp Suite to analyze threats and improve system security.
            
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Ethical Hacking and Penetration Testing</h4>
                <h5>Ministry of Electronics and Information Technology (MeitY)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed strong skills in Ethical Hacking and Penetration Testing.
              Performed vulnerability assessments, network scanning, and simulated attacks to identify security weaknesses. 
              Worked with tools like Nmap, Wireshark, Metasploit, Burp Suite, Nessus, Nikto, SQLmap, Hydra, Aircrack-ng, and Kali Linux to analyze, exploit, and secure systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android App Development</h4>
                <h5>Encryptix</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Gained hands-on experience in Android App Development. 
              Designed and developed mobile applications with clean UI/UX, 
              backend integration, and real-time data handling using Kotlin, Android Studio, 
              Firebase, SQLite, and API
            </p>
             </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Logic Loop</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Solid, a proprietary low-code platform using Angular,
              Next.js & NestJS. Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Timelineitem from "./Timelineitem";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SkillItem from "./SkilItem";
export default function Resume() {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <AutoStoriesIcon />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <Timelineitem
            title="Sri TekChand Jain H.S. School Ambah, Morena(M.P.)"
            date="2019-2020"
            description="Class X"
          />
          <Timelineitem
            title="Kendriya Vidyalaya, Morena(M.P.)"
            date="2021-2022"
            description="Class XII"
          />
          <Timelineitem
            title="Madhav Institute Of Technology And Science, Gwalior(M.P.)"
            date="2023-2027"
            description="B.Tech. ( Computer Science and Engineering )"
          />
        </ol>
      </div>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <HandshakeIcon />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <Timelineitem
            title="Web development Member – Hindi Samiti Club, MITS Gwalior"
            date="January 2024 - present"
            description="Designed and developed websites for club activities, events, and initiatives, ensuring responsiveness and user engagement."
          />
          <Timelineitem
            title="Web development Member – AI Club, MITS Gwalior"
            date="January 2024 - present"
            description="Collaborated with the team to design and develop websites for various college events, clubs, and initiatives."
          />
        </ol>
      </div>
      {/*  skills */}
      <div className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="C++" value={90} />
          <SkillItem title="DSA" value={80} />
          <SkillItem title="HTML" value={90} />
          <SkillItem title="CSS" value={60} />
          <SkillItem title="JavaScript" value={80} />
          <SkillItem title="React.js" value={85} />
          <SkillItem title="Tailwind CSS" value={40} />
          <SkillItem title="Git & GitHub" value={75} />
        </ul>
      </div>
    </section>
  );
}
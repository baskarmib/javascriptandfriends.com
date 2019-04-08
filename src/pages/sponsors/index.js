import React from "react";
import Layout from "../../components/layout";
import SponsorCard from "../../components/SponsorCard";
import hmbLogo from "./HMB-green-finity.png";
import progressLogo from "./Progress_Kinvey_Primary.png";
import Alternate from "../../components/Alternate";
export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Alternate style={{ border: 0 }}>
          <h1>Sponsors</h1>
          <SponsorCard
            imageSrc={hmbLogo}
            title="HMB"
            href="https://hmbnet.com/"
            logoWidth={330}
            logoHeight={100}
            description={
              <>
                <p>
                  Where There’s Business, There's Technology. And Where There’s
                  Technology, There Are Bound To Be Challenges. That’s where we
                  come in. We’re an IT solutions company that solves tough
                  technology challenges so you can get back to business as usual
                  — business better than usual. We win when you win.
                </p>
                <p>
                  We win because of the people we hire and surround ourselves
                  with — and the people we are fortunate to call clients. When
                  we focus on being more interested than interesting, we build
                  trust. When we build trust, our clients succeed. When our
                  clients succeed, we succeed. Technology empowers our clients
                  to do some truly amazing things. And helping them bring their
                  projects to life, well — it energizes us. It’s what gets us
                  out of bed each morning. We come to work knowing we’re part of
                  building sensational technology that matters. This passion is
                  what drives us to succeed. It’s what we’re here to do.
                </p>
              </>
            }
          />
          <SponsorCard
            imageSrc={progressLogo}
            title="Progress Kinvey"
            href=" https://www.progress.com/kinvey"
            logoWidth={330}
            logoHeight={100}
            description={
              <>
                <p>
                Progress (NASDAQ: PRGS) offers the leading platform for developing and deploying strategic business applications. 
                We enable customers and partners to deliver modern, high-impact digital experiences with a fraction of the effort, time and cost. 
                Progress offers a high-productivity app development platform that increases productivity while maintaining developer control, 
                powerful tools for building adaptive user experiences across any type of device or touchpoint,
                machine learning that enables cognitive capabilities, a serverless cloud to deploy modern apps, 
                plus business rules, web content management and leading data connectivity technology. 
                </p>
                <p>
                Over 1,700 independent software vendors, 100,000 enterprise customers and two million developers rely on Progress to power their applications. 
                Learn about Progress at www.progress.com or +1-800-477-6473. 
                </p>
              </>
            }
          />
        </Alternate>
      </Layout>
    );
  }
}
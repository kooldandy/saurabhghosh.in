import About from "@components/templates/About";
import profilePic from "../../public/me.jpg";

const AboutPage = () => {
  const heading = "Hey!👋 I'm Saurabh";

  const about = [
    "I'm a Senior Software Enginner at Nagarro, originally from Varanasi, India.",
    "My areas of interest lie in Frontend Development, Web developement, UI automation and DevOps. I have experience building enterprise grade WebApps and scalable frontend architectures.",
    "I also enjoy playing the table-tennis, vollyball, listening songs and playing video games.",
  ];
  return <About heading={heading} about={about} profilePic={profilePic} />;
};

AboutPage.getTitle = () => {
  return "About";
};

export default AboutPage;

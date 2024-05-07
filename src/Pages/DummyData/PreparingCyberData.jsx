import welcome from "../../assets/welcome.png";
import servicesImage from "../../assets/servicesImage.png";
import preparingcyber from "../../assets/preparingcyber.png";
import cyberbgdownpage from "../../assets/cyber-bg-down-page.png";

const JsonDummyDataServices = () => {
  const DummyDataServices = [
    {
      title: "Net Systems Regulations",
      image: preparingcyber,
    },
  ];
  const DummyDataServices1 = [
    {
      title: "In today's digital landscape",
      date: "Dec 11",
      description: `Preparing for Cyber Essentials is crucial in today's digital landscape. With the issuance of the Net Systems (NIS) Regulations, organizations have been given a compelling reason to bolster their cybersecurity practices. These regulations demand a higher level of cybersecurity readiness to protect critical infrastructure and sensitive data.`,
      description1: `Cyber Essentials is a fundamental step in achieving compliance with NIS Regulations. It provides a structured framework for improving cybersecurity and helps organizations build a strong defense against cyber threats. By adopting Cyber Essentials, businesses can demonstrate their commitment to safeguarding both their own data and the broader digital ecosystem.`,
    },
  ];
  const DummyDataServices2 = [
    {
      title: "Section Heading 2",
      description: `Cyber attacks enable Iran – either offensively or in retaliation – to inflict serious economic and national security costs in a manner that typically offers an element of attribution with deniability as to the origin of the attack and reduces the likelihood of a kinetic response.`,
      image: cyberbgdownpage,
    },
  ];
  const DummyDataServices3 = [
    {
      title: "Section Heading 1",
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    },
  ];
  const DummyDataServices4 = [
    {
      title: "Section Heading 2",
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    },
  ];

  return [
    DummyDataServices,
    DummyDataServices1,
    DummyDataServices2,
    DummyDataServices3,
    DummyDataServices4,
  ];
};

export default JsonDummyDataServices;

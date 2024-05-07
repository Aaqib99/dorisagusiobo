import welcome from "../../assets/welcome.png";
import servicesImage from "../../assets/servicesImage.png";
import cyberbgdownpage from "../../assets/cyber-bg-down-page.png";

const JsonDummyDataServices = () => {
  const DummyDataServices = [
    {
      title: "Customer Services",
      title1: "Via-Cyber",
      image: welcome,
    },
  ];

  const DummyDataServices2 = [
    {
      title: "Page Navigation",
      description1: `Section Heading 1`,
      description2: `Section Heading 2`,
      description3: `Section Heading 3`,
      longdescription1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing.`,
      longdescription2: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    },
  ];
  const DummyDataServices3 = [
    {
      title: "Section Heading 1",
      date: "Dec 11",
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    },
  ];
  const DummyDataServices4 = [
    {
      title: "Section Heading 2",
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      image: servicesImage,
    },
  ];
  const DummyDataServices5 = [
    {
      title: `Cyber attacks enable Iran – either offensively or in retaliation – to inflict serious economic and national security costs in a manner that typically offers an element of attribution with deniability as to the origin of the attack and reduces the likelihood of a kinetic response.`,
      image: cyberbgdownpage,
    },
  ];
  const DummyDataServices6 = [
    {
      title: "Section Heading 3",
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    },
  ];
  return [
    DummyDataServices,
    DummyDataServices2,
    DummyDataServices3,
    DummyDataServices4,
    DummyDataServices5,
    DummyDataServices6,
  ];
};

export default JsonDummyDataServices;

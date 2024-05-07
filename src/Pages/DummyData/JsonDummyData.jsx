import React from "react";
import cyberEssentials from "../../assets/cyberEssentials.png";
import essentialsImage from "../../assets/essentialsImage.png";
import circleimage from "../../assets/circle-image.png";

const JsonDummyData = () => {
  const DummyData = [
    {
      title: "What is Cyber Essentials?",
      date: "Nov 12",
      description: `Cyber Essentials is an effective, Government-backed scheme that will help you protect your organization, regardless of its size, against a wide range of common cyber attacks. Cyber attacks come in many shapes and sizes, but the vast majority are very basic in nature, carried out by relatively unskilled individuals. They're the digital equivalent of a thief trying your front door to see if it's unlocked. Our advice is designed to prevent these attacks.`,
      description2: `Certification gives you peace of mind that your defenses will protect against the vast majority of common cyber attacks simply because these attacks are looking for targets that do not have the Cyber Essentials technical controls in place.`,
      image: cyberEssentials,
      imageLabel: "label 1",
      imageClassName: "centered-image",
    },
  ];
  const DummyData2 = [
    {
      title: "About Cyber Essentials",
      date: "Dec 11",
      description: `Cyber Essentials helps you to guard your organisation against cyber attack.
      Cyber Essentials helps you to guard against the most common cyber threats and demonstrate your commitment to cyber security.`,
      image: circleimage,
      imageLabel: "label 1",
      descriptionClassName: "left-aligned-description",
    },
    {
      title: "Cyber Essentials Plus",
      date: "Dec 11",
      description: `Our self-assessment option gives you protection against a wide variety of the most common cyber attacks. This is important because vulnerability to basic attacks can mark you out as target for more in-depth unwanted attention from cyber criminals and others.`,
      description2: `Certification gives you peace of mind that your defences will protect against the vast majority of common cyber attacks simply because these attacks are looking for targets which do not have the Cyber Essentials technical controls in place.
      Cyber Essentials shows you how to address those basics and prevent the most common attacks.`,
      image: circleimage,
      imageLabel: "label 1",
      descriptionClassName: "left-aligned-description",
    },
    {
      title: "Why should you get Cyber Essentials?",
      date: "Dec 11",
      description: `Certified cyber security
      Reassure customers that you are working to secure your IT against cyber attack
      Attract new business with the promise you have cyber security measures in place
      You have a clear picture of your organisation's cyber security level
      Some Government contracts require Cyber Essentials certification`,
      image: circleimage,
      imageLabel: "label 1",
      descriptionClassName: "left-aligned-description",
    },
  ];
  const DummyData3 = [
    {
      title: "What is the Cyber Advisor scheme ?",
      description: `The Cyber Advisor scheme is delivered in partnership with IASME. It provides small and medium sized organisations with reliable and cost effective cyber security advice and practical support. The focus of that advice and support will be on the implementation of the technical controls set out in Cyber Essentials. This approach will improve the cyber security of small organisations and reduce the likelihood of the most commonly experienced cyber attacks.
      `,
      description2: `In the future, we will explore whether we can assist small organisations by assuring Cyber Advisors in other areas of cyber security.`,
      description3: `Our Cyber Advisors have passed an independent assessment. This measured their:
      `,
      description4: `Knowledge and understanding of the Cyber Essentials’ technical controls
      Competence in providing practical, hands-on support
      Ability to understand and work with small and medium sized organisations.`,
      image: circleimage,
      image1: essentialsImage,
      imageLabel: "Image 1",
      imageTextTitle: "Cyber Advisor",
      imageText: `The NCSC has launched the new assured Cyber Advisor scheme. This will extend assured cyber security consultancy services to a wider market of small and medium sized firms, helping to ensure a minimum standard of security.`,
      buttonText: "Find Out More",
    },
  ];

  return [DummyData, DummyData2, DummyData3];
};

export default JsonDummyData;

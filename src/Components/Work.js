import React from "react";
import image1 from "../Assets/bindura1.png";
import image2 from "../Assets/buse2.png";
import image3 from "../Assets/buse3.png";

const Work = () => {
  const workInfoData = [
    {
      image: image1,
      title: "Fees Dropdown",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: image2,
      title: "Registration Negotiations",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: image3,
      title: "SEED",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: image3,
      title: "Successful Mass Recruitment",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: image3,
      title: "Provincial Exchange Program",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: image3,
      title: "Breast Cancer Awareness",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Achievements</p>
        <h1 className="primary-heading">What we have achieved</h1>
        <p className="primary-text">
          ZICOSU BUSE chapter has attained multiple milestones that include the development of the first ever ZICOSU website, the launch of Student Extensive Engagement Drive (SEED) and the successful Fees and registration negotiations amongst others.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

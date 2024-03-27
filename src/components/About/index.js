import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./index.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1 className="main-heading">About Temples of India</h1>
        <p className="about-paragraph">
          Temples of India is a devotees led movement to create a comprehensive
          and detailed online repository of temples across the Bharatvarsha.
          Temples of India is a not-for-profit knowledge platform to document
          and store possibly all details of temples across Bharatvarsha. We aim
          to present each detail related to the temple such as its location,
          images of the temple, videos, open and close timings, etc contributed
          by devotees like you. You can search temples located nearby but
          unknown to you. Our goal is to acquaint users with the rich heritage
          of our country whose core lies in the temples.
        </p>
        <div className="image-container">
          <div className="circle-image">
            <img
              src="https://templesofindia.org/assets/ayush.jpeg"
              alt="Image 1"
            />
            <p>Ayush Maheshwari</p>
          </div>
          <div className="circle-image">
            <img
              src="https://templesofindia.org/assets/arun.jpeg"
              alt="Image 2"
            />
            <p> Arun Jayaramakrishnan </p>
          </div>
        </div>
        <h2 className="ack-heading">ACKNOWLEDGEMENTS</h2>
        <div className="acknowledgements">
          <p>Prof. Saketha Nath</p>
          <p>Prof. Ravi Pooviah</p>
          <p>Aditya Verma</p>
          <p>Bhagyarsh Dhumal</p>
          <p>Anjay Goel (Android Development)</p>
          <p>Prateek (App Backend)</p>
          <p>Siddharth Raja (Web Backend)</p>
          <p>Aman Kumar(Web Frontend)</p>
          <p>Arjun Sable</p>
        </div>
        <p>We thank Mangilal Godarafor generous donation of $1000 (2022-23).</p>
        <p>
          We thank Parmanand Ahirwar for generous donation of $1000 (2021-22).
        </p>
        <div className="donation-container">
          <h2 className="support-heading">Support Temples of India</h2>
          <p>
            Temples of India is a non-profit cause which is being run by
            students and devotees like you. We are completely dependent on
            devotees for preserving our rich temple heritage about temples in
            the country. Do your little help in preserving the glory of Sanatan
            Dharma for eternity by either adding temples you love and if
            possible, help us monetarily.
          </p>
          <button className="donate-button">Donate to Us</button>
          <p>
            Are you a Techie? You could help us by joining our development team.
            Let us know your interest by mailing at devs@templesofindia.org
          </p>
          <p>For any other queries, mail us at contact@templesofindia.org</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

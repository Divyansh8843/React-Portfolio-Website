const ServiceData = [
  {
    title: "Web Development",
    icon: "https://cdn-icons-png.flaticon.com/512/6352/6352331.png",
    description:
      " I specialize in creating dynamic and responsive websites that not only look great but also provide a seamless user experience. ",
  },
  {
    title: "Software development",
    icon: "https://cdn-icons-png.freepik.com/256/10614/10614684.png?semt=ais_hybrid",
    description:
      "I offer custom software development services designed to meet your unique business needs.",
  },
  {
    title: "Software Testing",
    icon: "https://cdn-icons-png.flaticon.com/512/17217/17217848.png",
    description:
      "I specialize in ensuring software quality through comprehensive testing solutions, including functional, automated, performance, and cross-browser testing",
  },
  {
    title: "Data Analysis",
    icon: "https://cdn-icons-png.flaticon.com/512/6054/6054316.png",
    description:
      " I perform data cleaning, visualization, and statistical analysis to transform raw data into actionable insights for businesses and projects.",
  },
];
import { useEffect, useState } from "react";
import Service from "./Service";
import Testimonial from "./Testimonial";
const About = () => {
  let [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('testimonials.json').then(res =>
      res.json()
    ).then(data => {
      setTestimonials(data);
    });
  }, []);
  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      {/* about */}
      <section className="about-text">
        <p>
          I'm currently pursuing a B.Tech in Computer Science and Engineering at
          Madhav Institute of Technology and Science, Gwalior. My aggregate CGPA
          is 8.89. My interests lie in Competitive Programming, DSA, and Web
          Development. I solved 200+ problems on LeetCode || GFG || CodeStudio .
        </p>
        <p>
          In addition, I've completed two Frontend Development projects — an
          Amazon clone and My Portfolio . My web development tech stack includes
          HTML, CSS, JavaScript. I'm proficient in programming with C and C++,
          and I also possess a foundational understanding of Python. I consider
          myself an enthusiastic learner and always strive to excel in any
          assigned task.
        </p>
      </section>
      {/* services */}
      <section className="service">
        <h2 className="h3 service-title">What I'm Doing</h2>
        <ul className="service-list">
          {ServiceData.map((service, index) => (
            <Service key={index} data={service} />
          ))}
        </ul>
      </section>
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} data={testimonial}/>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default About;

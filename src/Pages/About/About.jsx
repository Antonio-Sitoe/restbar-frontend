import style from './about.module.css';

const About = () => {
  return (
    <section>
      <div className={style.backgroundImage}></div>
      <div className={style.aboutcontent}>
        <h2 className='mainTitle'>About us</h2>
        <p>
          FoodAdvisor is a app example to show you what can be made with Strapi.
          This is about restaurants because we like good food. And based in
          Paris because we’re from here.
        </p>

        <p>
          We produce Strapi, a collaborative open-source headless CMS fueled by
          a community of amazing developers, designers and users. We use the
          word “food” a lot, because food is sharing and sharing is caring so
          come be our friend and see if we mean it.
        </p>

        <h3>Our Mission</h3>

        <p>
          FoodAdvisor’s mission is to show you the endless possibilities of
          using Strapi to manage your content and making it accessible through a
          flexible and highly customizable API. And also to make you discover
          some of the restaurants we like in Paris.
        </p>

        <h3>Say Hello</h3>
        <p>
          If you have any question, a partnership, or just need some help, reach
          out to us. We’re available.
        </p>
        <a href='/'>hi@strapi.io </a>
      </div>
    </section>
  );
};

export default About;

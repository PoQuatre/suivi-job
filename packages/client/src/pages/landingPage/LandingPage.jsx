import { Link } from 'react-router-dom';
import styles from './landingPage.module.css';
import Carousel from 'react-elastic-carousel';
import LandingPageCard from '../../components/landingPageCard/LandingPageCard';
import Alpicture from '../../assets/landingPage/Al.png';
import Ethanpicture from '../../assets/landingPage/Ethan.png';
import Joelpicture from '../../assets/landingPage/Joel.png';
import Mateopicture from '../../assets/landingPage/Mateo.png';
import LandingPageFeature from '../../components/landingPageFeature/LandingPageFeature';
import pictureFake from '../../assets/landingPage/newFarm.jpg';
import LandingPageIcons from '../../components/landingPageIcons/LandingPageIcons';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

const LandingPage = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContent}>
          <div className={styles.navTitle}>
            <h1>Suivi Job</h1>
            <img src="" alt="Logo" />
          </div>

          <ul className={styles.nav}>
            <li className={styles.navLink}>
              <Link to="/login">Se connecter</Link>
            </li>

            <li className={styles.navLink}>
              <Link to="/register">S'inscrire</Link>
            </li>
          </ul>
        </div>
      </nav>

      <header
        className={styles.header}
        style={{ backgroundImage: `url(${pictureFake})` }}
      >
        <p className={styles.headerText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veritatis
          temporibus quae excepturi reiciendis dolores corrupti nostrum hic
          placeat expedita.
        </p>
      </header>

      <div className={styles.lineSkip}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <section>
        <h2 className={styles.sectionTitle}>Fonctionnalités</h2>

        <LandingPageFeature
          title="Feature 1"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi mollitia perferendis autem impedit esse id odit ullam dolorem doloremque fuga!"
          image={pictureFake}
        />
        <LandingPageFeature
          title="Feature 2"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi mollitia perferendis autem impedit esse id odit ullam dolorem doloremque fuga!"
          image={pictureFake}
        />
      </section>

      <div className={styles.lineSkip}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Équipe</h2>

        <Carousel breakPoints={breakPoints} disableArrowsOnEnd={false}>
          <LandingPageCard
            image={Alpicture}
            title="AL"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil veritatis possimus dignissimos temporibus reiciendis, praesentium, adipisci dolorem pariatur reprehenderit commodi similique recusandae iusto libero neque nam magni. Nulla, iure."
            git="https://github.com/Kar1004"
            linkedin="https://www.linkedin.com/in/abder-karamoko/"
            website="https://kar1004.github.io/portefolio-AL/"
          />
          <LandingPageCard
            image={Ethanpicture}
            title="Ethan Slimani"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil veritatis possimus dignissimos temporibus reiciendis, praesentium, adipisci dolorem pariatur reprehenderit commodi similique recusandae iusto libero neque nam magni. Nulla, iure."
            git="https://github.com/SoraNoTami"
            linkedin="https://www.linkedin.com/in/ethan-slimani/"
            website="https://soranotami.github.io/Portfolio/"
          />
          <LandingPageCard
            image={Joelpicture}
            title="Joël Manpouya"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil veritatis possimus dignissimos temporibus reiciendis, praesentium, adipisci dolorem pariatur reprehenderit commodi similique recusandae iusto libero neque nam magni. Nulla, iure."
            git="https://github.com/Joelmpy"
            linkedin="https://www.linkedin.com/in/mampouya-joel/"
            website="https://joelmpy.github.io/"
          />
          <LandingPageCard
            image={Mateopicture}
            title="Matéo Le Flem"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil veritatis possimus dignissimos temporibus reiciendis, praesentium, adipisci dolorem pariatur reprehenderit commodi similique recusandae iusto libero neque nam magni. Nulla, iure."
            git="https://github.com/PoQuatre"
            linkedin="https://www.linkedin.com/in/mateo-le-flem/"
            website="https://mateo-leflem.fr/"
          />
        </Carousel>
      </section>

      <footer className={styles.footer}>© Copyright - Suivi Job - 2022</footer>
    </>
  );
};

export default LandingPage;

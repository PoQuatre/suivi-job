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
          Nous avons créé ce site pour aider toutes les personnes en recherche
          de travail à trier leurs centaines de candidature simplement et
          efficacement.
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
          title="Page d'Acceuil"
          description="Connectez-vous pour avoir acces à votre page perso et voir vos candidatures. Le code couleur (voir l'image à gauche) des candidature est le suivant:  Beige: la candidature est en cours,  Gris: la candidature est sans reponse,  Vert: la candidature est accepté, Rouge: la candidature est refusé"
          image={pictureFake}
        />
        <LandingPageFeature
          title="Candidature"
          description="Ajouter, modifier et supprimer des candidature grace à un formulaire. Vous pouvez ajouter des étapes(entretiens, stages) à vos candidatures."
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
            title="Ethan SLIMANI"
            description="Développeur full stack Back: Je me suis occupé de toutes les routes sauf celles du login et du register. Front:  J'ai chosis le thème (les couleurs) du site et j'ai crée la Navbar. J'ai aimé participé à ce projet avec cette équipe tout le monde a énormément participé et je suis heureux du resultat de notre travail."
            git="https://github.com/SoraNoTami"
            linkedin="https://www.linkedin.com/in/ethan-slimani/"
            website="https://soranotami.github.io/Portfolio/"
          />
          <LandingPageCard
            image={Joelpicture}
            title="Joël MAMPOUYA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil veritatis possimus dignissimos temporibus reiciendis, praesentium, adipisci dolorem pariatur reprehenderit commodi similique recusandae iusto libero neque nam magni. Nulla, iure."
            git="https://github.com/Joelmpy"
            linkedin="https://www.linkedin.com/in/mampouya-joel/"
            website="https://joelmpy.github.io/"
          />
          <LandingPageCard
            image={Mateopicture}
            title="Matéo LE FLEM"
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

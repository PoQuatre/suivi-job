import { Link } from 'react-router-dom';
import styles from './landingPage.module.css';
import Carousel from 'react-elastic-carousel';
import LandingPageCard from '../../components/landingPageCard/LandingPageCard';
import Alpicture from '../../assets/landingPage/Al.png';
import Ethanpicture from '../../assets/landingPage/Ethan.png';
import Joelpicture from '../../assets/landingPage/Joel.png';
import Mateopicture from '../../assets/landingPage/Mateo.png';
import LandingPageFeature from '../../components/landingPageFeature/LandingPageFeature';
import ImgFonction1 from '../../assets/landingPage/fonction-1.png';
import ImgFonction2 from '../../assets/landingPage/fonction-2.png';
import ImgHeader from '../../assets/landingPage/landing-page.jpg';
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
        style={{ backgroundImage: `url(${ImgHeader})` }}
      >
        <p className={styles.headerText}>
          Nous avons créé cette application pour aider toutes les personnes en
          recherche de travail à trier leurs centaines de candidatures
          simplement et efficacement.
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
          title="Liste de candidature"
          description="Connectez-vous pour avoir accès à votre page perso et voir vos candidatures."
          image={ImgFonction1}
        />
        <LandingPageFeature
          title="Formulaire"
          description="Ajoutez, modifiez et supprimez des candidatures grâce à un formulaire. Vous pouvez ajouter des étapes (entretiens, tests techniques, essais) à vos candidatures."
          image={ImgFonction2}
        />
      </section>

      <div className={styles.lineSkip}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Équipe</h2>

        <Carousel
          breakPoints={breakPoints}
          disableArrowsOnEnd={false}
          className={styles.carousel}
          renderPagination={() => <></>}
          enableMouseSwipe={false}
        >
          <LandingPageCard
            image={Alpicture}
            title="AL"
            description="En tant que développeur front-end, j'ai participé à l'élaboration d'un environnement attractif et dynamique de l'application. Durant cette expérience, j'ai pu développer de nouveaux acquis grâce à mon équipe."
            git="https://github.com/Kar1004"
            linkedin="https://www.linkedin.com/in/abder-karamoko/"
            website="https://kar1004.github.io/portefolio-AL/"
          />
          <LandingPageCard
            image={Ethanpicture}
            title="Ethan SLIMANI"
            description="Développeur Full Stack : je me suis occupé de toutes les routes sauf celles de l'authentification. J'ai chosis le thème (les couleurs) de l'application. J'ai aimé participer à ce projet avec cette équipe tout le monde a énormément participé et je suis heureux du résultat de notre travail."
            git="https://github.com/SoraNoTami"
            linkedin="https://www.linkedin.com/in/ethan-slimani/"
            website="https://soranotami.github.io/Portfolio/"
          />
          <LandingPageCard
            image={Joelpicture}
            title="Joël MAMPOUYA"
            description="Front-end et back-end, t'elles-ont été mes armes dans la création de cette application. Créatif et curieux, j'ai été ravie que mon esprit d'initiative m'ai permis de présenter cette application."
            git="https://github.com/Joelmpy"
            linkedin="https://www.linkedin.com/in/mampouya-joel/"
            website="https://joelmpy.github.io/"
          />
          <LandingPageCard
            image={Mateopicture}
            title="Matéo LE FLEM"
            description="Ayant été lead développeur, je me suis occupé du front-end et du back-end. J'ai coordonné les différentes étapes en partant de la maquette jusqu'au déploiement, tout en passant par l'API et l'authentification. Le travail d'équipe lors de la réalisation de l'application, m'a grandement appris sur la gestion de projet."
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

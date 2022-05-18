import React from 'react';
import styles from './landingPage.module.css';
import Carousel from 'react-elastic-carousel';
import LandingPageCards from '../../components/landingPageCards/landingPageCards';
import Alpicture from '../../assets/landingPagesimg/Al.png'
import Ethanpicture from '../../assets/landingPagesimg/Ethan.png'
import Joelpicture from '../../assets/landingPagesimg/Joel.png'
import Mateopicture from '../../assets/landingPagesimg/Mateo.png'
import LandingPageFeature from '../../components/landindPagefeature/LandingPageFeature';



const breakPoints = [
  { width: 1, itemsToShow: 1},
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3},
  { width: 1200, itemsToShow: 4 }
];

const LandingPage = () => {


  return (
    <div className={styles.page}>
      <div className="header">
        <nav className={styles.Navbar}>
          <ul className={styles.list}>
            <li>
              <img src="#"></img>
            </li>
          </ul>
          <ul className={styles.listofConection}>
            <li>
              <a href="#">se connecter</a>
            </li>
            <li>
              <a href="#">s'inscrire</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.body}>
        <div className={styles.descriptionProject}>
          <div className={styles.shadowDescription}>
            <div className={styles.description}>
              <div className={styles.paragraphofdescription}>
              <p >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis autem deserunt quas perferendis delectus consequuntur
                odio esse alias? Repellendus non pariatur deserunt. Molestiae
                natus veniam consectetur explicabo dolores, eum odit?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque rem consectetur quam, quia maxime ducimus quos voluptatem ullam animi officiis, enim doloremque illo, quasi eos quis soluta culpa at? Repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta numquam iusto laboriosam expedita dolores consequuntur quos corporis facere necessitatibus rerum nihil quo, aperiam quibusdam, at ipsam quisquam? Aspernatur, perspiciatis quas?
              </p>
            </div>
            </div>
          </div>
          <div className={styles.shadowDescriptionImg}>
            <div className={styles.imageProject}>
              <p>
              
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lineSkip}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.features}>
        <div className={styles.titleSection}>
          <h1>FEATURES</h1>
        </div>
        <div className={styles.bodyFeatures}>
          <LandingPageFeature
          titleFeature="landing page"
          descriptionFeature="loredfjBeuaFqdyefgYEBYQSY DXYUGBXRYG YFUYSTGCYAGYER SFG"
          image={Alpicture}
           />
          <LandingPageFeature
          titleFeature="landing page"
          descriptionFeature="loredfjBeuaFqdyefgYEBYQSY DXYUGBXRYG YFUYSTGCYAGYER SFG"
          image={Alpicture}
        
           />

        </div>
      </div>
      <div className={styles.creator}></div>
      <div className={styles.lineSkip}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>

     
      <div className={styles.creators}>
      <div className={styles.titleSection}>
          <h1>EQUIPES</h1>
        </div>
         <div className={styles.creator}>
         <Carousel breakPoints={breakPoints} utoPlaySpeed={2000}>
          <LandingPageCards image={Alpicture} title="AL"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil veritatis possimus dignissimos temporibus reiciendis, praesentium, adipisci dolorem pariatur reprehenderit commodi similique recusandae iusto libero neque nam magni. Nulla, iure."/>
          <LandingPageCards  image={Ethanpicture} title="Ethan"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil veritatis possimus dignissimos temporibus reiciendis, praesentium, adipisci dolorem pariatur reprehenderit commodi similique recusandae iusto libero neque nam magni. Nulla, iure."/>
          <LandingPageCards  image={Joelpicture} title="Joel"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil veritatis possimus dignissimos temporibus reiciendis, praesentium, adipisci dolorem pariatur reprehenderit commodi similique recusandae iusto libero neque nam magni. Nulla, iure." />
          <LandingPageCards  image={Mateopicture} title="Mateo"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil veritatis possimus dignissimos temporibus reiciendis, praesentium, adipisci dolorem pariatur reprehenderit commodi similique recusandae iusto libero neque nam magni. Nulla, iure." />
      </Carousel>
           </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

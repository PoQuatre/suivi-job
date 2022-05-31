const UserModel = require('./src/models/user.model');
const JobApplicationModel = require('./src/models/jobApplication.model');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);

const user = new UserModel({
  username: 'Pierre',
  email: 'pierre2feu@gmail.com',
  password: '$2b$12$c0g4LVPVD07lqTO4gbx0xuZvhVi/Qmxjmjl.L8JaupN3WooBqNrn6',
  jobApplications: [],
});

const myJobApplications = [
  {
    ownerId: user._id,
    state: 'accepted',
    company: 'Evermaps',
    description:
      "Afin d’accompagner notre croissance, nous recherchons un développeur fullstack avec une bonne maîtrise du web.Tu intégreras la feature team Store LocatorCe que l'équipe attendra de toi : 1. Développement de solutions clients * Assurer la conception et le développement de projets web pour nos clients (que des grands comptes prestigieux!) , en majorité incluant de la cartographie et du SEO. Le cas typique: un store locator SEO plugué à notre console Saas qui permet au client de mettre à jour ses données et poster des campagnes. * Être garant de la qualité de ton code (et des délais) * Travailler en équipe et partager avec la team tes retours d’expérience * Garantir le respect des architectures techniques et des contraintes fonctionnelles * Analyser les erreurs et contribuer à l’amélioration continue des solutions 2. Participer au développement de nouvelles features * Avoir une grande sensibilité Produit et UX * Rechercher les technologies et les modes de développement les plus adaptés pour garantir la sécurité, l’évolutivité des solutions et une UX optimale * Maintenir une veille continue sur les nouvelles technos et l’écosystème web pour être force de proposition sur les nouveautés",
    titleJob: 'Ingénieur full stack',
    linkOffer:
      'https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3028455971',
    address: '',
    contact: '',
    date: new Date('2022-05-30'),
    typeJob: 'CDI',
    steps: [
      {
        stepType: 'Test',
        startDate: new Date('2022-05-30'),
        endDate: new Date('2022-06-05'),
        location: 'Distancial',
        details: "Crée un site internet pour l'entreprise",
      },
    ],
  },
  {
    ownerId: user._id,
    state: 'waiting',
    company: 'NEOVEE',
    description:
      'Le digital est au cœur de notre stratégie. C’est pourquoi, nous sommes à la recherche d’un/une Développeur Full-stack en stage ou apprentissage pour contribuer - avec le développeur Fullstack déjà en poste - à l’amélioration d’un outil générateur de business : le simulateur d’économies d’énergie, à la maintenance du site institutionnel et à concevoir d’éventuels nouveaux outils. VOS MISSIONS : Vous serez chargé(e) de développer et de veiller à la maintenance de certaines fonctionnalités de nos sites web (wordpress : neovee-cee.fr et cap-coupdepouce.fr) et surtout de notre outil de pilotage des CEE, dans le respect des contraintes (RGPD, SEO, sécurité, clarté du code…). Vous aurez la responsabilité d’une partie de l’administration des contenus (mises à jour de documentation). Vous rédigerez des spécifications techniques, participerez à la réalisation de tests, la recette et le déploiement. Environnement technique à maîtriser : PHP, ANGULAR, HTML (CSS), JAVASCRIPT, Symfony, Wordpress, Git.',
    titleJob: 'Développeur-se Fullstack - Stage / Alternance',
    linkOffer:
      'https://www.welcometothejungle.com/fr/companies/neovee/jobs/developpeur-se-fullstack-stage-alternance_paris_NEOVE_lzKODzN',
    address: 'Paris',
    contact: '',
    date: new Date('2022-04-11'),
    typeJob: 'Stage',
    steps: [],
  },
  {
    ownerId: user._id,
    state: 'waiting',
    company: 'CraftIA',
    description: '',
    titleJob: 'Stagiaire Développeur Backend',
    linkOffer: '',
    contact: '0681340988',
    date: new Date('2022-05-12'),
    typeJob: 'Stage',
    steps: [
      {
        stepType: 'Test',
        startDate: new Date('2022-05-12'),
        endDate: new Date('2022-05-17'),
        location: 'Distancial',
        details:
          "Crée une fonstion qui calcule la racine carré d'un chiffre entier",
      },
      {
        stepType: 'Interview',
        startDate: new Date('2022-05-20'),
        endDate: new Date('2022-05-20'),
        location: 'InPerson',
        details: '',
      },
    ],
  },
  {
    ownerId: user._id,
    state: 'denied',
    company: 'TheFork',
    description:
      'TheFork, part of Tripadvisor group, is the leading online restaurants booking platform in Europe and Australia. We are present in +12 countries with 60 000 partners restaurant in a mission to bringing happiness through amazing dining experiences. Creator of a unique model that has disrupted the restaurant industry, we put innovation at the heart of our ambitious growth. Thanks to TheFork (app/web), millions of diners can easily discover, book and pay the right restaurant at the right price, and thousands of restaurants owners benefits from our solutions to optimise reservation management, streamline operations and ultimately improve service and boost revenue.',
    titleJob: 'Fullstack Engineer (Node/React)',
    linkOffer:
      'https://www.linkedin.com/jobs/view/3072663549/?alternateChannel=search&refId=%2BnWje4%2FDFsNMRMkGANVCsg%3D%3D&trackingId=8YigEObWBP%2BuIXiuZgPBTA%3D%3D',
    address: 'Paris, Île-de-France, France',
    date: new Date('2022-05-30'),
    typeJob: 'CDI',
    steps: [],
  },
  {
    ownerId: user._id,
    state: 'waiting',
    company: 'TICKETAC',
    description:
      'Dans le cadre de l’évolution de notre plateforme, nous recrutons un(e) dévéloppeur(se) Fullstack PHP / JS en stage pour une durée de 6 mois minimum. Vous accompagnerez les équipes produit et technique sur les missions suivantes : Evolution des features de nos applications liées à nos billetteries ticketac.com et billetterie.lefigaro.fr Amélioration de notre webperf Intégration mutualisée d’APIs externes (protocoles REST / SOAP) Rédaction et automatisation de tests Notre stack technique : PHP (Symfony 4.4 ~ 5.4), Javascript (Vue.js, React), Elasticsearch, Redis, RabbitMq, Gitlab CI / CD, Docker, AWS',
    titleJob: 'Développeur(se) Fullstack PHP / JS (stage)',
    linkOffer:
      'https://www.welcometothejungle.com/fr/companies/ticketac/jobs/developpeur-se-backend-php-stage_paris',
    date: new Date('2022-05-30'),
    typeJob: 'Stage',
    steps: [
      {
        stepType: 'Test',
        startDate: new Date('2022-06-01'),
        endDate: new Date('2022-06-01'),
        location: 'Distancial',
        details: 'Test en ligne',
      },
    ],
  },
  {
    ownerId: user._id,
    state: 'waiting',
    company: 'BureauxLocaux',
    description:
      'Afin de continuer notre croissance, nous recherchons une ou un développeur fullstack stagiaire qui sera en charge d’implémenter de nouvelles fonctionnalités uniques basées sur les technologies Django / React pour notre plateforme. Le stage portera sur tous les aspects du site, notamment la refonte de pages importantes de notre site comme les résultats de recherche et le parcours de renouvellement PEL (paiement en ligne). Le stage pourra déboucher sur une embauche si la collaboration est fructueuse.',
    titleJob: 'Stage - Développeur web fullstack ReactJS',
    linkOffer:
      'https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3028455971',
    address: 'Paris',
    contact: 'bruno.lemaitre@gmail.com',
    date: new Date('2022-05-25'),
    typeJob: 'Stage',
    steps: [],
  },
  {
    ownerId: user._id,
    state: 'no-response',
    company: 'Wiboo',
    description: '',
    titleJob: 'Ingénieur full stack',
    linkOffer: '',
    address: 'Bry-sur-marne',
    contact: 'paul.moniot@laposte.net',
    date: new Date('2022-06-01'),
    typeJob: 'Stage',
    steps: [
      {
        stepType: 'Interview',
        startDate: new Date('2022-06-07'),
        endDate: '',
        location: 'InPerson',
        details: '',
      },
      {
        stepType: 'Test',
        startDate: new Date('2022-05-07'),
        endDate: '',
        location: 'InPerson',
        details: '',
      },
    ],
  },
];

JobApplicationModel.insertMany(myJobApplications)
  .then(function () {
    return JobApplicationModel.find();
  })
  .then(function (listJobApp) {
    user.jobApplications = listJobApp.map((jobApp) => {
      return jobApp._id;
    });
    return user.save();
  })
  .then(() => {
    console.log('Finish');
  })
  .catch((err) => {
    console.error('there is an error', err);
  });

import React, { useState } from "react";
import {
  Calendar,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import agee from "../assets/images/agee.jpg";
import eneo from "../assets/images/eneo.jpg";
import jeune from "../assets/images/jeune.jpg";
import retraite from "../assets/images/retraite.jpg";

const ALL_NEWS = [
  {
    id: "mutuelle-aux-mutualistes",
    images: [agee, jeune, eneo, retraite],
    category: "Événement",
    date: "30 août 2024",
    title: "LA MUTUELLE S'ADRESSE à SES MUTUALISTES",
    description:
      "Participez à notre assemblée générale annuelle pour découvrir les résultats et les perspectives de votre mutuelle.",
  },
  {
    id: "parole-aux-actes",
    images: [
      "https://images.unsplash.com/photo-1579389083395-4507e98b5b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "Nouveauté",
    date: "10 Mars 2024",
    title: "Lancement du Nouveau Service Digital",
    description:
      "Découvrez notre nouvelle plateforme en ligne pour gérer vos prestations et suivre vos demandes en temps réel.",
  },
];

export function NewsArticlePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const article = ALL_NEWS.find((article) => article.id === id);

  if (!article) {
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Article non trouvé
          </h1>
          <button
            onClick={() => navigate("/news")}
            className="inline-flex items-center text-[#003DA5] hover:text-[#002D7A]"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux actualités
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === article.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? article.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="py-20">
      {/* En-tête avec meilleur contraste */}
      <div className="bg-gradient-to-r from-[#003DA5] to-[#002D7A] py-20 mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/news")}
            className="inline-flex items-center text-white mb-8 hover:text-[#8FC03C] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux actualités
          </button>

          <div className="flex items-center space-x-4 text-white/80 mb-6">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{article.date}</span>
            </div>
            <span>•</span>
            <span className="px-3 py-1 bg-[#8FC03C] rounded-full text-white text-sm">
              {article.category}
            </span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">
            {article.title}
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl">
            {article.description}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Carrousel d'images */}
          <div className="relative">
            <img
              src={article.images[currentImageIndex]}
              alt={`${article.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-[500px] object-cover"
            />

            {article.images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {article.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-4"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="p-8 md:p-12">
            <article className="prose prose-lg max-w-none">
              {/* Style personnalisé pour le contenu */}
              <style>{`
                .prose h1 {
                  @apply text-3xl font-bold text-gray-900 mb-6;
                }
                .prose h2 {
                  @apply text-2xl font-bold text-gray-800 mt-12 mb-4;
                }
                .prose h3 {
                  @apply text-xl font-semibold text-gray-800 mt-8 mb-4;
                }
                .prose p {
                  @apply text-gray-600 leading-relaxed mb-6;
                }
                .prose ul {
                  @apply space-y-2 my-6;
                }
                .prose li {
                  @apply flex items-start;
                }
                .prose li:before {
                  content: "•";
                  @apply text-[#003DA5] mr-2;
                }
              `}</style>

              <h1 className="text-4xl font-bold text-gray-900 mb-8">{article.title}</h1>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Points clés :</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#003DA5] mr-2">•</span>
                    <span>Interview exclusive avec le président de la mutuelle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003DA5] mr-2">•</span>
                    <span>Vision et missions de la MURCAS FASAS</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003DA5] mr-2">•</span>
                    <span>Nouveaux projets et avantages pour les membres</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                {/* Contenu principal avec sections */}
                <section>
                  <h2>La mutuelle s'adresse à ses mutualistes</h2>
                  <p>
                    Par la voir de son président, le vendredi 30 août 2024 via un
                    interview réalisé sur WhatsApp, la mutuelle a partagé à ses
                    mutualistes la vision, les missions et les grandes chantiers /
                    réalisations de la mutuelle. Cet interview sous forme de
                    question
                  </p>

                  <h3>Au programme de cette année</h3>
                  <ul>
                    <li>Présentation des résultats financiers 2023</li>
                    <li>Bilan des actions menées</li>
                    <li>Perspectives et projets pour 2024</li>
                    <li>
                      Élection des nouveaux membres du conseil d'administration
                    </li>
                  </ul>

                  <h3>Informations pratiques</h3>
                  <p>
                    C’est quoi la MURCAS ? Quand et pourquoi a-t-elle été créée ? ;
                    A la suite du constat d’un écart considérable entre le salaire
                    au départ à la retraite et la pension versée par la CNPS à
                    l’époque et au regard de ce que la conséquence directe était la
                    dégradation du niveau de vie des agents Sonel retraités, le
                    management en concertation avec les représentants du personnel
                    décide, non sans être allé voir sous d’autres cieux comment cela
                    fonctionnait, de la création de la Mutuelle de Retraite
                    Complémentaire et du Fond d’Aide et de Solidarité des Agents
                    Sonel (MURCAS/FASAS) en Juillet 1998 avec l’enrôlement effectif
                    de tous les agents et le début des retenues sur salaire pour
                    alimenter les deux caisses ainsi Créées. Deux années plus tard,
                    en 2000 sous l’égide du Ministre du Travail et de la prévoyance
                    sociale, un accord d’établissement est signé entre l’employeur
                    et la Mutuelle. Quelle est sa vision ? Ses missions ? Ses
                    valeurs ? Notre Vision C’est de permettre à nos membres de mieux
                    vivre sa retraite au Cameroun (Notre ambition est de rendre la
                    mutuelle plus attractive et efficace tout en veillant sur sa
                    pérennité). Nos Missions c’est de : Collecter mensuellement les
                    cotisations au travers des retenues sur salaires des agents
                    mutualistes ainsi que les contributions patronales afin de
                    constituer une épargne individuelle. Payer mensuellement les
                    rentes aux retraités. Exercer toute activité ayant pour objet:
                    L’amélioration des conditions de vie et l’épanouissement social
                    de ses membres et d’assurer la pérennité de la mutuelle. Nos
                    valeurs : (INTEGRITE, RESPECT DES STATUTS ET REGLEMENTS
                    INTERIEUR, SERVIR AVEC ABNEGATION, ETHIQUE, SOLIDARITE) Qui peut
                    être membre de la MURCAS et comment le devenir ? Tout agent
                    Actif travaillant non seulement à ENEO, mais également dans
                    toute entreprise qui opère dans le secteur de l’Energie. On
                    devient membre de la MURCAS en remplissant un simple formulaire
                    d’adhésion. Aujourd’hui avec la digitalisation tout le processus
                    se fait en ligne. Le bureau de la MURCAS a souvent été
                    considérée comme une chasse gardée des anciens et retraités qui
                    veulent tout piloter même lorsqu’ils ne sont plus des agents
                    actifs. Que répondez-vous à cette appréhension que se sont fait
                    certains collègues ? La mutuelle est régie par les textes
                    (Statuts et RI), tout membre de la mutuelle doit se conformer à
                    ce qui est établi car ce sont les délégués élus par les agents
                    siégeant dans l’AG qui votent ses textes. Je voudrais aussi
                    ajouter que notre mutuelle est exceptionnelle et envié par les
                    autres mutuelles du fait qu’elle assure une rente à ses membres
                    une fois qu’ils sont retraités c’est la raison pour laquelle il
                    est tout à fait normale que le collège des actifs (60%) et le
                    collège des retraité(40%) participent ensemble à la gestion de
                    la Mutuelle. L’actif d’aujourd’hui est le retraité de demain.
                    Aujourd’hui le Conseil d’Administration de la Mutuelle est
                    composé de 70% d’actifs contre 30% de retraités. Donnez-nous 05
                    raisons pour lesquelles un jeune ou tout autre personne devrait
                    absolument être membre de la MURCAS ; La personne constitut une
                    épargne rémunérée de son capital à 4%/an... Les ayants droits de
                    la personne Bénéficient d’une Aide en cas de son décès qui est
                    aujourd’hui de 1.800.000 FCFA. Grâce aux multiples conventions
                    signées et encours de signature(Car Plan, réductions diverses
                    matériaux de construction, Discount sur l’équipement etc…)
                    Acquisition de parcelle de terrain à un prix imbattable et
                    bientôt d’un logement décent grâce à la convention avec la
                    Maétur et le Crédit foncier. Reduction de coût de transport
                    (Avion, train et Car) grâce à la création de l’agence MURCAS
                    VOYAGE… A propos des contributions mensuelles. Quels sont les
                    quotas de cotisations ? La MURCAS peut-elle prêter de l’argent à
                    ses membres ? Quels sont les taux de remboursements ?
                    Existe-t-il d’autres avantages liés aux cotisations ?
                    Aujourd’hui avec le régime par capitalisation les cotisations
                    sont déplafonnées , mais le minimum pour un EO est de 6000, pour
                    AM 9000 et un Cadre 30000. La mutuelle ne prête pas à ses
                    membres mais donne les avances sur les cotisations d’un membre
                    lorsque celui-ci en fait la demande. Le taux de remboursement
                    est de 0,66%/mois et la période de remboursement va de 2 mois à
                    36 mois avec la possibilité de rembourser par anticipation dans
                    ce cas précis les intérêts générés sont remboursés à l’agent.
                    Les autres avantages liées aux cotisations sont le taux
                    d’intérêt très attractif de 4% l’an qui permet à ton épargne de
                    se fructifier, la possibilité d’être en possession de son argent
                    à moins de 48h. D’ailleurs je profite de cet interview pour
                    annoncer que nous sommes en train d’étudier la possibilité de
                    faire passer le taux d’intérêt à 5%/an. Ces dernières années la
                    MURCAS s’est lancée sur plusieurs chantiers pour le bien-être de
                    ses adhérents notamment dans le foncier. Quel est l’état des
                    Lieux ? Sur la demande des adhérents de la mutuelle, nous avons
                    l’année dernière financé l’acquisition des terrains dans les
                    régions du Nord (Garoua, Maroua) et la Région du Sud-Ouest
                    (Limbé) ce qui est venu compléter les terrains de la région du
                    centre (EKOKO1 et LOBO) et la région du Littoral (Bwang BAKOKO).
                    Ces terrains sont exclusivement destinés aux mutualistes qui
                    désirent acquérir une parcelle pour construire une maison. Dans
                    les prochains jours nous allons lancer la vente des parcelles à
                    Ekoko1(Ydé) et à Lower Bonjogo (Limbé) ce qui retarde cette
                    annonce ce sont les conventions qui sont encours de signature.
                    Je voudrais aussi ajouter que; après avoir fait le constat de
                    nos membres pour démarrer la construction de leurs maisons, une
                    convention avec CFC est encours de signature avec un partenaire
                    agent immobilier qui permettra d'acquérir le terrain et une
                    maison en même temps. Un jeune qui s’inscrit aujourd’hui à la
                    mutuelle, peut-il prétendre à un terrain au même titre qu’un
                    ancien ? Oui Bien sûr, sur ce point il n’y a pas de
                    discrimination. Nous sommes même en train de prendre les
                    dispositions particulières beaucoup plus favorables à cette
                    catégorie d’agents. Quels sont les autres avantages liées à
                    l’adhésion au sein de la MURCAS ? Comme j’ai déjà eu à le dire
                    avant, il y a plusieurs avantages aujourd’hui pour les
                    mutualistes actifs. Avant la fin de cette année chaque
                    mutualiste aura une carte de mutualiste qui va lui permettre de
                    bénéficier des avantages de la Mutuelle. Je vous ai parlé des
                    conventions que nous sommes en train de signer avec divers
                    partenaires et dans les domaines diverses. Par exemple la
                    convention avec le crédit foncier va permettre au mutualiste
                    d’avoir un crédit construction à un taux bas. La convention avec
                    les établissements de vente de matériaux de
                    construction(SOREPCO, COGENIE) donne droit au mutualiste
                    d’acheter le matériel au prix du gros. La convention avec ARNO,
                    ICE, etc.. donne des réductions assez confortable. La convention
                    avec les Librairies permette d’acheter les fournitures scolaires
                    avec des réductions allant jusqu’à 8%, la convention avec un
                    partenaire pour mettre en place un Car Plan (voitures neuves et
                    occasion) etc… A Partir du 1er Octobre 2024 MURCAS VOYAGE,
                    permettra d'avoir les facilités sur les billets d'avion, les
                    émissions de billets se feront à toute heure 24h/24, possibilité
                    de payer en plusieurs tranches son ou ses billets dans le cas où
                    on voyage avec sa famille Avant la clôture de cet interview, un
                    dernier mot Daniel Edimo ? Arrivant à la fin de cet interview je
                    voudrais annoncer que la MURCAS est en train de préparer une
                    journée portes ouvertes durant laquelle nous allons vous
                    présenter la nouvelle application GESMURCAS et présenterons les
                    titres fonciers que nous avons déjà donner à certains de nos
                    mutualistes. Il y aura beaucoup d’autres surprises. La
                    construction du Poste va bientôt démarrer à Bwang Bakoko, etc..
                  </p>
                </section>

                {/* Documents à télécharger */}
                <div className="bg-gray-50 rounded-xl p-6 my-12">
                  <h4 className="font-semibold mb-4">Documents à télécharger</h4>
                  <div className="space-y-4">
                    <button className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-[#003DA5] hover:shadow-md transition-all text-left">
                      Rapport annuel 2023 (PDF)
                    </button>
                    <button className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-[#003DA5] hover:shadow-md transition-all text-left">
                      Ordre du jour (PDF)
                    </button>
                    <button className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-[#003DA5] hover:shadow-md transition-all text-left">
                      Formulaire de procuration (PDF)
                    </button>
                  </div>
                </div>

                {/* Section d'inscription */}
                <div className="bg-[#003DA5]/5 rounded-xl p-8 my-12">
                  <h3>Inscription obligatoire</h3>
                  <p>
                    Pour des raisons d'organisation, l'inscription est obligatoire.
                    Merci de confirmer votre présence avant le 10 mars 2024.
                  </p>

                  <div className="mt-8">
                    <button className="px-8 py-4 bg-[#003DA5] text-white rounded-xl hover:bg-[#002D7A] transition-all duration-300">
                      Je m'inscris à l'Assemblée Générale
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Partage social avec meilleur design */}
            <div className="border-t border-gray-100 mt-12 pt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Share2 className="w-5 h-5" />
                  <span>Partager cet article</span>
                </div>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                    <button
                      key={index}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-gray-600" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation entre articles */}
        <div className="mt-12 flex justify-between items-center">
          <button className="flex items-center text-gray-600 hover:text-[#003DA5] transition-colors">
            <ChevronLeft className="w-5 h-5 mr-2" />
            Article précédent
          </button>
          <button className="flex items-center text-gray-600 hover:text-[#003DA5] transition-colors">
            Article suivant
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

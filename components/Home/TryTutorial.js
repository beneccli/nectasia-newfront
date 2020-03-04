import React from 'react'
import Link from '~/components/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faSyncAlt } from '@fortawesome/free-solid-svg-icons'

const tutorials = [
  {
    title: 'Des suggestions à votre image',
    text: <span className="mb-2">Nectasia apprend petit à petit vos goûts pour améliorer ses suggestions. Cliquez sur <FontAwesomeIcon icon={faSyncAlt} size="xs" /> pour avoir de nouvelles propositions !</span>,
    href: '#'
  },
  {
    title: 'Un plan sur-mesure',
    text: <span>Objectifs, régime alimentaire, allergies, matériel de cuisine... Nectasia s'adapte à vous et non l'inverse !</span>,
    href: '#'
  },
  {
    title: 'Un panier rempli automatiquement',
    text: <span className="mb-2">Choisissez votre magasin préféré, nous nous occupons de remplir votre panier automatiquement avec tout ce dont vous aurez besoin pour cuisiner !</span>,
    href: '#'
  },
];

const TutorialInfoContent = ({ text, href = null}) => (
  <span className="flex flex-col">
    <span className="mb-2">{text}</span>
    {href !== null && <a href={href} className="text-center text-sm text-blue-600 font-light hover:underline">En savoir plus</a>}
  </span>
);

export default class TryTutorial extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentTutorialId: 0
    }
    this.nextTutorial = this.nextTutorial.bind(this);
    this.previousTutorial = this.previousTutorial.bind(this);
  }

  nextTutorial(e) {
    e.preventDefault();
    if (this.state.currentTutorialId + 1 < tutorials.length) {
      this.setState(state => ({
        currentTutorialId: state.currentTutorialId + 1
      }));
    }
  }

  previousTutorial(e) {
    e.preventDefault();
    if (this.state.currentTutorialId > 0) {
      this.setState(state => ({
        currentTutorialId: state.currentTutorialId - 1
      }));
    }
  }

  render () {
    return (
      <div className="flex flex-col justify-between bg-gray-100 rounded py-2 px-3 box-border">
        <div className="mb-2 flex">
          <div className="flex-1 font-thin">
            {this.state.currentTutorialId + 1} / {tutorials.length}
          </div>
          <div>
            <button className="text-blue-600 mr-4" onClick={this.previousTutorial}>Précédent</button>
            <button className="text-blue-600" onClick={this.nextTutorial}>Suivant</button>
          </div>
        </div>
        <h3 className="mb-2 font-light text-xl">{tutorials[this.state.currentTutorialId].title}</h3>
        <p className="font-thin">
          <TutorialInfoContent text={tutorials[this.state.currentTutorialId].text} href={tutorials[this.state.currentTutorialId].href} />
        </p>
      </div>
    )
  }
}

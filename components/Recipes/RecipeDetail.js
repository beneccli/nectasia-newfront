import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensilSpoon, faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faThumbsDown, faComments } from '@fortawesome/free-regular-svg-icons'
import Link from '../Link'

const picture = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80';
const picTomato = 'https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38=';

const RecipeData = () => (
  <div>
    <div>
      <span className="font-bold inline-block w-32">Préparation</span>
      <span className="text-lg">10min</span>
    </div>
    <div>
      <span className="font-bold inline-block w-32">Cuisson</span>
      <span className="text-lg">15min</span>
    </div>
    <div>
      <span className="font-bold inline-block w-32">Quantité</span>
      <span className="text-lg">1 part</span>
    </div>
    <div>
      <span className="font-bold inline-block w-32">Calories</span>
      <span className="text-lg">345 cal</span>
    </div>
    <div>
      <span className="font-bold inline-block w-32">G/F/P</span>
      <span className="text-lg">35 / 35 / 30</span>
    </div>
  </div>
);

const RecipePresentation = () => (
  <section className="grid grid-cols-1 lg:grid-cols-2">
    <div className="order-2">
      <div className="mx-6 my-3">
        <h1 className="text-3xl">Burger américain</h1>
        <div className="text-gray-400">Publié par <a href="#">Ertza</a></div>
      </div>
      <div className="mx-6 my-3 text-gray-700">
        <RecipeData />
      </div>
    </div>
    <div className="order-1">
      <div className="relative pb-2/3">
        <img src={picture} className="absolute w-full h-full object-cover" />
      </div>
    </div>
  </section>
);

const Ingredient = () => (
  <div className="flex my-4 rounded cursor-default transition duration-200 shadow-outline-white hover:bg-gray-100 hover:shadow-outline-gray">
    <div className="w-12 h-12 bg-black rounded overflow-hidden">
      <img src={picTomato} />
    </div>
    <div className="flex-1 flex flex-col justify-center mx-4">
      <h3 className="">Tomates</h3>
      <h4 className="text-gray-400 text-xs">Découpées en rondelle</h4>
    </div>
    <div className="flex flex-col justify-center mx-4">
      <h3 className="font-thin">1 tomate</h3>
      <h4 className="text-gray-400 text-xs">123g</h4>
    </div>
  </div>
);

const RecipeDetails = () => (
  <section className="flex">
    <div className="mx-6 flex-1 order-2">
      <h1 className="my-5 text-3xl font-thin">Ingrédients</h1>
      <div className="INGREDIENTS-LIST">
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </div>
    </div>
    <div className="mx-6 w-32 lg:w-48 order-1">
      <h1 className="my-5 text-3xl font-thin">Matériel</h1>
      <div className="UTENSILS-LIST">
        <ul className="">
          <li className="mb-2">Poêle</li>
          <li className="mb-2">Plaque de cuisson</li>
          <li className="mb-2">Couteau</li>
        </ul>
      </div>
    </div>
  </section>
);

const RecipeDirections = () => (
  <section className="">
    <div className="flex-1 order-2">
      <h1 className="mx-6 my-5 text-3xl font-thin">Préparation</h1>
      <div className="DIRECTIONS">
        <ul className="pl-12 list-decimal">
          <li className="mb-2">Découpez votre avocat et votre tomate en morceaux. Coupez votre boule de mozzarella en tranches.</li>
          <li className="mb-2">Chauffez votre poêle à feu moyen.</li>
          <li className="mb-2">Beurrez légèrement un côté de vos deux tranches de pain.</li>
          <li className="mb-2">Placez dans un premier temps une tranche dans la poêle.</li>
          <li className="mb-2">Par-dessus, ajoutez l’avocat, la mozzarella et les morceaux de tomate. Versez un peu d’huile d’olive et assaisonnez enfin de sel et de poivre. Refermez le tout avec l'autre tranche.</li>
          <li className="mb-2">Dès que le premier côté est doré (au bout de 2-3 minutes environ), retournez et laissez cuire 3 minutes de plus.</li>
        </ul>
      </div>
    </div>
  </section>
);

const RecipeActions = () => (
  <div className="flex justify-center px-6 py-2 bg-black">
    <button className="btn btn-primary mr-3">
      <FontAwesomeIcon icon={faThumbsUp} size="lg" />
    </button>
    <button className="btn btn-primary mr-3">
      <FontAwesomeIcon icon={faThumbsDown} size="lg" />
    </button>
    <button className="btn btn-primary mr-3">
      <FontAwesomeIcon icon={faThumbtack} size="lg" />
    </button>
    <button className="btn btn-primary">
      <FontAwesomeIcon icon={faComments} size="lg" className="mr-3" />
      <span>3</span>
    </button>
  </div>
);

const RecipeDetail = ({ slug }) => {
  return (
    <div>
      <RecipePresentation />
      <RecipeActions />
      <RecipeDetails />
      <RecipeDirections />
    </div>
  )
}

export default RecipeDetail

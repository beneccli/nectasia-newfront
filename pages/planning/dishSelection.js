import { getLayout } from '../../components/Layouts/ChooseDishLayout'
import RecipesList from '../../components/Recipes/RecipesList'
import RecipeCategories from '../../components/Recipes/RecipeCategories'
import Link from '../../components/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faArrowLeft, faFire, faInfo } from '@fortawesome/free-solid-svg-icons'


const RecipesNavigation = () => (
  <div className="w-72 hidden md:block">

    <div className="*fixed w-64 bottom-0 py-3 px-6" style={{top: 66}}>

      <h3 className="mb-3 font-bold uppercase">
        <span>Résumé macro</span>
        <button className="w-6 h-6 ml-3 rounded-full hover:bg-gray-200 active:bg-gray-300">
          <FontAwesomeIcon icon={faInfo} size="xs" className="relative" style={{top: -2}} /></button>
      </h3>

      <ul className="text-gray-500 cursor-default hover:text-gray-800 transition-colors duration-300">
        {['1785 kcal', '39%', '29%', '42%'].map((value, key) => 
        <li key={key}>
          <FontAwesomeIcon icon={faFire} className="mr-3" />
          <span className="font-light">{value}</span>
        </li>
        )}
      </ul>

      {/* <h3 className="mt-8 mb-3 font-bold uppercase">Régime</h3>

      <ul>
        {['Tout', 'Paleo', 'Vegetarien', 'Vegan', 'Cétogène', 'Méditerranéen'].map((value, key) => 
        <li key={key}>
          <Link href="/recipes">
            <a className="navLink">{value}</a>
          </Link>
        </li>
        )}
      </ul> */}

      <h3 className="mt-8 mb-3 font-bold uppercase">Filtrer par</h3>

      <ul>
        {['Burger', 'Indien', 'Salade', 'Italien', 'Libanais', 'Japonais', 'Coréen', 'Chinois'].map((value, key) => 
        <li key={key}>
          <Link href="/recipes">
            <a className="navLink">{value}</a>
          </Link>
        </li>
        )}
      </ul>

    </div>

    <style jsx>{`
      .navLink {
        @apply inline-block py-1;
      }
    `}</style>

    </div>
);

const Recipes = () => (
  <div>

    {/* <div className="bg-black w-full h-64 rounded">
      Hello
    </div> */}

    <div className="flex">
      <div className="flex-1 flex flex-col items-start my-10">

      <Link href="/planning">
        <button className="px-4 py-2 mb-6 rounded-full font-light hover:bg-gray-200 active:bg-gray-300">
          <FontAwesomeIcon icon={faArrowLeft} size="lg" className="mr-3" />
          <span>Retour à mon planning</span>
        </button>
      </Link>

      </div>

      <div className="flex-1 flex flex-col items-end my-10">

        <h2 className="mb-6 mx-1 text-3xl uppercase">17 Décembre 2020</h2>

        <ul className="flex">
          <li>
            <button className="py-2 px-3 mx-1 font-bold rounded-full bg-black text-white">Petit déjeuner</button>
          </li>
          <li>
            <button className="py-2 px-3 mx-1 font-bold rounded-full hover:bg-gray-200 active:bg-gray-300">Déjeuner</button>
          </li>
          <li>
            <button className="py-2 px-3 mx-1 font-bold rounded-full hover:bg-gray-200 active:bg-gray-300">Dîner</button>
          </li>
        </ul>

      </div>
    </div>

    <div className="flex">
      <RecipesNavigation />
      <div className="w-full">

        <div className="mb-6 relative">
          <input className="pl-6 pr-16 py-3 w-full bg-gray-200 rounded-full" placeholder="Rechercher une recette..." />
          <button className="absolute px-4 py-3" style={{right: 12, top: 0}}>
            <FontAwesomeIcon icon={faSearch} /></button>
        </div>

        <RecipesList />

      </div>
    </div>

    {/* <DailyRecipes title="Dernières recettes ajoutées" />
    <RecipeCategories /> */}
  </div>
)

Recipes.getLayout = getLayout

export default Recipes

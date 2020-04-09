import Layout from '../../components/Layouts/MainLayout'
import Link from '../../components/Link'
import { getLayout } from '../../components/Layouts/MainLayout'
import Calendar from '../../components/PlanningV2/Calendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faChartBar, faShoppingCart, faUser, faMagic, faHistory, faFire } from '@fortawesome/free-solid-svg-icons'
import plannedMeals from '../../data/plannedMeals.json'
import plannedDays from '../../data/plannedDays.json'

const PlanningSidebar = () => (
  <div className="w-72 hidden md:block">

    <div className="sticky" style={{top: 84}}>
      <Calendar />

      <div>
        <button className="my-4 p-2 w-full border border-black bg-black text-white font-medium rounded transition-colors duration-200 active:bg-gray-700">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-3" />
          Me faire livrer des repas</button>
      </div>
      <div>
        <button className="mb-4 p-2 w-full border border-gray-300 bg-white rounded transition-colors duration-300 active:bg-gray-200">
          <FontAwesomeIcon icon={faMagic} className="mr-3" />
          Suggérer une plannification</button>
      </div>
      <div className="flex">
        <button className="mr-4 mb-4 p-2 w-full border border-gray-300 bg-white rounded transition-colors duration-300 active:bg-gray-200">
          <FontAwesomeIcon icon={faChartBar} /></button>
        <button className="mr-4 mb-4 p-2 w-full border border-gray-300 bg-white rounded transition-colors duration-300 active:bg-gray-200">
          <FontAwesomeIcon icon={faHistory} /></button>
        <button className="mb-4 p-2 w-full border border-gray-300 bg-white rounded transition-colors duration-300 active:bg-gray-200">
          <FontAwesomeIcon icon={faUser} /></button>
      </div>
      <div className="flex justify-center text-sm text-gray-500 font-light">
        <Link href="/">
          <a className="hover:text-gray-700">À propos</a>
        </Link>
        <span className="mx-2 cursor-default">•</span>
        <Link href="/">
          <a className="hover:text-gray-700">Contactez-nous</a>
        </Link>
      </div>
      {/* <div className="my-6">
        Note: Proposer des plats automatiquement, laisser l'utilisateur décider de changer par lui-même
      </div> */}

    </div>

    <style jsx>{`
      .navLink {
        @apply inline-block py-1;
      }
    `}</style>
    </div>
);

const dailyRecipeHiddenPolicy = (key) => (key == 2) ? 'hidden md:flex' : (key == 3) ? 'hidden lg:flex' : '';
const RecipeCard = ({ recipe, className }) => (
  <Link href="/planning/dishSelection">
  {/* <Link href="/recipe/[slug]" as="/recipe/Slug-Test"> */}
    <a>
      <div className={`mx-3 mb-6 flex flex-col rounded cursor-pointer transition duration-200 shadow-outline-white hover:bg-gray-100 hover:shadow-outline-gray ${className}`}>
        <div className="relative pb-2/3">
          <img src={recipe.picture} className="absolute w-full h-full object-cover rounded-md" />
        </div>
        <div className="px-3 pt-2 flex">
          <div className="flex-1 self-center text-xs text-gray-500 uppercase">{recipe.mealType}</div>
        </div>
        <h3 className="px-3 mt-1 text-lg">{recipe.name}</h3>
      </div>
    </a>
  </Link>
);

const AddCard = ({ mealType, className }) => (
  <Link href="/recipe/[slug]" as="/recipe/Slug-Test">
    <a>
      <div className={`mx-3 mb-6 flex flex-col rounded cursor-pointer transition duration-200 shadow-outline-white hover:bg-gray-100 hover:shadow-outline-gray ${className}`}>
        <div className="relative pb-2/3">
          <div className="absolute w-full h-full object-cover rounded-md border-dashed border-4 border-gray-200 flex items-center justify-center">
            <span className="text-xl font-light">Ajouter {mealType}</span>
          </div>
        </div>
      </div>
    </a>
  </Link>
);

const Planning = () => (
  <div className="container">
    <div className="flex">
      <PlanningSidebar />
      <div className="flex-1 ml-8">

        {plannedDays.map((plannedDay, key) => 
        <div key={key}>
          <div className="sticky flex pt-6 z-10 bg-white" style={{top: 52}}>

            {/* <span className="font-thin relative">
              <button className="mt-1 mb-2 mr-4 px-6 py-1 border border-gray-300 bg-white rounded transition-colors duration-300 active:bg-gray-200">
                <FontAwesomeIcon icon={faMagic} /></button>
            </span> */}

            <h2 className="ml-2 uppercase font-thin text-3xl">{plannedDay.day}</h2>
            
            <div className="flex-1 flex justify-end">
              <span className="ml-6 mt-2 relative font-thin cursor-default text-gray-400 transition-colors duration-300 hover:text-gray-700">
                <FontAwesomeIcon icon={faFire} />
                <span className="ml-3 mt-1 relative text-lg hidden lg:inline">1785</span>
              </span>

              <span className="ml-6 mt-2 relative font-thin cursor-default text-gray-400 transition-colors duration-300 hover:text-gray-700">
                <FontAwesomeIcon icon={faFire} />
                <span className="ml-3 mt-1 relative text-lg hidden lg:inline">39%</span>
              </span>

              <span className="ml-6 mt-2 relative font-thin cursor-default text-gray-400 transition-colors duration-300 hover:text-gray-700">
                <FontAwesomeIcon icon={faFire} />
                <span className="ml-3 mt-1 relative text-lg hidden lg:inline">29%</span>
              </span>

              <span className="ml-6 mt-2 relative font-thin cursor-default text-gray-400 transition-colors duration-300 hover:text-gray-700">
                <FontAwesomeIcon icon={faFire} />
                <span className="ml-3 mt-1 relative text-lg hidden lg:inline">42%</span>
              </span>
            </div>

          </div>

          {/* {!plannedDay.plannedMeals && (
            <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <AddCard mealType="Petit déjeuner"></AddCard>
              <AddCard mealType="Déjeuner"></AddCard>
              <AddCard mealType="Dîner"></AddCard>
            </div>
          )} */}

          {/* {!plannedDay.plannedMeals && <p className="my-6 text-gray-500 font-light">Pas de repas préparés.</p>} */}
          { plannedDay.plannedMeals && (
            <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {plannedMeals.map((recipe, key) => <RecipeCard recipe={recipe} className={dailyRecipeHiddenPolicy(key)} key={key}></RecipeCard>)}
            </div>
          )}
        </div>
        )}
      </div>
    </div>
  </div>
)

Planning.getLayout = getLayout

export default Planning

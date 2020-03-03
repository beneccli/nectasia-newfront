import Link from '../Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const Dish = ({ dishName, dishPicture }) => (
  <div className="flex justify-center">
    <div className="mb-3 flex flex-1 justify-center cursor-pointer rounded-md transition duration-200 shadow-outline-white hover:bg-gray-100 hover:shadow-outline-gray">
      <div className="">
        <img src={dishPicture} className="w-16 h-16 rounded-md text-center" />
      </div>
      <div className="flex-1 flex flex-col px-3 self-center">
        <h6>{dishName}</h6>
        <span className="text-sm text-gray-500">1 part</span>
      </div>
    </div>
  </div>
);

const MealList = ({ mealName }) => (
  <div className="">
    <h5 className="text-right text-sm font-bold uppercase bg-gray-100">
      <span className="px-1">{mealName}</span>
      <button className="px-2 py-2 text-gray-500 hover:text-black">
        <FontAwesomeIcon icon={faSyncAlt} />
      </button>
    </h5>
    <div className="flex flex-col px-3 mt-3">
      <Link href="/recipe/[slug]" as="/recipe/any">
        <a>
          <Dish dishName="Salade ceasar" dishPicture="https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
        </a>
      </Link>
    </div>
  </div>
);

// const Statistiques = () => (
//   <div className="border-b border-gray-300">
//     <h5 className="text-center text-sm font-bold uppercase bg-white">
//       <span className="px-1">1843 calories</span>
//     </h5>
//   </div>
// );

// Make container of daycolumn width++, then overflow x auto of the container of the container (no mistake here)
const PlannedDayTry = ({ title, className }) => {

  return (
    <div className={`w-full ${className}`} style={{minWidth: 300}}>
      <div className="flex items-center w-full border-b border-gray-300">
        <h3 className="flex-1 px-3 font-thin">
          1842 calories
          <button className="px-2 py-2 text-gray-500 hover:text-black">
            <FontAwesomeIcon icon={faInfoCircle} size="sm" />
          </button>
        </h3>
        <h2 className="font-thin uppercase">
          <span className="px-1">{title}</span>
          <button className="px-2 py-2 text-gray-500 hover:text-black">
            <FontAwesomeIcon icon={faSyncAlt} size="sm" />
          </button>
        </h2>
      </div>
      <div className="flex flex-col">
        {/* <Statistiques /> */}
        <MealList mealName="Petit déjeuner" />
        <MealList mealName="Déjeuner" />
        <MealList mealName="Dîner" />
      </div>
    </div>
  )
};

export default PlannedDayTry;


import Link from '../Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faFire } from '@fortawesome/free-solid-svg-icons'

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

const MealList = ({ mealName, random }) => (
  <div className="">
    <h5 className="px-3 py-2 text-right text-sm font-bold uppercase bg-gray-100">{mealName}</h5>
    <div className="flex flex-col px-3 mt-3">
      <Dish dishName="Salade ceasar" dishPicture="https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
      {(random || Math.random()) > .5 && <Dish dishName="Salade ceasar" dishPicture="https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />}
    </div>
  </div>
);

// Make container of daycolumn width++, then overflow x auto of the container of the container (no mistake here)
const PlannedDay = ({ dayString, dayNumber, className, random, sticky = false}) => {

  let todayBg = (dayString === 'Aujourd\'hui') ? 'bg-orange-500' : 'bg-black';
  let headerClassName = (sticky) ? 'sticky w-full' : 'relative w-full';
  let headerStyle = (sticky) ? {top: 160} : {};

  return (
    <div className={`w-full ${className}`} style={{minWidth: 300}}>
      <div className={headerClassName} style={headerStyle}>
        <div className="absolute w-full">
          <div className={`sticky w-full h-20 px-3 pb-3 ${todayBg}`} style={{top: 160}}></div>
        </div>
        <div className={`sticky inline-block px-3 pb-3 `} style={{left: 0}}>
          {(dayString === 'Aujourd\'hui'
            && <h4 className="text-white text-sm leading-8 font-black uppercase">{dayString}</h4>)
            || <h4 className="text-white text-sm leading-8 uppercase">{dayString}</h4>}
          <h4 className="text-white text-5xl leading-10">{dayNumber}</h4>
        </div>
      </div>
      <div className="flex flex-col">
        <MealList mealName="Petit déjeuner" random={random} />
        <MealList mealName="Déjeuner" random={random} />
        <MealList mealName="Dîner" random={random} />
      </div>
    </div>
  )
};

export default PlannedDay;


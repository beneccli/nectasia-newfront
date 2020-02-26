import Link from '../Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faFire } from '@fortawesome/free-solid-svg-icons'

export default function MultiDayPlanner({ title }) {
  return (
    <div className="flex justify-center">
      <div className="mb-3 hidden xl:flex flex-1 justify-center cursor-pointer rounded-md transition duration-200 shadow-outline-white hover:bg-gray-100 hover:shadow-outline-gray">
        <div className="">
          <img src={dishPicture} className="w-16 h-16 rounded-md text-center" />
        </div>
        <div className="flex-1 flex flex-col px-3 self-center">
          <h6>{dishName}</h6>
          <span className="text-sm text-gray-500">1 serving</span>
        </div>
      </div>
      <div className="mb-3 mx-auto flex xl:hidden justify-center cursor-pointer rounded-md transition duration-200 shadow-outline-white hover:bg-gray-100 hover:shadow-outline-gray">
        <div className="">
          <img src={dishPicture} className="w-16 h-16 rounded-md text-center" />
        </div>
        <div className="flex flex-col px-3 self-center">
          <h5 className="mb-1 text-gray-500">
            <FontAwesomeIcon icon={faUtensils} className="mr-2 text-gray-400" />
            <span>10</span>
          </h5>
          <h5 className="text-gray-500">
            <FontAwesomeIcon icon={faFire} className="mr-2 text-gray-400" />
            <span>10</span>
          </h5>
        </div>
      </div>
    </div>
  )
}

import Link from '../Link'
import PlannedDay from './PlannedDay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faFire } from '@fortawesome/free-solid-svg-icons'

const plannedDayStyle = "w-96 border-r border-gray-300";

export default function MultiDayPlanner({ title }) {
  return (
    <div className="flex w-full border-t border-b border-gray-200 bg-gray-00" style={{paddingTop: 109}}>
      <PlannedDay className={plannedDayStyle} dayString="Mercredi" dayNumber="25" sticky />
      <PlannedDay className={plannedDayStyle} dayString="Aujourd'hui" dayNumber="26" sticky />
      <PlannedDay className={plannedDayStyle} dayString="Vendredi" dayNumber="27" sticky />
      <PlannedDay className={plannedDayStyle} dayString="Samedi" dayNumber="28" sticky />
      <PlannedDay className={plannedDayStyle} dayString="Samedi" dayNumber="28" sticky />
      <PlannedDay className={plannedDayStyle} dayString="Samedi" dayNumber="28" sticky />
      <PlannedDay className={plannedDayStyle} dayString="Samedi" dayNumber="28" sticky />
    </div>
  )
}


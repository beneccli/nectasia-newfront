import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const headers = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
// const headers = ['li', 'ma', 'me', 'je', 've', 'sa', 'di'];
const days = [
  13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31, 1, 2,
  3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 15, 16
];

const Calendar = () => (
  
  <div>

    <div className="flex">
      <button className="pl-3 pr-4 py-1 border border-gray-300 rounded hover:border-gray-500">
        <FontAwesomeIcon icon={faChevronLeft} /></button>
      <button className="flex-1">
        17 Déc. 2020</button>
      <button className="pl-4 pr-3 py-1 border border-gray-300 rounded hover:border-gray-500">
        <FontAwesomeIcon icon={faChevronRight} /></button>
    </div>

    <div className="grid grid-cols-7">
      {headers.map((header, key) => 
        <div className="mt-2 py-1 text-xs text-gray-600 text-center" key={key}>
          {header}
        </div>
      )}
      {days.map((day, key) => 
        <div className={
          'relative mt-px mr-px py-1 text-center cursor-pointer rounded font-light hover:bg-gray-300'
          + ((day === 17 || day === 18) ? ' selected' : '')
          + ((day === 17 || day === 18 || day === 19) ? ' planned' : '')
          + ((key < 4) ? ' disabled' : '')
        } key={key}>
          <span className={(day === 17 || day === 18 || day === 19) ? 'font-bold' : ''}>
            {day}</span>
        </div>
      )}

      <style jsx>{`
        // .selected { @apply shadow-md }
        .selected { box-shadow: inset 0 0 0 2px rgba(0, 128, 0, 0.5); }
        .planned { @apply bg-green-200 text-green-700 }
        .planned:hover { @apply bg-green-300 }
        .disabled { @apply text-gray-400 }
        .disabled:hover { @apply bg-gray-300 text-white }
      `}</style>
    </div>

  </div>
);

export default Calendar;

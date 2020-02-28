import Layout from '../components/MainLayout'
import { getLayout } from '../components/MainLayout'
import MultiDayPlanner from '../components/Planning/MultiDayPlanner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faChevronDown, faCalendarAlt, faCog, faChartArea } from '@fortawesome/free-solid-svg-icons'

// "Paramètres" button will have:
// - Views (one day, few days, week)
// - (Re)Generate a complete week
// - Edit week pattern

// TODO: make title responsive (quand trop petit les boutons devraient être en dessous de "Février...")

const Planning = () => (
  <div>
    <div className="fixed bg-white z-40 w-full border-b border-gray-200">
      <div className="container">
        <div className="flex flex-wrap justify-center md:justify-between my-8">
          <h2 className="ml-6 text-3xl font-thin">
            <span className="mr-6 font-bold whitespace-no-wrap">Février 2020</span>
            <span className="hidden lg:inline">Planning de repas</span>
          </h2>
          <div className="mr-6 mt-2 flex">
            <div className="btn-group">
              <button className="btn btn-secondary"><FontAwesomeIcon icon={faChevronLeft} /></button>
              <button className="btn btn-secondary">Aujourd'hui</button>
              <button className="btn btn-secondary"><FontAwesomeIcon icon={faCalendarAlt} /></button>
              <button className="btn btn-secondary"><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            <button className="btn btn-secondary ml-4">
              <FontAwesomeIcon icon={faChartArea} />
            </button>
            <button className="btn btn-secondary ml-4">
              <FontAwesomeIcon icon={faCog} />
            </button>
          </div>
        </div>
      </div>
    </div>

    <MultiDayPlanner />
  </div>
)

Planning.getLayout = getLayout

export default Planning

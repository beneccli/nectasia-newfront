import Layout from '../components/MainLayout'
import MultiDayPlanner from '../components/Planning/MultiDayPlanner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faChevronDown, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

// "Paramètres" button will have:
// - Views (one day, few days, week)
// - (Re)Generate a complete week
// - Edit week pattern

// TODO: make title responsive (quand trop petit les boutons devraient être en dessous de "Février...")

export default function Planning() {
  return (
    <Layout>
      <div>
        <div className="container">
          <div className="flex my-8">
            <h2 className="flex-1 ml-6 text-3xl font-thin">
              <span className="mr-6 font-bold">Février 2020</span>
              <span className="hidden lg:inline">Planning de repas</span>
            </h2>
            <div className="mr-6 mt-2">
              <button className="btn btn-secondary"><FontAwesomeIcon icon={faChevronLeft} /></button>
              <button className="btn btn-secondary">Aujourd'hui</button>
              <button className="btn btn-secondary"><FontAwesomeIcon icon={faCalendarAlt} /></button>
              <button className="btn btn-secondary"><FontAwesomeIcon icon={faChevronRight} /></button>
              <button className="btn btn-secondary ml-6"><span className="mr-2">Paramètres</span><FontAwesomeIcon icon={faChevronDown} /></button>
            </div>
          </div>
        </div>

        <MultiDayPlanner />
      </div>
    </Layout>
  )
}

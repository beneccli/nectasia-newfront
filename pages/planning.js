import Layout from '../components/Layouts/MainLayout'
import { getLayout } from '../components/Layouts/MainLayout'
import MultiDayPlanner from '../components/Planning/MultiDayPlanner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faChevronDown, faCalendarAlt, faCog, faChartBar, faShoppingCart, faBolt } from '@fortawesome/free-solid-svg-icons'

// "Paramètres" button will have:
// - Views (one day, few days, week)
// - (Re)Generate a complete week
// - Edit week pattern

// TODO: make title responsive (quand trop petit les boutons devraient être en dessous de "Février...")

{/* <div className="mr-6 mt-2 flex">
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
</div> */}

const InactiveMonth = ({ date, className }) => (
  <div className={`mx-3 flex flex-col text-gray-200 group-hover:text-gray-400 hover:text-black ${className}`}>
    <div className="hover:text-black">
      <h2 className="text-3xl font-thin text-center whitespace-no-wrap cursor-pointer transition-colors duration-200">{date}</h2>
      <div className="text-center opacity-0 transition duration-500 group-hover:opacity-100">
        <span className="mr-3 bg-gray-200 hover:bg-gray-400 text-white rounded-full inline-block h-6 w-6 text-md cursor-pointer">1</span>
        <span className="mr-3 bg-gray-200 hover:bg-gray-400 text-white rounded-full inline-block h-6 w-6 text-md cursor-pointer">2</span>
        <span className="mr-3 bg-gray-200 hover:bg-gray-400 text-white rounded-full inline-block h-6 w-6 text-md cursor-pointer">3</span>
        <span className="bg-gray-200 hover:bg-gray-400 text-white rounded-full inline-block h-6 w-6 text-md cursor-pointer">4</span>
      </div>
    </div>
  </div>
);

const ActiveMonth = ({ date }) => (
  <div className="mx-3 flex flex-col">
    <h2 className="text-3xl text-center font-bold whitespace-no-wrap">{date}</h2>
    <div className="text-center">
      <span className="mr-3 bg-gray-300 text-white rounded-full inline-block h-8 w-8 text-xl font-bold">1</span>
      <span className="mr-3 bg-gray-300 text-white rounded-full inline-block h-8 w-8 text-xl font-bold">2</span>
      <span className="mr-3 bg-gray-300 text-white rounded-full inline-block h-8 w-8 text-xl font-bold">3</span>
      <span className=" bg-black text-white rounded-full inline-block h-8 w-8 text-xl font-bold">4</span>
    </div>
  </div>
);

const InlineCalendar = () => (
  <div className="group flex flex-no-wrap justify-center my-4">
    <InactiveMonth date="Déc 2019" className="hidden md:block" />
    <InactiveMonth date="Jan 2020" />
    <ActiveMonth date="Février 2020" />
    <InactiveMonth date="Mar 2020" />
    <InactiveMonth date="Avr 2020" className="hidden md:block" />
  </div>
);

const FooterActions = () => (
  <div className="fixed inset-x-0 bottom-0">
    <div className="container rounded rounded-b-none" style={{boxShadow: '0 25px 50px 12px rgba(0, 0, 0, 0.25)', backgroundColor: 'rgba(255,255,255,.9)'}}>
      <div className="w-full p-6 flex">
        <div className="self-center mr-6 uppercase font-bold">
          Pour cette semaine
        </div>
        <div className="flex-1">
          <button class="btn btn-primary mr-6">
            <FontAwesomeIcon icon={faBolt} />
            <span className="ml-3">Commander</span>
          </button>
          <button class="btn btn-secondary">
            <FontAwesomeIcon icon={faChartBar} />
            <span className="ml-3">Statistiques</span>
          </button>
        </div>
        <div>
          <button class="btn btn-secondary">Personnaliser</button>
        </div>
      </div>
    </div>
  </div>
);

const Planning = () => (
  <div>
    <div className="fixed group bg-white z-40 w-full border-b border-gray-200">
      <div className="container">
        <InlineCalendar />
      </div>
    </div>

    <MultiDayPlanner />
    <FooterActions />
  </div>
)

Planning.getLayout = getLayout
// 0 25px 50px 12px rgba(0, 0, 0, 0.25)
export default Planning

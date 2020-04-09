import Link from '../Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import PieChart from 'react-minimal-pie-chart';

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

const PreparedPieChart = () => {
  return (
    <PieChart
      style={{
        height: 200
      }}
      animate={false}
      animationDuration={500}
      animationEasing="ease-out"
      cx={50}
      cy={50}
      data={[
        {
          color: '#E38627',
          title: 'Gras',
          value: 10
        },
        {
          color: '#C13C37',
          title: 'Protéines',
          value: 15
        },
        {
          color: '#6A2135',
          title: 'Glucides',
          value: 20
        }
      ]}
      label={({ data, dataIndex }) => 
        `${data[dataIndex].title} ${Math.round(data[dataIndex].percentage)}%`
      }
      labelPosition={50}
      labelStyle={{
        fill: 'white',
        // fontFamily: 'sans-serif',
        fontSize: '6px'
      }}
      lengthAngle={360}
      lineWidth={100}
      onClick={undefined}
      onMouseOut={undefined}
      onMouseOver={undefined}
      paddingAngle={0}
      radius={50}
      rounded={false}
      startAngle={0}
      viewBoxSize={[
        100,
        100
      ]}          
    />
  )
};

// Make container of daycolumn width++, then overflow x auto of the container of the container (no mistake here)
export default class PlannedDayTry extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      currentTutorialId: 0,
      showStats: true
    }
    this.toggleStats = this.toggleStats.bind(this);
  }

  toggleStats(e) {
    e.preventDefault();
    this.setState(state => ({
      showStats: !state.showStats
    }));
  }

  render () {
    return (
      <div className={`w-full ${this.props.className}`} style={{minWidth: 300}}>
        <div className="relative flex items-center w-full border-b border-gray-300">
          {/* <div className="absolute z-20 mt-10 bg-white w-full border border-gray-200 shadow rounded overflow-hidden">
            <h3 className="font-thin text-lg m-3">Statistiques</h3>
            <PreparedPieChart />
            
          </div> */}
          {this.state.showStats && 
            <div className="absolute z-20 ml-4 pb-3 top-0 bg-white border border-gray-200 shadow rounded overflow-hidden" style={{left: '100%', width: 400}}>
              <h3 className="m-3 font-thin text-lg  text-center">D'où viennent mes calories ?</h3>
              <PreparedPieChart />
              <div className="flex mt-3 px-3 font-thin">
                <div className="flex-1 mr-3">
                  <h5 className="mb-3 text-center uppercase">Macro total</h5>
                  <div className="flex font-normal">
                    <div className="flex-1 text-left">Calories</div>
                    <div className="flex-1 text-right">1854</div>
                  </div>
                  <div className="flex font-normal">
                    <div className="flex-1 text-left">Carbs</div>
                    <div className="flex-1 text-right">123g</div>
                  </div>
                  <div className="flex font-normal">
                    <div className="flex-1 text-left">Fat</div>
                    <div className="flex-1 text-right">68g</div>
                  </div>
                  <div className="flex font-normal mb-3">
                    <div className="flex-1 text-left">Protein</div>
                    <div className="flex-1 text-right">110g</div>
                  </div>
                  <div className="flex">
                    <div className="flex-1 text-left">Fiber</div>
                    <div className="flex-1 text-right">25.1g</div>
                  </div>
                  <div className="flex">
                    <div className="flex-1 text-left">Net carbs</div>
                    <div className="flex-1 text-right">112.1g</div>
                  </div>
                  <div className="flex mt-3">
                    <div className="flex-1 text-left">Sodium</div>
                    <div className="flex-1 text-right">5218mg</div>
                  </div>
                  <div className="flex">
                    <div className="flex-1 text-left">Cholesterol</div>
                    <div className="flex-1 text-right">701mg</div>
                  </div>
                  <div className="flex mt-3">
                    <div className="flex-1 text-left">Est. cost</div>
                    <div className="flex-1 text-right">6.43€</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="mb-3 text-center uppercase">Objectifs</h5>
                  <div className="text-center font-normal">1800</div>
                  <div className="text-center font-normal">90g - 225g</div>
                  <div className="text-center font-normal">50g - 100g</div>
                  <div className="text-center font-normal mb-3">90g - 225g</div>
                  <div className="text-center">22g</div>
                  <div className="text-center mb-3">-</div>
                  <div className="text-center">-</div>
                  <div className="text-center mb-3">-</div>
                  <div className="text-center">${`< 10€`}</div>
                </div>
              </div>
            </div>
          }
          <h3 className="flex-1 px-3 font-thin" onClick={this.toggleStats}>
            <button className="py-2 group">
              <span>1842 calories</span>
              <span className="px-2 text-gray-500 group-hover:text-black">
                <FontAwesomeIcon icon={faInfoCircle} size="sm" />
              </span>
            </button>
          </h3>
          <h2 className="font-thin uppercase">
            <span className="px-1">{this.props.title}</span>
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
    );
  }
};


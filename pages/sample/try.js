import Link from '~/components/Link'
import HomeHeader from '~/components/Headers/HomeHeader'
import PlannedDayTry from '~/components/Planning/PlannedDayTry'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const pictureArea = {
  background: "url('https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80')",
  backgroundSize: 'cover',
  backgroundPosition: 'center center'
};

export default function SampleTry() {
  return (
    <div>
      {/* <HomeHeader /> */}

      <div className="bg-blue-400 h-screen w-screen" style={pictureArea}>
        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">

          <div className="flex flex-col px-4 py-4 rounded-lg shadow-lg w-full sm:w-4/5 lg:w-3/4 2xl:w-1/2 bg-white sm:mx-0">
            
            <Link href="/">
              <h1 className="self-center px-6 mb-6 text-3xl font-bold cursor-pointer">NECTASIA</h1>
            </Link>

            <div className="flex">

              <div className="flex-1 flex flex-col mr-6">
                  <div className="w-full flex justify-center">
                    <PlannedDayTry dayString="Aujourd'hui" dayNumber={(new Date()).getDay()} />
                  </div>
                  <Link href="/planning">
                    <a className="mt-6 bg-black hover:bg-blue-700 text-white text-md font-thin uppercase py-3 px-4 rounded text-center">
                      <FontAwesomeIcon icon={faBolt} />
                      <span className="ml-3">Commander</span>
                    </a>
                  </Link>
              </div>

              <div className="flex-1 flex flex-col ml-6">
                  <h2 className="mt-3 text-2xl font-thin text-center">Prêt à en découvrir plus ?</h2>
                  <Link href="/planning">
                    <a
                      className="mt-6 text-white text-md font-thin py-2 px-4 rounded text-center"
                      style={{backgroundColor: '#4267B2'}}
                    >
                      <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
                      <span className="ml-3">Continuer avec Facebook</span>
                    </a>
                  </Link>
                  <Link href="/planning">
                    <a
                      className="mt-3 text-white text-md font-thin py-2 px-4 rounded text-center"
                      style={{backgroundColor: '#DB4437'}}
                    >
                      <FontAwesomeIcon icon={faGoogle} size="lg" />
                      <span className="ml-3">Continuer avec Google</span>
                    </a>
                  </Link>
                  <Link href="/planning">
                    <a className="mt-3 bg-gray-300 texft-white text-md font-thin py-2 px-4 rounded text-center">
                      <span className="ml-3">Continuer avec un email</span>
                    </a>
                  </Link>
              </div>

            </div>

          </div>

        </div>
      </div>

      <style jsx>{`
        .dietBtn {
          @apply mx-1 px-5 py-2 rounded cursor-pointer
        }
        .dietBtn:hover {
          @apply bg-gray-200
        }
        .dietBtn.active {
          @apply bg-black text-white
        }
      `}</style>
    </div>
  )
}

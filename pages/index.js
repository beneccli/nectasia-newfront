import Link from '../components/Link'
import HomeHeader from '../components/Headers/HomeHeader'
import ListVerticalFading from '../components/Home/ListVerticalFading'

const contentStyle = {
  position: 'relative',
  top: 53,
  bottom: 0,
  left: 0,
  right: 0
};

const pictureArea = {
  background: "url('https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80')",
  backgroundSize: 'cover',
  backgroundPosition: 'center center'
};

const pictureArea2 = {
  background: "url('/home-bg.png')",
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center bottom'
};


export default function Blog() {
  return (
    <div>
      {/* <HomeHeader /> */}

      <div className="bg-blue-400 h-screen w-screen" style={pictureArea}>
        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">

          <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style={{height: 550}}>
            <div className="flex flex-col w-full p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">

                <h1 className="self-center px-6 my-2 text-2xl font-bold cursor-pointer">NECTASIA</h1>

                <ListVerticalFading
                  list={[
                    'Un planificateur automatique de repas',
                    'Des courses préparées instantannément',
                    'Des idées de plats pour tous les jours',
                    'Un service 100% gratuit'
                  ]}
                  className="text-4xl font-thin text-center px-24 h-full flex flex-col justify-center"
                  containerClassName="h-32"
                />
                <div className="w-full mt-8">
                  <div className="w-3/4 mx-auto">

                    <div className="flex justify-center">
                      <span className="dietBtn active">Tout</span>
                      <span className="dietBtn">Paleo</span>
                      <span className="dietBtn">Végétarien</span>
                      <span className="dietBtn">Végétalien</span>
                    </div>

                    <div className="flex items-center mt-12">
                      <label className="mr-6" htmlFor="calories">Je veux manger</label>
                      <input id="calories" type="number" className="flex-grow h-10 px-2 border rounded border-grey-400" name="email" placeholder="1800" />
                      <label className="ml-6" htmlFor="calories">calories</label>
                    </div>

                    <div className="flex flex-col mt-12">
                      <Link href="/planning">
                        <a className="bg-black hover:bg-blue-700 text-white text-md font-thin uppercase py-3 px-4 rounded text-center">
                          Je veux un aperçu !
                        </a>
                      </Link>
                    </div>

                  </div>
                  <div className="text-center mt-4">
                    <a className="mr-6 no-underline hover:underline text-blue-dark text-xs" href="#">
                      Se connecter
                    </a>
                    <a className="mr-6 no-underline hover:underline text-blue-dark text-xs" href="#">
                      S'inscrire
                    </a>
                    <a className="no-underline hover:underline text-blue-dark text-xs" href="#">
                      À propos
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style jsx>{`
        .dietBtn {
          @apply mx-1 px-5 py-2 rounded cursor-pointer
        }
        .dietBtn.active {
          @apply bg-black text-white
        }
        .dietBtn:hover {
          @apply bg-gray-200
        }
      `}</style>
    </div>
  )
}

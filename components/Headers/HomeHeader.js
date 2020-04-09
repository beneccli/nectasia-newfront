import Link from '../Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function HomeHeader() {
  return (
    <div className="fixed z-50 w-full">
      <div className="container mx-auto flex flex-row">
        <h1 className="self-center px-6 my-2 text-2xl font-bold cursor-default">NECTASIA</h1>
        {/* <div className="w-full pr-6">
          <input className="hidden w-full py-1 px-4 my-2 border border-gray-300 rounded outline-none placeholder-gray-500 font-thin focus:shadow-sm focus:border-gray-400" placeholder="Rechercher une recette..." />
        </div> */}
        <div className="flex">
          <Link href="/recipes">
            <a className="linkStyle">Parcourir les recettes</a>
          </Link>
          <Link href="/recipes">
            <a className="linkStyle">Se connecter</a>
          </Link>
        </div>
      </div>

     <style jsx>
      {`
        .linkStyle {
          @apply block py-8 px-4 cursor-pointer whitespace-no-wrap;
        }

        .linkStyle:hover,
        .active {
          
        }
      `}
      </style>
    </div>
  )
}

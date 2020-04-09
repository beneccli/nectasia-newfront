import Link from '../Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const linkStyle = 'bg-green-500'
const userPicture = 'https://www.eaclinic.co.uk/wp-content/uploads/2019/01/woman-face-eyes-1000x1000.jpg';

// Recettes, planning, magasin, panier, paramètres / connexion

export default function Header() {
  return (
    <div className="fixed bg-white z-50 w-full border-b border-gray-200">
      <div className="container mx-auto flex flex-row">
        <Link href="/">
          <h1 className="self-center px-6 my-2 text-2xl font-bold cursor-pointer">NECTASIA</h1>
        </Link>
        <div className="w-full pr-6">
          <input className="w-full py-1 px-4 my-2 border border-gray-300 rounded outline-none placeholder-gray-500 font-thin focus:shadow-sm focus:border-gray-400" placeholder="Rechercher une recette..." />
        </div>
        <div className="flex">
          <Link href="/planning">
            <a className="linkStyle">Planning</a>
          </Link>
          <Link href="/recipes">
            <a className="linkStyle">Recettes</a>
          </Link>
          <Link href="/shop">
            <a className="linkStyle! hidden">Magasin</a>
          </Link>
          <Link href="/about">
            <a className="linkStyle! hidden text-gray-300"><FontAwesomeIcon icon={faShoppingCart} className="self-center" /></a>
          </Link>
          <a className="linkStyle">
            <div className="flex">
              <img src={userPicture} className="mr-3 self-center rounded-full h-6 w-6 max-w-none" />
              <span className="hidden self-center mx-3">Ertza</span>
              <FontAwesomeIcon icon={faChevronDown} className="self-center" />
            </div>
          </a>
        </div>
      </div>

     <style jsx>
      {`
        .linkStyle {
          @apply block py-3 px-4 border-0 border-black transition-all duration-75 cursor-pointer;
        }

        .linkStyle:hover,
        .active {
          @apply border-b-4;
        }
      `}
      </style>
    </div>
  )
}

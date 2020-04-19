import Link from '../Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const linkStyle = 'bg-green-500'
const userPicture = 'https://www.eaclinic.co.uk/wp-content/uploads/2019/01/woman-face-eyes-1000x1000.jpg';

// Recettes, planning, magasin, panier, paramètres / connexion

export default function Header() {
  return (
    // <div className="fixed bg-white z-50 w-full border-b border-gray-200">
    <div className="fixed bg-white z-50 w-full">
      <div className="container mx-auto flex flex-row">

        <div className="w-full pr-6 flex">
          <Link href="/planning" isActiveIfPathStartsWith>
            <a className="linkStyle">
              <span>Plannificateur</span>
            </a>
          </Link>
          <Link href="/grocery" isActiveIfPathStartsWith>
            <a className="linkStyle">
              <span>Supermarché</span>
            </a>
          </Link>
          {/* <Link href="/recipes" isActiveIfPathStartsWith>
            <a className="linkStyle">
              <span>Recettes</span>
            </a>
          </Link> */}
          <Link href="/planning?commands" isActiveIfPathStartsWith>
            <a className="linkStyle">
              <span>Commandes</span>
            </a>
          </Link>
        </div>

        <Link href="/planning">
          <h1 className="self-center px-6 my-3 text-2xl font-bold cursor-pointer">NECTASIA</h1>
        </Link>

        <div className="w-full pr-6 flex justify-end">
          <Link href="/">
            <a className="linkStyle">
              <span>Ertza</span>
              <img src={userPicture} />
            </a>
          </Link>
        </div>

      </div>

     <style jsx>
      {`
        .linkStyle { @apply my-3 px-2 flex rounded-full text-gray-600 }
        .linkStyle > span { @apply self-center mx-3 font-bold }
        .linkStyle > img { @apply self-center rounded-full h-6 w-6 max-w-none }
        .linkStyle:hover { @apply bg-gray-200 }
        .active { @apply text-black }
      `}
      </style>
    </div>
  )
}

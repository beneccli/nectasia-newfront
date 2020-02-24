import Link from 'next/link'

const linkStyle = 'bg-green-500'
const userPicture = 'https://www.eaclinic.co.uk/wp-content/uploads/2019/01/woman-face-eyes-1000x1000.jpg';

// Recettes, planning, magasin, panier, paramètres / connexion

export default function Header() {
  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto flex flex-row">
        <div>
          <h1 className="py-1 px-6 my-2 text-lg font-bold">NECTASIA</h1>
        </div>
        <div className="w-full pr-6">
          <input className="w-full py-1 px-4 my-2 border border-gray-200 rounded outline-none placeholder-gray-400 font-thin focus:shadow-sm focus:border-gray-300" placeholder="Rechercher une recette..." />
        </div>
        <div className="flex">
          <Link href="/">
            <a className="linkStyle active">Recettes</a>
          </Link>
          <Link href="/about">
            <a className="linkStyle">Planning</a>
          </Link>
          <Link href="/about">
            <a className="linkStyle">Magasin</a>
          </Link>
          <Link href="/about">
            <a className="linkStyle">Panier</a>
          </Link>
          <a className="linkStyle">
            <div className="flex">
              <img src={userPicture} className="mr-3 rounded-full h-6 w-6 max-w-none" />
              <span>Ertza</span>
            </div>
          </a>
        </div>
      </div>

     <style jsx>
      {`
        .linkStyle {
          @apply block py-3 px-4 border-0 border-gray-200 transition-all duration-75 cursor-pointer;
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

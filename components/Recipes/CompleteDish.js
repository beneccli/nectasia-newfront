import Link from '../Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const CompleteDish = ({ recipe, className }) => (
  <Link href="/planning/dishSelection">
    <a className={`animateCardPicture mx-3 mb-6 flex flex-col rounded cursor-pointer ${className}`}>
      <div className="relative pb-2/3">
        <img src={recipe.picture} className="absolute w-full h-full object-cover rounded-md" />
        <div className="absolute flex transform transition duration-300 w-full h-10 bg-transparent " style={{top: 0, zIndex: 500000}}>
          <div className="w-10 h-10 my-2 ml-2 rounded-full bg-black text-white flex items-center justify-center" style={{boxShadow: '0 0 0 3px #00000050'}}>
            <FontAwesomeIcon icon={faPlus} size="xs" />
            <span className="text-lg font-semibold">2</span>
          </div>
          <img src="/recipes/12.jpg" />
          <img src="/recipes/13.jpg" />
        </div>
      </div>
      <div className="px-3 pt-2 flex">
        <div className="flex-1 self-center text-xs text-gray-500 uppercase">{recipe.mealType}</div>
      </div>
      <h3 className="px-3 mt-1 text-lg">{recipe.name}</h3>
      <style jsx>{`
        .animateCardPicture > div { @apply transform transition duration-300 }
        .animateCardPicture:hover > div:first-child { @apply scale-105 shadow-xl }
        .animateCardPicture:active > div:first-child { @apply scale-95 duration-150 }

        .animateCardPicture:hover > div > div > img { @apply opacity-100 }
        .animateCardPicture > div > div > img {
          @apply w-10 h-10 my-2 ml-3 rounded-full opacity-0 transition-opacity duration-300;
          box-shadow: 0 0 0 3px #00000050
        }
      `}</style>
    </a>
  </Link>
);

// Yellow-300 #faf089

export default CompleteDish;

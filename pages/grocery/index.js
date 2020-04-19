import Link from '../../components/Link'
import { getLayout } from '../../components/Layouts/MainLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faChartBar, faShoppingCart, faUser, faMagic, faHistory, faFire } from '@fortawesome/free-solid-svg-icons'

const GrocerySidebar = () => (
  <div className="w-64 hidden md:block">

    <div className="sticky" style={{top: 0}}>
      <div className="flex flex-col">

        <div className="">
          <div className="link active">
            <span>Fruits & légumes</span></div>
          <div className="flex flex-col">
            <div className="link sublink"><span>Fruits</span></div>
            <div className="link sublink active"><span>Légumes</span></div>
            <div className="link sublink"><span>Salade & herbes</span></div>
            <div className="link sublink"><span>Bulbes</span></div>
          </div>
        </div>

        <div className="">
          <div className="link">
            <span>Viandes & poissons</span></div>
        </div>

        <div className="">
          <div className="link">
            <span>Fromages</span></div>
        </div>

        <div className="">
          <div className="link">
            <span>Crèmerie</span></div>
        </div>

        <div className="">
          <div className="link">
            <span>Végétal</span></div>
        </div>

        <div className="">
          <div className="link">
            <span>Épicerie sucrée</span></div>
        </div>

        <div className="">
          <div className="link">
            <span>Épicerie salée</span></div>
        </div>

        <div className="">
          <div className="link">
            <span>Boulangerie</span></div>
        </div>

        <div className="">
          <div className="link">
            <span>Pour les bébés</span></div>
        </div>

        <div className="">
          <div className="link">
            <span>Cave & bières</span></div>
        </div>

        <div className="">
          <div className="link">
            <span>Boissons</span></div>
        </div>

        <div className="">
          <div className="link">
            <span>Produits ménagers</span></div>
        </div>

      </div>
    </div>

    <style jsx>{`
      .link { @apply px-4 py-2 rounded transition-colors duration-200 cursor-pointer }
      .link > span { @apply inline-block }
      .link.active:not(.sublink) > span { @apply font-semibold border-b border-black }
      .link:hover { @apply bg-gray-200 }

      .link.sublink { @apply ml-10 text-gray-500 }
      .link.sublink.active { @apply text-black }
      .link.sublink:hover { @apply ml-10 text-black }
    `}</style>
    </div>
);

const RecipeCard = ({ recipe, className }) => (
  <Link href="/planning/dishSelection">
    <a className={`animateCardPicture mx-3 mb-6 flex flex-col rounded cursor-pointer transition duration-200 shadow-outline-white hover:bg-gray-100 hover:shadow-outline-gray ${className}`}>
      <div className="relative pb-2/3">
        <img src={recipe.picture} className="absolute w-full h-full object-cover rounded-md" />
      </div>
      <div className="px-3 pt-2 flex">
        <div className="flex-1 self-center text-xs text-gray-500 uppercase">{recipe.mealType}</div>
      </div>
      <h3 className="px-3 mt-1 text-lg">{recipe.name}</h3>
      <style jsx>{`
        .animateCardPicture > div { @apply transform transition-transform duration-300 }
        .animateCardPicture:hover > div:first-child { @apply scale-105 }
        .animateCardPicture:active > div:first-child { @apply scale-95 duration-150 }
      `}</style>
    </a>
  </Link>
);

const Planning = () => (
  <div className="container">

    <div className="mb-6 h-64 flex items-center justify-center bg-black text-white" style={{background: "url('/recipes/14.jpg')", backgroundSize: 'cover', backgroundPosition: 'center center'}}>
      <span className="text-3xl uppercase font-bold">Supermarché</span>
    </div>

    <div className="flex">
      <GrocerySidebar />
      <div className="flex-1 ml-8">
        <span className="font-sm italic">Products are displayed here as card</span>
      </div>
    </div>
    
  </div>
)

Planning.getLayout = getLayout

export default Planning

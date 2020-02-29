import { useRouter } from 'next/router'
import { getLayout } from '../../components/Layouts/BrowseRecipesLayout'
import Link from '../../components/Link'

const picture = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80';

const Ingredient = () => (
  <div className="flex mx-6 mb-3">
    <div className="w-12 h-12 bg-black rounded"></div>
    <div className="flex-1 flex flex-col justify-center mx-4">
      <h3 className="">Tomates</h3>
      <h4 className="text-gray-400 text-xs">Découpées en rondelle</h4>
    </div>
    <div className="flex flex-col justify-center mx-4">
      <h3 className="font-thin">4 rondelles</h3>
      <h4 className="text-gray-400 text-xs">133g</h4>
    </div>
  </div>
);

const Recipe = () => {
  const router = useRouter()
  return (
    <div>
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="order-2">
          <h1 className="mx-6 my-5 text-3xl font-thin">Ingrédients</h1>
          <div className="INGREDIENTS-LIST">
            <Ingredient />
            <Ingredient />
            <Ingredient />
            <Ingredient />
          </div>
        </div>
        <div className="order-1">
          <div className="relative pb-2/3">
            <img src={picture} className="absolute w-full h-full object-cover" />
          </div>
          <h1 className="mx-6 my-3 text-2xl">Pizza Orientale</h1>
        </div>
      </section>
      <section>

      </section>
    </div>
  )
}

Recipe.getLayout = getLayout

export default Recipe

import Link from '../Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const user_1 = { username: 'Ertza', picture: 'https://www.eaclinic.co.uk/wp-content/uploads/2019/01/woman-face-eyes-1000x1000.jpg' };
const user_2 = { username: 'Martin', picture: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=596&q=80' };

const dailyRecipes = [
  {
    name: 'Burger américain',
    category: 'burger',
    picture: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
    likes: 13,
    user: user_1
  }, {
    name: 'Salade ceasar',
    category: 'dessert',
    picture: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    likes: 7,
    user: user_1
  }, {
    name: 'Salade nipponne',
    category: 'salad',
    picture: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
    likes: 43,
    user: user_2
  }, {
    name: 'Pizza kiffatoire',
    category: 'italian',
    picture: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    likes: 20,
    user: user_1
  }
];

const dailyRecipeHiddenPolicy = (key) => (key == 2) ? 'hidden md:flex' : (key == 3) ? 'hidden lg:flex' : '';

const RecipeCard = ({ recipe, className }) => (
  <Link href="#">
    <div className={`mx-3 flex flex-col rounded cursor-pointer transition duration-200 shadow-outline-white hover:bg-gray-100 hover:shadow-outline-gray ${className}`}>
      <div className="relative pb-2/3">
        <img src={recipe.picture} className="absolute w-full h-full object-cover rounded-md" />
      </div>
      <div className="px-3 pt-2 flex">
        <div className="flex-1 self-center text-xs text-gray-500 uppercase">{recipe.category}</div>
        <div className="flex-1 self-center text-right text-sm text-gray-500">
          <FontAwesomeIcon icon={faThumbsUp} className="text-gray-400" />
          <span className="pl-3">{recipe.likes}</span>
        </div>
      </div>
      <h3 className="px-3 mt-1 text-lg">{recipe.name}</h3>
      <span className="px-3 pb-3 text-sm text-gray-400">Proposé par <a href="#" className="text-gray-500">{recipe.user.username}</a></span>
    </div>
  </Link>
);

export default function DailyRecipes({ title }) {
  return (
    <section className="container">
      <div className="flex">
        <h2 className="flex-1 ml-6 my-8 text-3xl font-thin">{title}</h2>
        <a href="#" className="flex-1 mt-12 mr-6 text-right">Parcourir</a>
      </div>
      <div className="px-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dailyRecipes.map((recipe, key) => <RecipeCard recipe={recipe} className={dailyRecipeHiddenPolicy(key)}></RecipeCard>)}
      </div>
    </section>
  )
}

import Link from '../Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const user_1 = { username: 'Ertza', picture: 'https://www.eaclinic.co.uk/wp-content/uploads/2019/01/woman-face-eyes-1000x1000.jpg' };
const user_2 = { username: 'Martin', picture: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=596&q=80' };

const dailyRecipes = [
  {
    name: 'Burger américain',
    category: 'burger',
    picture: '/recipes/9.jpg',
    likes: 13,
    user: user_1
  }, {
    name: 'Salade ceasar',
    category: 'dessert',
    picture: '/recipes/2.jpg',
    likes: 7,
    user: user_1
  }, {
    name: 'Salade nipponne',
    category: 'salad',
    picture: '/recipes/3.jpg',
    likes: 43,
    user: user_2
  }, {
    name: 'Pizza kiffatoire',
    category: 'italian',
    picture: '/recipes/11.jpg',
    likes: 20,
    user: user_1
  }
];

const dailyRecipeHiddenPolicy = (key) => (key == 2) ? 'hidden md:flex' : (key == 3) ? 'hidden lg:flex' : '';

const RecipeCard = ({ recipe, className }) => (
  <Link href="/recipe/[slug]" as="/recipe/Slug-Test">
    <a>
      <div className={`mx-3 mb-6 flex flex-col rounded cursor-pointer transition duration-200 shadow-outline-white hover:bg-gray-100 hover:shadow-outline-gray ${className}`}>
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
        {/* <span className="px-3 pb-3 text-sm text-gray-400">Proposé par <span className="text-gray-500">{recipe.user.username}</span></span> */}
      </div>
    </a>
  </Link>
);

const SelectedRecipeCard = ({ recipe, className }) => (
  <Link href="/recipe/[slug]" as="/recipe/Slug-Test">
    <a>
      <div className={`mx-3 mb-6 flex flex-col rounded cursor-pointer transition duration-200 shadow-outline-white bg-black hover:shadow-outline-gray ${className}`}>
        <div className="relative pb-2/3">
          <img src={recipe.picture} className="absolute w-full h-full object-cover rounded-md" />
          <span className="absolute px-2 rounded bg-green-600 text-white" style={{top: 5, right: 5}}>Sélectionné</span>
        </div>
        <div className="px-3 pt-2 flex">
          <div className="flex-1 self-center text-xs text-white uppercase">{recipe.category}</div>
          <div className="flex-1 self-center text-right text-sm text-gray-500">
            <FontAwesomeIcon icon={faThumbsUp} className="text-gray-400" />
            <span className="pl-3">{recipe.likes}</span>
          </div>
        </div>
        <h3 className="px-3 mt-1 text-lg text-white">{recipe.name}</h3>
        {/* <span className="px-3 pb-3 text-sm text-gray-400">Proposé par <span className="text-gray-500">{recipe.user.username}</span></span> */}
      </div>
    </a>
  </Link>
);

export default function DailyRecipes() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <SelectedRecipeCard recipe={dailyRecipes[3]}></SelectedRecipeCard>
        {dailyRecipes.map((recipe, key) => <RecipeCard recipe={recipe} className={dailyRecipeHiddenPolicy(key)} key={key}></RecipeCard>)}
        {dailyRecipes.map((recipe, key) => <RecipeCard recipe={recipe} className={dailyRecipeHiddenPolicy(key)} key={key}></RecipeCard>)}
        {dailyRecipes.map((recipe, key) => <RecipeCard recipe={recipe} className={dailyRecipeHiddenPolicy(key)} key={key}></RecipeCard>)}
        {dailyRecipes.map((recipe, key) => <RecipeCard recipe={recipe} className={dailyRecipeHiddenPolicy(key)} key={key}></RecipeCard>)}
        {dailyRecipes.map((recipe, key) => <RecipeCard recipe={recipe} className={dailyRecipeHiddenPolicy(key)} key={key}></RecipeCard>)}
        {dailyRecipes.map((recipe, key) => <RecipeCard recipe={recipe} className={dailyRecipeHiddenPolicy(key)} key={key}></RecipeCard>)}
      </div>
    </section>
  )
}

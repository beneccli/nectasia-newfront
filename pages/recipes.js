import { getLayout } from '../components/Layouts/BrowseRecipesLayout'
import DailyRecipes from '../components/Recipes/DailyRecipes'
import RecipeCategories from '../components/Recipes/RecipeCategories'
import Link from '../components/Link'

const Recipes = () => (
  <div>
    <div className="bg-black w-full h-64 rounded">
      Hello
    </div>
    <DailyRecipes title="Recommandées par la communauté" />
    {/* <DailyRecipes title="Dernières recettes ajoutées" />
    <RecipeCategories /> */}
  </div>
)

Recipes.getLayout = getLayout

export default Recipes

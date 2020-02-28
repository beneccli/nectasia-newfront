import Layout from '../components/MainLayout'
import { getLayout } from '../components/MainLayout'
import DailyRecipes from '../components/Recipes/DailyRecipes'
import RecipeCategories from '../components/Recipes/RecipeCategories'
import Link from '../components/Link'

const Recipes = () => (
  <div>
    <DailyRecipes title="Recommandées par la communauté" />
    <DailyRecipes title="Dernières recettes ajoutées" />
    <RecipeCategories />
  </div>
)

Recipes.getLayout = getLayout

export default Recipes
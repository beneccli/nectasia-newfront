import Layout from '../components/MainLayout'
import DailyRecipes from '../components/Recipes/DailyRecipes'
import RecipeCategories from '../components/Recipes/RecipeCategories'
import Link from '../components/Link'

export default function Recipes() {
  return (
    <Layout>
      <DailyRecipes title="Recommandées par la communauté" />
      <DailyRecipes title="Dernières recettes ajoutées" />
      <RecipeCategories />
    </Layout>
  )
}

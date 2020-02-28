import Layout from '../components/MainLayout'
import { getLayout } from '../components/MainLayout'
import DailyRecipes from '../components/Recipes/DailyRecipes'
import RecipeCategories from '../components/Recipes/RecipeCategories'
import Link from '../components/Link'

const RecipesNavigation = () => (
  <div className="w-64">
    <div className="fixed w-64 bottom-0 py-6 px-6 border-r border-gray-300" style={{top: 53}}>
      <button className="btn btn-primary mb-6 w-full">Créer une recette</button>
      <h3 className="mb-4 font-bold uppercase">Catégories</h3>
      <ul>
        {['Burger', 'Indien', 'Salade', 'Italien', 'Libanais', 'Japonais', 'Coréen', 'Chinois'].map((value, key) => 
        <li>
          <a href="#" className="navLink">{value}</a>
        </li>
        )}
      </ul>
    </div>
    <style jsx>{`
      .navLink {
        @apply inline-block py-1;
      }
    `}</style>
    </div>
);

const Recipes = () => (
  <div className="container">
    <div className="flex">
      <RecipesNavigation />
      <div className="flex-1">
        <DailyRecipes title="Recommandées par la communauté" />
        <DailyRecipes title="Dernières recettes ajoutées" />
        <RecipeCategories />
      </div>
    </div>
  </div>
)

Recipes.getLayout = getLayout

export default Recipes

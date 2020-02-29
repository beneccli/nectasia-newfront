import { useRouter } from 'next/router'
import { getLayout } from '../../components/Layouts/BrowseRecipesLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensilSpoon, faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faThumbsDown, faComments } from '@fortawesome/free-regular-svg-icons'
import RecipeDetail from '../../components/Recipes/RecipeDetail'
import Link from '../../components/Link'

const Recipe = () => {
  const router = useRouter()
  return (
    <RecipeDetail slug={router.query.slug} />
  )
}

Recipe.getLayout = getLayout

export default Recipe

import Link from '../Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const user_1 = { username: 'Ertza', picture: 'https://www.eaclinic.co.uk/wp-content/uploads/2019/01/woman-face-eyes-1000x1000.jpg' };
const user_2 = { username: 'Martin', picture: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=596&q=80' };

const recipeCategories = [
  {
    name: 'burger',
    picture: '/recipes/9.jpg',
  }, {
    name: 'dessert',
    picture: '/recipes/8.jpg',
  }, {
    name: 'salade',
    picture: '/recipes/6.jpg',
  }, {
    name: 'italien',
    picture: '/recipes/11.jpg',
  }, {
    name: 'Libanais',
    picture: '/recipes/4.jpg',
  }, {
    name: 'Japonais',
    picture: '/recipes/5.jpg',
  }, {
    name: 'Coréen',
    picture: '/recipes/7.jpg',
  }, {
    name: 'Chinois',
    picture: '/recipes/2.jpg',
  }
];

const CategoryCard = ({ category, className }) => (
  <Link href="#">
    <div className={`mx-3 mb-6 flex flex-col rounded cursor-pointer ${className}`}>
      <div className="relative pb-2/3">
        <div className="absolute flex w-full h-full z-10 rounded-md bg-black-transparent-3/5 hover:bg-black-transparent-1/2 transition duration-200">
          <h3 className="self-center flex-1 text-center text-white capitalize text-xl">{category.name}</h3>
        </div>
        <img src={category.picture} className="absolute w-full h-full object-cover rounded-md" />
      </div>
    </div>
  </Link>
);

export default function RecipeCategories() {
  return (
    <section>
      <h2 className="ml-6 my-8 text-3xl font-thin">Découvrir les cuisines du monde</h2>
      <div className="px-3 grid grid-cols-2 md:grid-cols-3">
        {recipeCategories.map((category, key) => <CategoryCard category={category} key={key}></CategoryCard>)}
      </div>
    </section>
  )
}

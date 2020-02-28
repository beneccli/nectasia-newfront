import Link from '../Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const user_1 = { username: 'Ertza', picture: 'https://www.eaclinic.co.uk/wp-content/uploads/2019/01/woman-face-eyes-1000x1000.jpg' };
const user_2 = { username: 'Martin', picture: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=596&q=80' };

const recipeCategories = [
  {
    name: 'burger',
    picture: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
  }, {
    name: 'dessert',
    picture: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  }, {
    name: 'salade',
    picture: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
  }, {
    name: 'italien',
    picture: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    name: 'Libanais',
    picture: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
  }, {
    name: 'Japonais',
    picture: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  }, {
    name: 'Coréen',
    picture: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
  }, {
    name: 'Chinois',
    picture: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
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
        {recipeCategories.map((category, key) => <CategoryCard category={category}></CategoryCard>)}
      </div>
    </section>
  )
}

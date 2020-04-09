import { getLayout as getSiteLayout } from './MainLayout'
import Link from '../../components/Link'

const RecipesNavigation = () => (
  <div className="w-72 hidden md:block">

    <div className="fixed w-72 bottom-0 py-6 px-6" style={{top: 66}}>
      {/* <button className="btn btn-primary mb-6 w-full">Créer une recette</button> */}

      <h3 className="mb-3 font-bold uppercase">Régime</h3>

      <ul>
        {['Tout', 'Paleo', 'Vegetarien', 'Vegan', 'Cétogène', 'Méditerranéen'].map((value, key) => 
        <li key={key}>
          <Link href="/recipes">
            <a className="navLink">{value}</a>
          </Link>
        </li>
        )}
      </ul>

      <h3 className="mt-8 mb-3 font-bold uppercase">Filtrer par</h3>

      <ul>
        {['Burger', 'Indien', 'Salade', 'Italien', 'Libanais', 'Japonais', 'Coréen', 'Chinois'].map((value, key) => 
        <li key={key}>
          <Link href="/recipes">
            <a className="navLink">{value}</a>
          </Link>
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

const BrowseRecipesLayout = ({ children }) => (
  <div className="container">
    <div className="flex">
      <RecipesNavigation />
      <div className="flex-1">
        {children}
      </div>
    </div>
  </div>
)

export const getLayout = page => getSiteLayout(<BrowseRecipesLayout>{page}</BrowseRecipesLayout>)

export default BrowseRecipesLayout

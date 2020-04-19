import React, { useState, useRef, useEffect } from "react";
import Link from '../Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import RecipeModal from './RecipeModal'

const dailyRecipes = [
  { name: 'Burger américain', category: 'burger', picture: '/recipes/9.jpg', likes: 13 },
  { name: 'Salade ceasar', category: 'dessert', picture: '/recipes/2.jpg', likes: 7 },
  { name: 'Salade nipponne', category: 'salad', picture: '/recipes/3.jpg', likes: 43 },
  { name: 'Pizza kiffatoire', category: 'italian', picture: '/recipes/11.jpg', likes: 20 }
];

const dailyRecipeHiddenPolicy = (key) => (key == 2) ? 'hidden md:flex' : (key == 3) ? 'hidden lg:flex' : '';

const RecipeCard = ({ className, onClick, recipe, isSelected }) => (
  <a onClick={onClick} className={`animateCardPicture block mx-3 mb-6 flex flex-col rounded cursor-pointer transition duration-200 shadow-outline-white hover:bg-gray-100 hover:shadow-outline-gray ${className}`}>
    <div className="relative pb-2/3">
      <img src={recipe.picture} className="absolute w-full h-full object-cover rounded-md" />
      {isSelected && <span className="absolute px-2 py-4 rounded bg-black text-white text-center" style={{background: 'rgba(0,0,0,.75)', bottom: 0, right: 0, left: 0}}>Sélectionné</span>}
    </div>
    <div className="px-3 pt-2 flex">
      <div className="flex-1 self-center text-xs text-gray-500 uppercase">{recipe.category}</div>
      <div className="flex-1 self-center text-right text-sm text-gray-500">
        <FontAwesomeIcon icon={faThumbsUp} className="text-gray-400" />
        <span className="pl-3">{recipe.likes}</span>
      </div>
    </div>
    <h3 className="px-3 mt-1 text-lg">{recipe.name}</h3>
    <style jsx>{`
      .animateCardPicture > div { @apply transform transition-transform duration-300 }
      .animateCardPicture:hover > div:first-child { @apply scale-105 }
      .animateCardPicture:active > div:first-child { @apply scale-95 duration-150 }
    `}</style>
  </a>
);
// ! remove dishes buttons + center date + add all dishes above etc
const RecipeCompleteCard = ({ recipe, className, isSelected }) => (
  <Link href="/recipe/[slug]" as="/recipe/Slug-Test">
    <a className={`mx-3 mb-6 flex flex-col rounded-lg cursor-pointer transition duration-200 shadow-outline-white bg-black! hover:shadow-outline-gray ${className}`}>
      <div className="relative pb-2/3">
        <div className="absolute flex w-full h-full object-cover rounded-md overflow-hidden">
          <div className="relative h-full w-2/3 bg-black">
            <img src={recipe.picture} className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 flex flex-col border-l border-white">
            <div className="flex-1 relative h-full w-full bg-black border-b border-white">
              <img src="/recipes/12.jpg" className="absolute w-full h-full object-cover" /></div>
            <div className="flex-1 relative h-full w-full bg-black">
              <img src="/recipes/13.jpg" className="absolute w-full h-full object-cover" /></div>
          </div>
        </div>
        {isSelected && <span className="absolute px-2 py-4 rounded bg-black text-white text-center" style={{background: 'rgba(0,0,0,.5)', bottom: 0, right: 0, left: 0}}>Petit déjeuner</span>}
      </div>
      <div className="px-3 pt-2 flex">
        <div className="flex-1 self-center text-xs text-gray-500 uppercase">{recipe.category}</div>
        <div className="flex-1 self-center text-right text-sm text-gray-500">
          <FontAwesomeIcon icon={faThumbsUp} className="text-gray-400" />
          <span className="pl-3">{recipe.likes}</span>
        </div>
      </div>
      <h3 className="px-3 mt-1 text-lg">{recipe.name}</h3>
      <style jsx>{`
        .animateCardPicture > div { @apply transform transition-transform duration-300 }
        .animateCardPicture:hover > div:first-child { @apply scale-105 }
        .animateCardPicture:active > div:first-child { @apply scale-95 duration-150 }
      `}</style>
    </a>
  </Link>
);

// ! Use column-width instead of grid below for pinterest-like style
const RecipesList = () => {

  const [modal, setModal] = useState(false);

  const _modal = useRef(null);

  const showRecipeModal = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const closeModal = e => {
    if (!modal) return;
    if (_modal.current._content.current.contains(e.target)) return;
    setModal(false);
  };

  return (
    <section>
      {modal && <RecipeModal ref={_modal} onClick={closeModal} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <RecipeCompleteCard recipe={dailyRecipes[3]} isSelected></RecipeCompleteCard>
        {dailyRecipes.map((recipe, key) => <RecipeCard onClick={showRecipeModal} recipe={recipe} className={dailyRecipeHiddenPolicy(key)} key={key}></RecipeCard>)}
        {/* <RecipeCard recipe={dailyRecipes[3]} isSelected></RecipeCard> */}
        {dailyRecipes.map((recipe, key) => <RecipeCard onClick={showRecipeModal} recipe={recipe} className={dailyRecipeHiddenPolicy(key)} key={key}></RecipeCard>)}
        {dailyRecipes.map((recipe, key) => <RecipeCard onClick={showRecipeModal} recipe={recipe} className={dailyRecipeHiddenPolicy(key)} key={key}></RecipeCard>)}
        {dailyRecipes.map((recipe, key) => <RecipeCard onClick={showRecipeModal} recipe={recipe} className={dailyRecipeHiddenPolicy(key)} key={key}></RecipeCard>)}
        {dailyRecipes.map((recipe, key) => <RecipeCard onClick={showRecipeModal} recipe={recipe} className={dailyRecipeHiddenPolicy(key)} key={key}></RecipeCard>)}
        {dailyRecipes.map((recipe, key) => <RecipeCard onClick={showRecipeModal} recipe={recipe} className={dailyRecipeHiddenPolicy(key)} key={key}></RecipeCard>)}
      </div>
    </section>
  )
};

export default RecipesList;

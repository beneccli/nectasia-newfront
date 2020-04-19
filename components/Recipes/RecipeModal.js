import React, { useImperativeHandle, forwardRef, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const modal = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflowY: "auto",
  backgroundColor: "rgba(0,0,0,.5)",
  zIndex: 10000
};

const content = {
  position: "relative",
  top: 0,
  left: 0,
  right: 0,
  borderRadius: 15,
  width: 830,
  margin: "auto",
  backgroundColor: "#fff",
  zIndex: 10000000
};


const Ingredient = () => (
  <div className="flex my-4 rounded cursor-default transition duration-200 shadow-outline-white hover:bg-gray-100 hover:shadow-outline-gray">
    <div className="w-12 h-12 bg-black rounded overflow-hidden">
      <img src='/recipes/2.jpg' />
    </div>
    <div className="flex-1 flex flex-col justify-center mx-4">
      <h3 className="">Tomates</h3>
      <h4 className="text-gray-400 text-xs">Découpées en rondelle</h4>
    </div>
    <div className="flex flex-col justify-center mx-4">
      <h3 className="font-thin">1 tomate</h3>
      <h4 className="text-gray-400 text-xs">123g</h4>
    </div>
  </div>
);

const CircleValue = ({ label, value }) => (
  <div className="w-20">
    <div className="flex items-center justify-center w-20 h-20 border-4 border-gray-200 rounded-full">
      <span className="font-bold">{value}</span>
    </div>
    <div className="mt-3 text-center text-xs text-gray-700 uppercase">
      {label}
    </div>
  </div>
);


const Modal = (props, ref) => {
  const _content = useRef(null);
  useImperativeHandle(ref, () => ({ _content }));

  return (
    <div style={modal} onClick={props.onClick}>
      <div ref={_content} style={content} className="pb-24">
        <div className="relative pb-9/16">
          <img src='/recipes/9.jpg' className="absolute w-full h-full object-cover" />
        </div>

        <div className="relative px-20 pt-4">
        
          <div className="sticky py-4 bg-white text-3xl font-bold" style={{top: 0}}>Burger Mel</div>

          <p className="mb-10 text-justify text-xl font-light">
            Un pain moelleux, une sauce légèrement relevée, des oignons croustillants, des tranches de bacon, des tranches de fromage fondu et un irrésistible poulet pané croustillant !
          </p>

          {/* <div className="mb-16">
            <h1 className="mb-6 text-2xl font-bold">Accompagnement</h1>
            <div>
              
            </div>
          </div> */}

          <div className="mb-16">
            <h1 className="mb-6 text-2xl font-bold">Ingrédients</h1>
            <div>
              <Ingredient />
              <Ingredient />
              <Ingredient />
              <Ingredient />
            </div>
          </div>

          <div className="mb-16">
            <h1 className="mb-6 text-2xl font-bold">Préparation</h1>
            <div>
              <ul className="pl-6 list-decimal font-light">
                <li className="mb-2">Découpez votre avocat et votre tomate en morceaux. Coupez votre boule de mozzarella en tranches.</li>
                <li className="mb-2">Chauffez votre poêle à feu moyen.</li>
                <li className="mb-2">Beurrez légèrement un côté de vos deux tranches de pain.</li>
                <li className="mb-2">Placez dans un premier temps une tranche dans la poêle.</li>
                <li className="mb-2">Par-dessus, ajoutez l’avocat, la mozzarella et les morceaux de tomate. Versez un peu d’huile d’olive et assaisonnez enfin de sel et de poivre. Refermez le tout avec l'autre tranche.</li>
                <li className="mb-2">Dès que le premier côté est doré (au bout de 2-3 minutes environ), retournez et laissez cuire 3 minutes de plus.</li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h1 className="mb-6 text-2xl font-bold">Valeurs nutritionelles</h1>
            <div className="flex justify-between">
              <CircleValue label="Calories" value={['123', <br />, 'kcal']} />
              <CircleValue label="Glucides" value="22,3g" />
              <CircleValue label="Mat. grasses" value="10,3g" />
              <CircleValue label="Protéines" value="8,4g" />
              <CircleValue label="Fibres" value="16,2g" />
            </div>
          </div>

          <div className="fixed flex items-center px-6 py-4 bg-black text-white" style={{right: 0, bottom: 0, left: 0, width: 830, margin: 'auto'}}>
            
            <div className="flex-1">
              <button className="font-bold">
                <FontAwesomeIcon icon={faPlus} size="lg" className="mr-3" />
                Ajouter un accompagnement
              </button> 
            </div>

            <button className="px-6 py-3 bg-white text-black font-bold">
              Sélectionner
            </button>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Modal);

import WrapIcon from '@/components/WrapIcon';
import React, { useState } from 'react';
import { FaPlus, FaPlusCircle, FaPlusSquare } from 'react-icons/fa'; // Exemple d'icônes

interface AccordionProps {
  loadData: () => void;
  loadChildren: () => void;
  loadDescendants: () => void;
}

// Le composant d'accordéon
const Accordion = ({ loadData, loadChildren, loadDescendants } : AccordionProps) => {
  const [loading, setLoading] = useState(false);

  // Gère le clic sur l'icône pour charger un élément seul
  const handleLoadData = async (e: { stopPropagation: () => void; }) => {
    // eslint-disable-next-line no-undef
    e.stopPropagation();
    setLoading(true);
    try {
      await loadData();
    } catch (error) {
      console.error('Erreur lors du chargement des données', error);
    }
    setLoading(false);
  };

  // Gère le clic sur l'icône pour charger un élément et ses enfants
  const handleLoadChildren = async (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setLoading(true);
    try {
      await loadChildren();
    } catch (error) {
      console.error('Erreur lors du chargement des enfants', error);
    }
    setLoading(false);
  };

  // Gère le clic sur l'icône pour charger un élément et toute sa descendance
  const handleLoadDescendants = async (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setLoading(true);
    try {
      await loadDescendants();
    } catch (error) {
      console.error('Erreur lors du chargement de la descendance', error);
    }
    setLoading(false);
  };

  return (
    <div className="flex-between ml-auto flex items-center justify-center">
      {/* Icône pour insérer un élément seul */}
      <WrapIcon bgColorHover="hover:bg-[#fff]" >
      <FaPlus size={12} onClick={(e:any) => handleLoadData(e)} className="h-full w-full p-[10px]" /> 
      </WrapIcon>

      {/* Icône pour insérer un élément et ses enfants */}
      <WrapIcon bgColorHover="hover:bg-[#fff]" >
      <FaPlusCircle size={12} onClick={(e: any) => handleLoadChildren(e)} className="h-full w-full p-[10px]" />
      </WrapIcon>

      {/* Icône pour insérer un élément et toute sa descendance */}
      <WrapIcon bgColorHover="hover:bg-[#fff]" >
      <FaPlusSquare size={12} onClick={(e: any) => handleLoadDescendants(e)} className="h-full w-full p-[10px]" />
      </WrapIcon>

      {/* Affichage du chargement */}
      {loading && <p>Chargement...</p>}
    </div>
  );
};

export default Accordion;

import React from 'react';
import { useState } from 'react'
import "../Collapse/Collapse.css"
import downArrow from "../Collapse/down-arrow.png"



function Collapse() {
    const [expandedItems, setExpandedItems] = useState([]);

    const handleToggle = (id) => {
        const newExpandedItems = [...expandedItems];
        const index = newExpandedItems.indexOf(id);
        if (index === -1) {
            newExpandedItems.push(id);
        } else {
            newExpandedItems.splice(index, 1);
        }
        setExpandedItems(newExpandedItems);
    };

    const isExpanded = (id) => expandedItems.includes(id);

    return (
        <div>
            {data.map(({ id, titre, texte }) => (
                <div key={id} className={`collapsible ${isExpanded(id) ? "expanded" : ""}`}>
                    <h2 onClick={() => handleToggle(id)}>
                        {titre}
                        <img src={isExpanded(id) ? downArrow : downArrow} alt="Flèche" />
                    </h2>
                    {isExpanded(id) && <p>{texte}</p>}
                </div>
            ))}
        </div>
    );
};

const data = [
    {
        id: '1',
        titre: 'Fiabilité',
        texte: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    },
    {
        id: '2',
        titre: 'Respect',
        texte: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'

    },
    {
        id: '3',
        titre: 'Service',
        texte: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question"

    },
    {
        id: '4',
        titre: 'Sécurité',
        texte: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]

export default Collapse;
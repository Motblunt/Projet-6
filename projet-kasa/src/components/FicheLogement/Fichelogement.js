import React from 'react';
import cardsData from '../Data/data.json';
import { useParams } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import '../../CSS/Fichelogement.css';
import TitleLocation from '../TitleLocation/TitleLocation';
import Host from '../Host/Host';
import TagsButton from '../TagsButton/TagsButton';
import RatingStar from '../RatingStar/RatingStar';
import Collapse from '../Collapse/Collapse'


const FicheLogement = () => {
  const { cardId } = useParams();
  const card = cardsData.find((card) => card.id === cardId);

  const description  = card.description;
	const equipments = card.equipments;

  return (
    <div>
      <Carousel images={card.pictures} />
      <div>

        <div className='div-wrapper'>
          <div className='title-tags'>
            <TitleLocation title={card.title} location={card.location} />
            <TagsButton tags={card.tags} />
          </div>
          <div className='flex-container'>
            <RatingStar rating={card.rating} />
            <Host host={card.host} />
          </div>
        </div>
        <div className="collapse-fl">
					<div className="item-collapse-fl">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="item-collapse-fl">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>

      </div>

    </div>
  );
};

export default FicheLogement;

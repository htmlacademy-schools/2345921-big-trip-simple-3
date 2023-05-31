import {description, cities} from './const';
import {getRandomId, getRandomArrayElement } from '../util';
import {generatePictures} from './picture';

const destinationsId = [];
const destinations = [];

const generateDestination = () => {
  let pointId = getRandomId();
  while (destinationsId.indexOf(pointId) >= 0) {
    pointId = getRandomId();
  }
  destinationsId.push(pointId);
  const descriptionPicture = getRandomArrayElement(description);
  const name = getRandomArrayElement(cities);
  const pictures = generatePictures();
  const destination = {
    pointId, descriptionPicture, name, pictures
  };
  destinations.push(destination);
  return pointId;
};

const getDestinationById = (id) => destinations.find((item)=>item.id === id);
const getCityPicById = (id) => destinations.find((destination) => destination.id === id).pictures.src;


export {generateDestination, getDestinationById,getCityPicById};

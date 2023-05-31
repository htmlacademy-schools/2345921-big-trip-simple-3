import Filters from './view/filters.js';
import {render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointModel from './model/point-model.js';

const main = document.querySelector('.page-body__page-main');
const container = main.querySelector('.trip-events');
const siteFilterElement = document.querySelector('.trip-controls__filters');
const pointsModel = new PointModel();
const boardPresenter = new BoardPresenter({boardContainer: container, pointsModel});

render(new Filters(), siteFilterElement);

boardPresenter.init();
// eslint-disable-next-line

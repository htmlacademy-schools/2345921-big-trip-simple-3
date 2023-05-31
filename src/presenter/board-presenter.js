import SortView from '../view/sorting';
import EventListView from '../view/event-list';
import EventItemView from '../view/event-item';
import EditFormView from '../view/edit-form';
import NewItemFormView from '../view/creation-form';
import { render } from '../render';

export default class BoardPresenter {
  eventListComponent = new EventListView();

  constructor({boardContainer, tripPointsModel}) {
    this.boardContainer = boardContainer;
    this.tripPointsModel = tripPointsModel;
  }

  init() {
    this.tripPoints = [...this.tripPointsModel.getTripPoints()];

    render(new SortView(), this.boardContainer);
    render(this.eventListComponent, this.boardContainer);

    render(new NewItemFormView(), this.eventListComponent.getElement());
    render(new EditFormView(), this.eventListComponent.getElement());

    for (let i = 0; i < this.tripPoints.length; i++) {
      render(new EventItemView({tripPoint: this.tripPoints[i]}), this.eventListComponent.getElement());
    }
  }
}

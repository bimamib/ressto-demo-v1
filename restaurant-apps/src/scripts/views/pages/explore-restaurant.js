import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const ExploreRestaurants = {
  async render() {
    return `
      <div class="content">
        <div class="explore">
          <h1 class="explore__label">Explore Restaurants</h1>
        </div>
        <div id="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.exploreRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      const restaurantListTemplate = createRestaurantListTemplate(restaurant);
      restaurantsContainer.innerHTML += restaurantListTemplate;
    });

    // TODO: tampilkan movies di dalam DOM
  },
};

export default ExploreRestaurants;

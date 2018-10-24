import tip1 from '../static/tip1.png';
import tip2 from '../static/tip2.png';
import tip3 from '../static/tip3.png';
import car1 from '../static/focus.png';
import car2 from '../static/skoda.png';
import car3 from '../static/civic.png';
import car4 from '../static/corsa.png';
import car5 from '../static/clio.png';
import car6 from '../static/polo.png';
import car7 from '../static/ibiza.png';
import car8 from '../static/i5.png';


export default class CarApi {
  static getTips() {
    return Promise.resolve(
      [
        {imageUrl: tip1, title: 'Our Buyers Check List'},
        {imageUrl: tip2, title: 'How To Spot a Fraud'},
        {imageUrl: tip3, title: 'Best Used Cars 2018'},
      ]
    );
  }

  static getDeals() {
    return Promise.resolve(
      [
        {title: 'Ford Focus', imageUrl: car1, tagText: '$18,000'},
        {title: 'Skoda Fabia', imageUrl: car2, tagText: '$16,000'},
        {title: 'Honda Civic', imageUrl: car3, tagText: '$19,000'},
        {title: 'Vauxhall Corsa', imageUrl: car4, tagText: '$16,500'},
        {title: 'Renault Clio', imageUrl: car5, tagText: '$14,000'},
        {title: 'Volkswagen Polo', imageUrl: car6, tagText: '$18,000'},
        {title: 'Seat Ibiza', imageUrl: car7, tagText: '$17,000'},
        {title: 'BMW i5', imageUrl: car8, tagText: '$20,000'}
      ]
    );
  }
}

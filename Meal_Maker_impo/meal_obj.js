const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string'){
      this._meal = mealToCheck;
     }
    },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number'){
      this._price = priceToCheck;
    } 
  },
  get todaySpecial() {
    if (this._meal && this._price){
      return 'Today\'s Special is ' + this._meal + ' for $'+ this._price;
    } else {
      return 'Meal or Price was not set correctly!';
    }
  }
};

menu.meal = 'Pasta';
menu.price = 20

menu.meal = 'pasta';
menu.price = 15;
console.log(menu._meal);
console.log(menu._price);
console.log(menu.todaySpecial);
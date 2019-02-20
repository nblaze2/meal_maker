const menu = {
  _courses:{
    appetizers:[],
    mains:[],
    desserts:[]
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn) {
    this._courses.appetizers;
  },
  get mains() {
    this._courses.mains;
  },
  set mains(mainIn) {
    this._courses.mains;
  },
  get desserts() {
    this._courses.desserts;
  },
  set desserts(dessertsIn) {
    this._courses.desserts;
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the price is $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'meatballs', 8.00);
menu.addDishToCourse('appetizers', 'shrimp cocktail', 12.00);
menu.addDishToCourse('mains', 'hamburger', 18.00);
menu.addDishToCourse('mains', 'chicken parm', 20.00);
menu.addDishToCourse('mains', 'osso bucco', 29.00);
menu.addDishToCourse('desserts', 'ice cream', 7.00);
menu.addDishToCourse('desserts', 'canolli', 6.00);
menu.addDishToCourse('desserts', 'brownie', 6.00);
const meal = menu.generateRandomMeal();
console.log(meal);

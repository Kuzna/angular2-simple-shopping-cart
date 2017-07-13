export class InMemoryDataService {
  createDb() {
    const donuts = [
      { id: 1, name: 'Blue moon sprinkle', price: 3.56, calories: 98, imgSrc: 'assets/images/ic_donut_blue_moon_sprinkle.png', description: '' },
      { id: 2, name: 'Butter nut', price: 2.5, calories: 98, imgSrc: 'assets/images/ic_donut_butter_nut.png', description: '' },
      { id: 3, name: 'Caviar strawberry', price: 2.86, calories: 99, imgSrc: 'assets/images/ic_donut_caviar_strawberry.png', description: '' },
      { id: 4, name: 'Dark chocolate sprinkle', price: 3.05, calories: 96, imgSrc: 'assets/images/ic_donut_dark_chocolate_sprinkle.png', description: '' },
      { id: 5, name: 'Green tea sprinkle', price: 3.22, calories: 104, imgSrc: 'assets/images/ic_donut_green_tea_sprinkle.png', description: '' },
      { id: 6, name: 'Lemon sprinkle', price: 2.75, calories: 103, imgSrc: 'assets/images/ic_donut_lemon_sprinkle.png', description: '' },
      { id: 7, name: 'Maple iced', price: 2.59, calories: 102, imgSrc: 'assets/images/ic_donut_maple_iced.png', description: '' },
      { id: 8, name: 'Raspberry', price: 2.63, calories: 101, imgSrc: 'assets/images/ic_donut_raspberry.png', description: '' },
      { id: 9, name: 'Strawberry sprinkle', price: 2.72, calories: 100, imgSrc: 'assets/images/ic_donut_strawberry_sprinkle.png', description: '' },
      { id: 10, name: 'Sugar pink', price: 2.49, calories: 100, imgSrc: 'assets/images/ic_donut_sugar_pink.png', description: '' },
      { id: 11, name: 'Vanilla iced', price: 2.47, calories: 110, imgSrc: 'assets/images/ic_donut_vanilla_iced.png', description: '' },
      { id: 12, name: 'Vanilla sprinkle', price: 2.57, calories: 120, imgSrc: 'assets/images/ic_donut_vanilla_sprinkle.png', description: '' }
    ];

    return { donuts: donuts };
  }
}

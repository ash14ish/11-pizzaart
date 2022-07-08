// Meal for 4 image
import m01 from "../asssets/m01.jpg";
import m02 from "../asssets/m02.jpg";
import m03 from "../asssets/m03.jpg";
import m04 from "../asssets/m04.jpg";
import m05 from "../asssets/m05.jpg";
import m06 from "../asssets/m06.jpg";

// Beverages Image
import bv01 from "../asssets/bv01.jpg";
import bv02 from "../asssets/bv02.webp";
import bv03 from "../asssets/bv03.webp";
import bv04 from "../asssets/bv04.jpg";
import bv05 from "../asssets/bv05.jpg";
import bv06 from "../asssets/bv06.jpg";

// Dessert Image

export const DUMMY_MEALS = [
  // Meal for 4

  {
    id: "m01",
    description:
      "Med Indi Tandoori Paneer + Peppy Paneer + 2 Garlic Bread +2 Pepsi",
    name: "Meal for 4: Indi Tandoori Paneer & Peppy Paneer Combo",
    price: 1090,
    type: "meal-for-4",
    recommended: true,
    newLaunch: true,
    bookmark: false,
    veg: true,
    img: m01,
  },

  {
    id: "m02",
    description: "Large Chicken Dominator + 2 Garlic Bread + 2 Pepsi",
    name: "Meal for 4: Chicken Dominator Combo",
    price: 1051,
    type: "meal-for-4",
    recommended: true,
    newLaunch: true,
    bookmark: false,
    veg: false,
    img: m02,
  },

  {
    id: "m03",
    description: "Med Farmhouse + Peppy Paneer + 2 Garlic Bread + 2 Pepsi",
    name: "Meal for 4: Farmhouse & Peppy Paneer Combo",
    price: 1050,
    type: "meal-for-4",
    recommended: false,
    newLaunch: true,
    bookmark: false,
    veg: true,
    img: m03,
  },

  {
    id: "m04",
    description: "Med Chicken Dominator + Med Nveg Supreme + 2 Garlic Bread",
    name: "Meal for 4: Chicken Dominator & Non-Veg Supreme Combo",
    price: 1210,
    type: "meal-for-4",
    recommended: false,
    newLaunch: true,
    bookmark: false,
    veg: false,
    img: m04,
  },

  {
    id: "m05",
    description: "Pan PM - Paneer & Onion, Onion, Golden Corn, Veg Loaded",
    name: "Meal for 4: Veg Pizza Mania Party Combo",
    price: 451,
    type: "meal-for-4",
    recommended: true,
    newLaunch: true,
    bookmark: false,
    veg: true,
    img: m05,
  },

  {
    id: "m06",
    description:
      "Pan Pm - Loaded NV, Pepper BBQ Chk, Chicken Sausage, Paneer & onion",
    name: "Meal for 4: Non-Veg Pizza Mania Party Combo",
    price: 516,
    type: "meal-for-4",
    recommended: true,
    newLaunch: false,
    bookmark: false,
    veg: false,
    img: m06,
  },

  // Veg Pizza

  {
    id: "vp01",
    description:
      "Loaded with a delicious creamy tomato pasta topping , green capsicum, crunchy red and yellow bell peppers",
    name: "Creamy Tomato Pasta Pizza - Veg",
    price: 459,
    type: "veg-pizza",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: true,
  },

  {
    id: "vp02",
    description: "Classic delight with 100% real mozzarella cheese",
    name: "Margherita",
    price: 239,
    type: "veg-pizza",
    recommended: true,
    newLaunch: false,
    bookmark: false,
    veg: true,
  },

  {
    id: "vp03",
    description:
      "A classic delight loaded with extra 100% real mozzarella cheese",
    name: "Double Cheese Margherita",
    price: 379,
    type: "veg-pizza",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: true,
  },

  {
    id: "vp04",
    description:
      "A crazy fusion like never before. A delicious fusion of corn stuffed paratha and cheesy pizza.",
    name: "Corn n Cheese Paratha Pizza",
    price: 179,
    type: "paratha-pizza",
    recommended: true,
    newLaunch: true,
    bookmark: false,
    veg: true,
  },

  {
    id: "vp05",
    description:
      "An epic fusion of paratha and pizza with melting cheese & soft paneer fillings to satisfy all your indulgent",
    name: "Paneer Paratha Pizza",
    price: 209,
    type: "paratha-pizza",
    recommended: true,
    newLaunch: true,
    bookmark: false,
    veg: true,
  },

  {
    id: "vp06",
    description:
      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
    name: "Farmhouse",
    price: 459,
    type: "veg-pizza",
    recommended: true,
    newLaunch: false,
    bookmark: false,
    veg: true,
  },

  {
    id: "vp07",
    description:
      "Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno",
    name: "Mexican Green Wave",
    price: 459,
    type: "veg-pizza",
    recommended: false,
    newLaunch: true,
    bookmark: false,
    veg: true,
  },

  {
    id: "vp08",
    description:
      "Sweet & Juicy Golden corn and 100% real mozzarella cheese in a delectable combination !",
    name: "Cheese n Corn",
    price: 379,
    type: "veg-pizza",
    recommended: true,
    newLaunch: false,
    bookmark: false,
    veg: true,
  },

  {
    id: "vp09",
    description:
      "Delectable combination of onion & capsicum, a veggie lovers pick",
    name: "Fresh Veggie",
    price: 379,
    type: "veg-pizza",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: true,
  },

  {
    id: "vp10",
    description:
      "Flavorful twist of spicy makhani sauce topped with paneer & capsicum",
    name: "Paneer Makhani",
    price: 549,
    type: "veg-pizza",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: true,
  },

  {
    id: "vp11",
    description:
      "It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum, red paprika & mint mayo",
    name: "Indi Tandoori Paneer",
    price: 549,
    type: "veg-pizza",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: true,
  },

  {
    id: "vp12",
    description: "A delectable combination of cheese and juicy tomato",
    name: "Cheese n Tomato",
    price: 379,
    type: "veg-pizza",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: true,
  },

  {
    id: "vp13",
    description:
      "Tangy & spicy achari flavours on a super cheesy onion pizza- as desi as it gets!",
    name: "Achari Do Pyaza",
    price: 329,
    type: "veg-pizza",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: true,
  },

  {
    id: "vp14",
    description:
      "Loaded with 1 Pound of Mozzarella and gooey Liquid Cheese on a Classic Large Pizza topped with a generous helping of herb sprinkle",
    name: "The Cheese Dominator",
    price: 629,
    type: "veg-pizza",
    recommended: true,
    newLaunch: true,
    bookmark: false,
    veg: true,
  },

  // Non-Veg Pizza

  {
    id: "nvp01",
    description:
      "Flavourful & meaty chicken keema paratha and goodness of cheesy pizza coming together in an epic crossover!",
    name: "Chicken Keema Paratha Pizza",
    price: 249,
    type: "paratha-pizza",
    recommended: true,
    newLaunch: true,
    bookmark: false,
    veg: false,
  },

  {
    id: "nvp02",
    description:
      "Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers",
    name: "The Chicken Dominator",
    price: 599,
    type: "non-veg-pizza",
    recommended: true,
    newLaunch: true,
    bookmark: false,
    veg: false,
  },

  {
    id: "nvp03",
    description:
      "Loaded to the Max with Chicken Tikka, Chicken Keema, Chicken Sausage and a double dose of grilled Chicken Rashers.",
    name: "Chicken Maximus",
    price: 699,
    type: "non-veg-pizza",
    recommended: false,
    newLaunch: true,
    bookmark: false,
    veg: false,
  },

  {
    id: "nvp04",
    description:
      "Loaded with 5 different Chicken toppings - grilled Chicken Rashers, Chicken Meatballs, Chicken Tikka,",
    name: "The 5 Chicken Feast Pizza",
    price: 699,
    type: "non-veg-pizza",
    recommended: true,
    newLaunch: true,
    bookmark: false,
    veg: false,
  },

  {
    id: "nvp05",
    description:
      "Relish the fusion of 5 of your favorite chicken toppings - Peri Peri Chicken, Chicken Pepperoni, Chicken Tikka,",
    name: "Indo Fusion Chicken Pizza",
    price: 699,
    type: "non-veg-pizza",
    recommended: false,
    newLaunch: true,
    bookmark: false,
    veg: false,
  },

  {
    id: "nvp06",
    description:
      "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
    name: "Chicken Pepperoni",
    price: 599,
    type: "non-veg-pizza",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: false,
  },

  {
    id: "nvp07",
    description:
      "Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken, peri-peri",
    name: "Non Veg Supreme",
    price: 629,
    type: "non-veg-pizza",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: false,
  },

  {
    id: "nvp08",
    description:
      "Grilled chicken rashers, peri-peri chicken, onion & capsicum, a complete fiesta",
    name: "Chicken Fiesta",
    price: 559,
    type: "non-veg-pizza",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: false,
  },

  {
    id: "nvp09",
    description: "Pepper barbecue chicken for that extra zing",
    name: "Pepper Barbecue Chicken",
    price: 449,
    type: "non-veg-pizza",
    recommended: true,
    newLaunch: false,
    bookmark: false,
    veg: false,
  },

  {
    id: "nvp10",
    description: "American classic! Spicy, herbed chicken sausage on pizza",
    name: "Chicken Sausage",
    price: 369,
    type: "non-veg-pizza",
    recommended: true,
    newLaunch: false,
    bookmark: false,
    veg: false,
  },

  {
    id: "nvp11",
    description: "Pepper Barbecue & Onion",
    name: "Pepper Barbecue & Onion",
    price: 449,
    type: "non-veg-pizza",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: false,
  },

  {
    id: "nvp12",
    description:
      "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
    name: "Indi Chicken Tikka",
    price: 629,
    type: "non-veg-pizza",
    recommended: false,
    newLaunch: true,
    bookmark: false,
    veg: false,
  },

  // Beverages

  {
    id: "bv01",
    description: "Sparkling and Refreshing Beverage",
    name: "Pepsi (500ml)",
    price: 60,
    type: "beverages",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: true,
    img: bv01,
  },

  {
    id: "bv02",
    description: "Refreshing clear drink with a natural lemon flavor",
    name: "7up (500ml)",
    price: 60,
    type: "beverages",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: true,
    img: bv02,
  },

  {
    id: "bv03",
    description: "Delicious Orange Flavoured beverage",
    name: "Mirinda (500ml)",
    price: 60,
    type: "beverages",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: true,
    img: bv03,
  },

  {
    id: "bv04",
    description: "Great Mango Taste",
    name: "Slice (350ml)",
    price: 50,
    type: "beverages",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: true,
    img: bv04,
  },

  {
    id: "bv05",
    description: "Pure lemon flavoured beverage",
    name: "Nimbooz (350ml)",
    price: 60,
    type: "beverages",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: true,
    img: bv05,
  },

  {
    id: "bv06",
    description: "Packaged Drinking Water",
    name: "Bailley One (500ml)",
    price: 20,
    type: "beverages",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: true,
    img: bv06,
  },

  // Dessert

  {
    id: "dsrt01",
    description:
      "Chocolate lovers delight! Indulgent, gooey molten lava inside chocolate cake",
    name: "Choco Lava Cake",
    price: 109,
    type: "dessert",
    recommended: true,
    newLaunch: false,
    bookmark: false,
    veg: true,
  },

  {
    id: "dsrt02",
    description: "Sweet temptation! Butterscotch flavored mousse",
    name: "Butterscotch Mousse Cake",
    price: 109,
    type: "dessert",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: true,
  },

  {
    id: "dsrt03",
    description:
      "Sweet Temptation! Hot Chocolate Brownie drizzled with chocolate fudge sauce",
    name: "Brownie Fantasy",
    price: 79,
    type: "dessert",
    recommended: false,
    newLaunch: false,
    bookmark: false,
    veg: true,
  },

  {
    id: "dsrt04",
    description:
      "A truly indulgent experience with sweet and rich red velvet cake on a creamy cheese flavoured base to give a burst of flavour in every bite!",
    name: "Red Velvet Lava Cake",
    price: 139,
    type: "dessert",
    recommended: false,
    newLaunch: true,
    bookmark: false,
    veg: true,
  },
];

import hero1 from "./hero1.png";
import hero2 from "./hero2.png";
import hero3 from "./hero3.png";
import hero4 from "./hero4.png";
import hero5 from "./hero5.png";
import category1 from "./category1.png";
import category2 from "./category2.png";
import category3 from "./category3.png";
import category4 from "./category4.png";
import product1 from "./product1.png";
import product2 from "./product2.png";
import product3 from "./product3.png";
import product4 from "./product4.png";

export const assets = {
      hero1,
      hero2,
      hero3,
      hero4,
      hero5,
};

export const slides = [
      {
            image: assets.hero1,
            title: "An Evening Worth Remembering",
            description:
                  "Gather your loved ones for a dinner crafted with care.",
      },
      {
            image: assets.hero2,
            title: "Fresh. Bold. Unforgettable.",
            description:
                  "Every bite made with the finest ingredients and true passion.",
      },
      {
            image: assets.hero3,
            title: "End on a Sweet Note",
            description:
                  "Indulge in our handcrafted desserts, made fresh daily.",
      },
      {
            image: assets.hero4,
            title: "Pure & Farm Fresh",
            description: "Sourced from trusted farms, served at their finest.",
      },
      {
            image: assets.hero5,
            title: "Fuel Your Passion",
            description: "Nutritious meals designed to power your lifestyle.",
      },
];

export const categories = [
      {
            category: "Fast Food",
            image: category1,
      },
      {
            category: "Healty Food",
            image: category2,
      },
      {
            category: "Dessert",
            image: category3,
      },
      {
            category: "Milk Products",
            image: category4,
      },
];

export const featuredDishes = [
      {
            id: 1,
            name: "Butter Chicken",
            category: "Main Course",
            price: "₹349",
            desc: "Tender chicken in a rich, creamy tomato-based sauce.",
            image: product4,
            tag: "Chef's Choice",
      },
      {
            id: 2,
            name: "Paneer Tikka",
            category: "Starters",
            price: "₹249",
            desc: "Smoky, spiced cottage cheese grilled to perfection.",
            image: product3,
            tag: "Most Loved",
      },
      {
            id: 3,
            name: "Dal Makhani",
            category: "Main Course",
            price: "₹229",
            desc: "Slow-cooked black lentils in butter and cream.",
            image: product1,
            tag: "Must Try",
      },
      {
            id: 4,
            name: "Gulab Jamun",
            category: "Desserts",
            price: "₹149",
            desc: "Soft milk dumplings soaked in rose-flavored sugar syrup.",
            image: product2,
            tag: "Sweet Pick",
      },
];

export const menuData = {
      categories: [
            { id: "starters", label: "Starters", icon: "🥗" },
            { id: "mains", label: "Main Course", icon: "🍛" },
            { id: "breads", label: "Breads", icon: "🫓" },
            { id: "desserts", label: "Desserts", icon: "🍮" },
            { id: "drinks", label: "Drinks", icon: "🥤" },
      ],
      items: {
            starters: [
                  {
                        id: 1,
                        name: "Seekh Kebab",
                        desc: "Spiced minced lamb skewers, mint chutney",
                        price: 320,
                        badge: "Chef's Pick",
                        veg: false,
                  },
                  {
                        id: 2,
                        name: "Paneer Tikka",
                        desc: "Marinated cottage cheese, capsicum & onion, tandoor-grilled",
                        price: 280,
                        badge: "Bestseller",
                        veg: true,
                  },
                  {
                        id: 3,
                        name: "Dahi Puri",
                        desc: "Crisp puris, spiced yogurt, tamarind & coriander chutney",
                        price: 180,
                        badge: "",
                        veg: true,
                  },
                  {
                        id: 4,
                        name: "Chicken 65",
                        desc: "Deep-fried chicken, curry leaves, green chillies",
                        price: 300,
                        badge: "Spicy",
                        veg: false,
                  },
            ],
            mains: [
                  {
                        id: 5,
                        name: "Dal Makhani",
                        desc: "Slow-cooked black lentils, butter, cream, garam masala",
                        price: 260,
                        badge: "Bestseller",
                        veg: true,
                  },
                  {
                        id: 6,
                        name: "Butter Chicken",
                        desc: "Tender chicken in rich tomato-butter gravy",
                        price: 380,
                        badge: "Chef's Pick",
                        veg: false,
                  },
                  {
                        id: 7,
                        name: "Palak Paneer",
                        desc: "Fresh spinach, cottage cheese, mild spices",
                        price: 280,
                        badge: "",
                        veg: true,
                  },
                  {
                        id: 8,
                        name: "Rogan Josh",
                        desc: "Slow-braised lamb, Kashmiri spices, saffron",
                        price: 420,
                        badge: "Premium",
                        veg: false,
                  },
                  {
                        id: 9,
                        name: "Kadai Mushroom",
                        desc: "Stir-fried mushrooms, bell peppers, kadai masala",
                        price: 260,
                        badge: "",
                        veg: true,
                  },
            ],
            breads: [
                  {
                        id: 10,
                        name: "Butter Naan",
                        desc: "Soft leavened bread, fresh butter",
                        price: 60,
                        badge: "",
                        veg: true,
                  },
                  {
                        id: 11,
                        name: "Garlic Naan",
                        desc: "Tandoor naan, roasted garlic, coriander",
                        price: 80,
                        badge: "Bestseller",
                        veg: true,
                  },
                  {
                        id: 12,
                        name: "Laccha Paratha",
                        desc: "Flaky whole-wheat layered bread",
                        price: 70,
                        badge: "",
                        veg: true,
                  },
                  {
                        id: 13,
                        name: "Missi Roti",
                        desc: "Spiced besan flatbread, ajwain, ghee",
                        price: 65,
                        badge: "",
                        veg: true,
                  },
            ],
            desserts: [
                  {
                        id: 14,
                        name: "Gulab Jamun",
                        desc: "Soft milk solids dumplings, rose-cardamom syrup",
                        price: 120,
                        badge: "Bestseller",
                        veg: true,
                  },
                  {
                        id: 15,
                        name: "Ras Malai",
                        desc: "Chenna patties in chilled sweetened milk, pistachio",
                        price: 150,
                        badge: "Chef's Pick",
                        veg: true,
                  },
                  {
                        id: 16,
                        name: "Gajar Halwa",
                        desc: "Slow-cooked carrot pudding, khoya, dry fruits",
                        price: 140,
                        badge: "",
                        veg: true,
                  },
            ],
            drinks: [
                  {
                        id: 17,
                        name: "Mango Lassi",
                        desc: "Chilled yogurt, Alphonso mango, cardamom",
                        price: 120,
                        badge: "Seasonal",
                        veg: true,
                  },
                  {
                        id: 18,
                        name: "Masala Chai",
                        desc: "Ginger, cardamom, cinnamon, fresh milk",
                        price: 60,
                        badge: "",
                        veg: true,
                  },
                  {
                        id: 19,
                        name: "Rose Sharbat",
                        desc: "Rose syrup, basil seeds, chilled milk",
                        price: 90,
                        badge: "",
                        veg: true,
                  },
                  {
                        id: 20,
                        name: "Fresh Lime Soda",
                        desc: "Squeezed lime, soda water, black salt",
                        price: 80,
                        badge: "",
                        veg: true,
                  },
            ],
      },
};
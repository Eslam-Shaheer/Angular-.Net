const productList = [
  {
    id: 1,
    name: 'Odense 8-Seater Top Dining Table',
    price: 21500,
    quantity: 0,
    imgURL:
      'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    categoryID: 1,
    matrial: 'Engineered Wood',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
  {
    id: 5,
    name: 'Trixia 4-Seater Glass Dining Table',
    price: 30000,
    quantity: 8,
    imgURL:
      'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    categoryID: 1,
    matrial: 'Metal',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
  {
    id: 25,
    name: 'Gasha Marble Top Side Table',
    price: 14000,
    quantity: 10,
    imgURL:
      'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    categoryID: 1,
    matrial: 'Metal',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
  {
    id: 7,
    name: 'Ventura Fabric Dining Chair',
    price: 1500,
    quantity: 2,
    imgURL:
      'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    categoryID: 2,
    matrial: 'Upholstered Seating',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
  {
    id: 17,
    name: 'Ventura Fabric Dining Chair',
    price: 1500,
    quantity: 2,
    imgURL:
      'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    categoryID: 2,
    matrial: 'Upholstered Seating',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
  {
    id: 9,
    name: 'Boston Study Chair',
    price: 1000,
    quantity: 10,
    imgURL:
      'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    categoryID: 2,
    matrial: 'Upholstered Seating',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
  {
    id: 10,
    name: 'Coby Extendable TV Unit',
    price: 13000,
    quantity: 0,
    imgURL:
      'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    categoryID: 3,
    matrial: 'Wood',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
  {
    id: 15,
    name: 'Accent TV Unit',
    price: 36999,
    quantity: 4,
    imgURL:
      'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    categoryID: 3,
    matrial: 'MDF',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
  {
    id: 55,
    name: 'Plymouth TV Unit',
    price: 36999,
    quantity: 1,
    imgURL:
      'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    categoryID: 3,
    matrial: 'wood',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
];

export default productList;

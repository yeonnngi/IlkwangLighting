//productList라는 데이터 객체를 만들어 끌어가는 것
//id는 데이터 배열을 구분해줌

const shoppingList = [{
    id: "ik01",
    name: "IK 테이블 스탠드 SNOWMAN22 SOLID Table Stand",
    price: "230,000원",
    best: "best",
    src: "./images/product_01.jpg"
  },
  {
    id: "ik02",
    name: "IK 시리즈 WORKSHOP28 Pendant",
    price: "150,000원",
    best: "false",
    src: "./images/product_02.jpg"
  },
  {
    id: "ik03",
    name: "IK 시리즈 TRIANGLE120 A Pendant",
    price: "390,000원",
    best: "false",
    src: "./images/product_03.jpg"
  },
  {
    id: "ik04",
    name: "IK 시리즈 SNOWBALL22 SOLID Table Stand",
    price: "210,000원",
    best: "best",
    src: "./images/product_04.jpg"
  },
  {
    id: "ik05",
    name: "IK 시리즈 FONDUE16 Table Stand KYOBO BOOK Edition",
    price: "280,000원",
    best: "best",
    src: "./images/product_05.jpg"
  },
  {
    id: "ik06",
    name: "IK 시리즈 TEACUP 4A Table Stand",
    price: "75,000원",
    best: "false",
    src: "./images/product_06.jpg"
  },
  {
    id: "ik07",
    name: "IK 시리즈 SNOWMAN22 Table Stand",
    price: "220,000원",
    best: "false",
    src: "./images/product_07.jpg"
  },
  {
    id: "ik08",
    name: "IK 시리즈 FROG22 Floor Stand",
    price: "270,000원",
    best: "best",
    src: "./images/product_08.jpg"
  },
  {
    id: "ik09",
    name: "IK 시리즈 FROG38 Pendant Burgundy",
    price: "120,000원",
    best: "false",
    src: "./images/product_09.jpg"
  },
  {
    id: "ik10",
    name: "IK 시리즈 ACORN22 Floor Stand",
    price: "270,000원",
    best: "false",
    src: "./images/product_010.jpg"
  },
  {
    id: "ik11",
    name: "IK 시리즈 WOOD3 Table Stand Silver",
    price: "55,000원",
    best: "false",
    src: "./images/product_011.jpg"
  },
  {
    id: "ik12",
    name: "IK 시리즈 PINOCCHIO120 B Pendant",
    price: "280,000원",
    best: "false",
    src: "./images/product_012.jpg"
  },
  {
    id: "ik13",
    name: "IK 시리즈 SWAN2 Table Stand",
    price: "240,000원",
    best: "false",
    src: "./images/product_013.jpg"
  },
  {
    id: "ik14",
    name: "IK 시리즈 WORKSHOP38 Pendant",
    price: "190,000원",
    best: "best",
    src: "./images/product_014.jpg"
  },
  {
    id: "ik15",
    name: "IK 시리즈 WORKSHOP28 Pendant",
    price: "150,000원",
    best: "false",
    src: "./images/product_015.jpg"
  },
  {
    id: "ik16",
    name: "IK 시리즈 SWAN2 Floor Stand",
    price: "340,000원",
    best: "false",
    src: "./images/product_016.jpg"
  },
  {
    id: "ik17",
    name: "IK 시리즈 CANDLE9 Table Stand Mint",
    price: "55,000원",
    best: "false",
    src: "./images/product_017.jpg"
  },
  {
    id: "ik18",
    name: "IK 시리즈 APOLLO22 Table Stand",
    price: "340,000원",
    best: "false",
    src: "./images/product_018.jpg"
  },
  {
    id: "ik19",
    name: "IK 시리즈 SATURN55 SMART Pendant White",
    price: "240,000원",
    best: "false",
    src: "./images/product_019.jpg"
  },
  {
    id: "ik20",
    name: "IK 시리즈 TALLBOY16 Table Stand",
    price: "180,000원",
    best: "false",
    src: "./images/product_020.jpg"
  },
  {
    id: "ik21",
    name: "IK 시리즈 SNOWBALL22 Table Stand",
    price: "200,000원",
    best: "false",
    src: "./images/product_021.jpg"
  },
  {
    id: "ik22",
    name: "IK 시리즈 FROG22 Table Stand Butter",
    price: "160,000원",
    best: "false",
    src: "./images/product_022.jpg"
  },
  {
    id: "ik23",
    name: "IK 시리즈 ACORN22 Table Stand White Edition",
    price: "170,000원",
    best: "false",
    src: "./images/product_023.jpg"
  },
  {
    id: "ik24",
    name: "IK 시리즈 CANDLE9 Table Stand Ivory & Green",
    price: "550,000원",
    best: "false",
    src: "./images/product_024.jpg"
  },
  {
    id: "ik25",
    name: "IK 시리즈 SWAN Table Stand ODENSE Edition",
    price: "240,000원",
    best: "false",
    src: "./images/product_025.jpg"
  },
  {
    id: "ik26",
    name: "IK 시리즈 LANDSCAPE68 Table Stand Industrial Gray",
    price: "890,000원",
    best: "false",
    src: "./images/product_026.jpg"
  },
  {
    id: "ik27",
    name: "IK 시리즈 TEACUP 4R Table Stand",
    price: "75,000원",
    best: "false",
    src: "./images/product_027.jpg"
  },
  {
    id: "ik28",
    name: "IK 시리즈 WOOD2 SHADE Table Stand Gold & Green",
    price: "65,000원",
    best: "false",
    src: "./images/product_028.jpg"
  },
  {
    id: "ik29",
    name: "IK 시리즈 TEACUP R Table Stand",
    price: "75,000원",
    best: "false",
    src: "./images/product_029.jpg"
  },
  {
    id: "ik30",
    name: "IK 시리즈 ACORN38 Floor Stand",
    price: "310,000원",
    best: "false",
    src: "./images/product_030.jpg"
  },
  {
    id: "ik31",
    name: "IK 시리즈 FROG22 Pendant 5Colors",
    price: "95,000원",
    best: "false",
    src: "./images/product_031.jpg"
  },
  {
    id: "ik32",
    name: "IK 시리즈 NEST25 Pendant 2Colors",
    price: "120,000원",
    best: "false",
    src: "./images/product_032.jpg"
  },
  {
    id: "ik33",
    name: "IK 시리즈 WOOD1 Table Stand",
    price: "35,000원",
    best: "false",
    src: "./images/product_033.jpg"
  },
  {
    id: "ik34",
    name: "IK 시리즈 ACORN22 Pendant 5Colors",
    price: "95,000원",
    best: "false",
    src: "./images/product_035.jpg"
  },
  {
    id: "ik35",
    name: "IK 시리즈 SNOWBALL22 Floor Stand 3Colors",
    price: "320,000원",
    best: "false",
    src: "./images/product_034.jpg"
  },
  {
    id: "ik36",
    name: "IK 시리즈 MAGRITTE40 Pendant 4Colors",
    price: "380,000원",
    best: "false",
    src: "./images/product_036.jpg"
  },
  {
    id: "ik37",
    name: "IK 시리즈 SLOPE45 SMART Pendant 3Colors",
    price: "290,000원",
    best: "false",
    src: "./images/product_037.jpg"
  },
  {
    id: "ik38",
    name: "IK 시리즈 ACORN38 Pendant 5Colors",
    price: "120,000원",
    best: "false",
    src: "./images/product_039.jpg"
  },
  {
    id: "ik39",
    name: "IK 시리즈 MAGRITTE25 Pendant 4Colors",
    price: "280,000원",
    best: "false",
    src: "./images/product_038.jpg"
  },
  {
    id: "ik40",
    name: "IK 시리즈 WOOD2 Table Stand 2Colors",
    price: "55,000원",
    best: "false",
    src: "./images/product_040.jpg"
  },
]

export default shoppingList
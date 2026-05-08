const products = [
  {
    id: 1,
    name: "Luxury Leather Bag",
    price: 120,
    description: "Premium handcrafted leather bag.",
    category: "Fashion",
    image_url:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGx1eHVyeSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 200,
    description: "Noise cancelling headphones.",
    category: "Electronics",
    image_url:
      "https://images.unsplash.com/photo-1599855129460-58c62b60e3df?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWRzZXR8ZW58MHx8MHx8fDA%3D",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Smart Phone",
    price: 150,
    description: "Best in class smartphone with great features.",
    category: "Electronics",
    image_url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Bed Stand Set",
    price: 500,
    description: "Elegant bed stand set for your bedroom.",
    category: "Home",
    image_url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Sneakers",
    price: 90,
    description: "Trendy everyday sneakers.",
    category: "Fashion",
    image_url:
      "https://d21d281c1yd2en.cloudfront.net/media/product_images/womens-adidas-sneakers-premium-quality-elegant-long-lasting-chic-trendy-bdbd-1280x1280.jpeg",
    rating: 4.2,
  },
  {
    id: 6,
    name: "Summer dress",
    price: 150,
    description: "Best for summer.",
    category: "Fashion",
    rating: 5.0,
    image_url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  },

  {
    id: 7,
    name: "Stylish Sofa Chair",
    price: 49.997896,
    rating: 3,
    category: "Home",
    reviews: 12,
    image_url: "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
    description:
      "Comfortable and stylish sofa chair with a modern design. Perfect for adding a touch of elegance to your living room or office space. Made with high-quality materials for durability and long-lasting comfort.",
  },
  {
    id: 8,
    name: "Non-Stick Cookware Set",
    price: 89.99,
    rating: 4.5,
    category: "Kitchen",
    reviews: 89,
    emoji: "\u{1F373}",
    description:
      "Complete 5-piece non-stick cookware set including frying pan, saucepan, and stockpot. Features heat-resistant handles and dishwasher-safe design for easy cleanup.",
    stock: 8,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0Lbfqzp8so9T-Fgaz7498JvSMHD6rrSmbA&s",
  },
  {
    id: 9,
    name: "Cozy Blanket",
    price: 90,
    rating: 4,
    category: "Home",
    reviews: 200,
    description:
      "Snuggle up with this cozy blanket, made from soft and warm materials. Ideal for chilly evenings or adding a touch of comfort to your living space.",
    image_url:
      "https://m.media-amazon.com/images/I/71qcM8S0YwL._AC_UF894,1000_QL80_.jpg",
    stock: 42,
  },
  {
    id: 10,
    name: "Garden Trowel Set",
    price: 24.99,
    rating: 4.5,
    category: "Garden",
    reviews: 78,
    emoji: "\u{1F331}",
    description:
      "Durable stainless steel trowel set for all your gardening needs. Includes 3 sizes, ergonomic handles, and rust-resistant coating for long-lasting use.",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-6mUsp1tFaEi737hB7jTaYsSmQR1umi5Xg&s",
    stock: 25,
  },
  {
    id: 11,
    name: "Raised Garden Bed",
    price: 1000,
    rating: 4,
    category: "Garden",
    reviews: 45,
    emoji: "\u{1FAB4}",
    description:
      "Spacious raised garden bed made from weather-resistant cedar wood. Easy to assemble and perfect for growing vegetables, herbs, or flowers.",
    badge: "New",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNGLPG4pNavFI_Sr5KKxXeCAj_efsqHxo4A&s",
    stock: 5,
  },
  {
    id: 12,
    name: "Ballpoint Pen Set",
    price: 12.99,
    rating: 4.2,
    category: "Stationery",
    reviews: 312,
    description:
      "Smooth-writing ballpoint pens in assorted colors. Pack of 12, ideal for everyday writing, note-taking, and creative projects.",
    image_url:
      "https://mrpen.com/cdn/shop/files/w1-6_da131613-8f20-4c77-872f-3eecec16c64d.jpg?v=1750100132",
    stock: 10,
  },
  {
    id: 13,
    name: "Female Denims Jacket",
    price: 150,
    rating: 4.7,
    category: "Clothing",
    reviews: 156,
    description:
      "Prefect Female Denim Jacket with a relaxed fit and button-front closure. Versatile enough for casual outings or layering in cooler weather.",
    badge: "Bestseller",
    image_url:
      "https://image.made-in-china.com/202f0j00sZelVUHPagrR/High-Quality-Blue-Oversized-Long-Denim-Jackets-Distressed-Womens-Jean-Jacket-Wholesale-Denim-Jackets.webp",
    stock: 20,
  },
  {
    id: 14,
    name: "Classic Vinatge",
    price: 180,
    rating: 4.7,
    category: "Clothing",
    reviews: 156,
    description:
      "Classic Vinatge with a relaxed fit and button-front closure. Versatile enough for casual outings or layering in cooler weather.",
    badge: "Bestseller",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48yBLvXQqbzt1J68o1ne90lvgU9kqCFtZhA&s",
    stock: 20,
  },
  {
    id: 15,
    name: "Floral Summer Dress",
    price: 44.99,
    rating: 4.3,
    category: "Apparel",
    reviews: 203,
    description:
      "Light and breezy floral dress perfect for warm days. Features a flattering A-line silhouette, adjustable straps, and a vibrant print.",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kKAce5OoM0B_9MuI4R9xjoNWMJes7AJjDw&s",
    stock: 30,
  },
  {
    id: 16,
    name: "Plain white tee",
    price: 44.99,
    rating: 4.3,
    category: "Fashion ",
    reviews: 213,
    description:
      "Thick and Easy to style plain white tee. Features a flattering A-line silhouette, adjustable straps, and a vibrant print.",
    stock: 35,
    image_url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 17,
    name: "Sports Canvas",
    price: 120,
    description: "High quality sports canvas for all your athletic needs.",
    category: "Fashion",
    image_url:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    rating: 4.5,
  },
  {
    id: 18,
    name: "Modern Chair",
    price: 600,
    description: "High quality sports canvas for all your athletic needs.",
    category: "Fashion",
    image_url:
      "https://brabbu.com/blog/wp-content/uploads/2021/01/Modern-Designed-Armchairs-Top-20-of-Timeless-Designs-for-Every-Decor.jpg",
    rating: 4.5,
  },
  {
    id: 19,
    name: "Elegant Lamp",
    price: 80,
    description: "Elegant lamp to brighten up your space.",
    category: "Home",
    image_url:
      "https://newportlampandshade.com/cdn/shop/articles/Scalloped-Lampshades-4.jpg?v=1727574865&width=1500",
    rating: 4.2,
  },
  {
    id: 20,
    name: "Apple Watch",
    price: 250,
    description: "Stay connected with this stylish smart watch.",
    category: "Electronics",
    image_url:
      "https://www.apple.com/assets-www/en_WW/watch/og/watch_og_1ff2ee953.png",
    rating: 4.7,
  },
  {
    id: 21,
    name: "Designer Sunglasses",
    price: 150,
    description: "Protect your eyes in style with these designer sunglasses.",
    category: "Fashion",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdHMgqBG8WMHgi2eZzY601G7a_HY9C2Jaiw&s",
    rating: 4.3,
  },
  {
    id: 22,
    name: "Bluetooth Speaker",
    price: 120,
    description: "Portable Bluetooth speaker with excellent sound quality.",
    category: "Electronics",
    image_url:
      "https://www.sencor.com/getmedia/6770caad-d0be-4d0d-b5f0-01bbc4c1c555/35059169.jpg.aspx?width=2100&height=2100&ext=.jpg",
    rating: 4.6,
  },
  {
    id: 23,
    name: "Coffee Maker",
    price: 80,
    description:
      "Brew the perfect cup of coffee with this easy-to-use coffee maker.",
    category: "Home",
    image_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1721863797-cuisinart-coffee-center-barista-bar-4-in-1-coffeemaker-wit-o.jpg?crop=1xw:1xh;center,top&resize=980:*",
  },
  {
    id: 24,
    name: "Fitness Tracker",
    price: 100,
    description: "Track your fitness goals with this sleek fitness tracker.",
    category: "Electronics",
    image_url:
      "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1862295.jpg",
    rating: 4.4,
  },
  {
    id: 25,
    name: "Leather Wallet",
    price: 60,
    description: "Classic leather wallet with multiple compartments.",
    category: "Fashion",
    image_url:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/4932814/1.jpg?2873",
    rating: 4.5,
  },
  {
    id: 26,
    name: "Smart TV",
    price: 400,
    description: "Enjoy your favorite shows on this high-definition smart TV.",
    category: "Electronics",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2GAEv2BeZxDOAVaJZ2KF-YKarCTdaaZAyw&s",
    rating: 4.7,
  },
  {
    id: 27,
    name: "Stylish Backpack",
    price: 70,
    description: "Durable and stylish backpack for everyday use.",
    category: "Fashion",
    image_url:
      "https://i5.walmartimages.com/seo/Small-Fashionable-Backpack-for-Women-Mini-Black-Quilted-Fashion-Backpacks-Purse_46a0722c-c367-463b-9a8b-7183416a2799.65c3b9e4f052012038dc3b9b9b572b43.jpeg",
    rating: 4.2,
  },
  {
    id: 28,
    name: "Wireless Earbuds",
    price: 80,
    description: "Compact wireless earbuds with great sound quality.",
    category: "Electronics",
    image_url:
      "https://m.media-amazon.com/images/I/71exNLc-CnL._AC_SL1500_.jpg",
    rating: 4.5,
  },
  {
    id: 29,
    name: "Standing Fan",
    price: 60,
    description: "Keep cool with this powerful standing fan.",
    category: "Home",
    image_url:
      "https://i5.walmartimages.com/seo/Simple-Deluxe-18-inch-3-Speed-Pedestal-Fan_be244d15-2f81-4f1b-b934-60298a34a063.5c201c76862e7e99800e5f14ebe1000e.jpeg",
    rating: 4.3,
  },
  {
    id: 30,
    name: "Yoga Mat",
    price: 40,
    description: "Non-slip yoga mat for all your fitness needs.",
    category: "Fitness",
    image_url:
      "https://cdn.thewirecutter.com/wp-content/media/2024/07/yoga-mat-2048px-1629-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024",
    rating: 4.4,
  },
  {
    id: 31,
    name: "Electric Kettle",
    price: 50,
    description: "Boil water quickly with this efficient electric kettle.",
    category: "Home",
    image_url:
      "https://hendi.xcdn.nl/hendi/images/209981_OBW_2021_03_IMGP0065.jpg?xv=2&f=att:1/raw:1",
    rating: 4.5,
  },
  {
    id: 32,
    name: "Gaming Mouse",
    price: 70,
    description: "Precision gaming mouse with customizable buttons.",
    category: "Electronics",
    image_url:
      "https://i5.walmartimages.com/seo/TSV-RGB-Gaming-Mouse-Wired-USB-Computer-Mice-PC-Gaming-Mice-Ergonomic-Optical-Mice-4-Adjustable-DPI-RGB-Backlit-LED-Desktop-Laptop-Windows-Mac-Vista_a9adecbf-e701-4847-a056-76072a1e8f3a.f4c121938dc6aff1ae6239569016e844.jpeg",
    rating: 4.6,
  },
  {
    id: 33,
    name: "Designers Heels",
    price: 30,
    description: "Elegant designer heels for special occasions.",
    category: "Fashion",
    image_url:
      "https://i0.wp.com/img.shopstyle-cdn.com/sim/bf/fd/bffdd83bf29a5ae6eae12ed14f099597_best/saint-laurent-opyum-110-crystal-embellished-satin-sandals-black.jpg?w=1200&ssl=1",
    rating: 4.3,
  },
  {
    id: 34,
    name: "Portable Charger",
    price: 25,
    description: "Compact portable charger for on-the-go power.",
    category: "Electronics",
    image_url:
      "https://www.telegraph.co.uk/content/dam/recommended/2025/06/12/TELEMMGLPICT000428394698_17497370956410_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpeg?imwidth=350",
    rating: 4.4,
  },
  {
    id: 35,
    name: "Air Purifier",
    price: 150,
    description: "Improve air quality with this efficient air purifier.",
    category: "Home",
    image_url:
      "https://s1.kaercher-media.com/mam/10248120/mainproduct/86239/d3.jpg",
    rating: 4.5,
  },
  {
    id: 36,
    name: "Designer Tote Bag",
    price: 200,
    description: "Spacious designer tote bag for everyday use.",
    category: "Fashion",
    image_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1703182955-best-designer-tote-bags-2024-louis-vuitton-neverfull-6584822b60e48.png?crop=1xw:0.995243757431629xh;center,top&resize=980:*",
    rating: 4.7,
  },
  {
    id: 37,
    name: "Iphone 16 pouch case",
    price: 100,
    description: "Best for your phone protection",
    category: "Electronics",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaempXb4Q0Vo96nRKyGCEQiH-WPNd2N3EP4A&s",
    rating: 5.0,
  },
  {
    id: 38,
    name: "Home Theater",
    price: 700,
    description:
      " Experience immersive sound with this high-quality home theater system.",
    category: "Home",
    image_url:
      "https://www.gde.ng/public/uploads/images/18-10-2025/68f39ad7e91ba.jpeg",
    rating: 4.8,
  },
  {
    id: 39,
    name: "Necklace",
    price: 30,
    description: "Necklace to add a touch of elegance to your look.",
    category: "Fashion",
    image_url:
      "https://www.byrdie.com/thmb/3Yj7g2ZrAa3vDXGCPXTUcd6t0YU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/449202075_1743258642874140_2572050865349522053_n-edfb8893622648c994b05b664c182750.jpg",
    rating: 4.7,
  },
  {
    id: 40,
    name: "Bracelets",
    price: 50,
    description:
      " Beautiful bracelets to add a touch of elegance to your look.",
    category: "Fashion",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiED0ktx6f24ZtZdvJXxBtqyddgIOrcMfTNA&s",
    rating: 4.5,
  },
  {
    id: 41,
    name: "Laptop",
    price: 400,
    description: " High performance laptop for work and entertainment.",
    category: "Electronics",
    image_url:
      "https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
    rating: 4.9,
  },
  {
    id: 42,
    name: "Parlour rug",
    price: 200,
    description: " Beautiful parlour rug to enhance your home decor.",
    category: "Home",
    image_url:
      "https://pictures-nigeria.jijistatic.net/155096558_NjIwLTYyMC00YzYyNTA0NTk2.webp",
    rating: 4.0,
  },
  {
    id: 43,
    name: "Gold Anklet",
    price: 80,
    description:
      " Beautiful gold anklet to add a touch of elegance to your look.",
    category: "Fashion",
    image_url:
      "https://www.aquae-jewels.com/wp-content/uploads/2018/05/356A1496S-2-1024x1024.jpg",
  },
  {
    id: 44,
    name: "Curtains",
    price: 150,
    description: " Beautiful curtains to enhance your home decor.",
    category: "Home",
    image_url:
      "https://i.pinimg.com/236x/8c/6a/45/8c6a45409f5aa3c03eb522634113a3bd.jpg",
    rating: 4.2,
  },
  {
    id: 45,
    name: "Center Table",
    price: 100,
    description: " Elegant center table to enhance your living room decor.",
    category: "Home",
    image_url:
      "https://www.eunicon.com.ng/cdn/shop/products/from-895-99-modern-round-gold-gray-nesting-coffee-table-with-shelf-tempered-glass-top-500x500_500x.jpg?v=1650971539",
    rating: 4.0,
  },
  {
    id: 46,
    name: "Ladies Jeans",
    price: 250,
    description: " High quality ladies jeans for all occasions.",
    category: "Fashion",
    image_url:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/5766671/1.jpg?9837",
    rating: 5.0,
  },
  {
    id: 47,
    name: "Sexy Top",
    price: 100,
    description: " Sexy top for ladies",
    category: "Fashion",
    image_url:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/1475682/1.jpg?8649",
    rating: 4.5,
  },
  {
    id: 48,
    name: "Power Bank",
    price: 450,
    description: " High capacity power bank for all your charging needs.",
    image_url:
      "https://m.media-amazon.com/images/I/7110HiY3I6L._AC_SL1500_.jpg",
    rating: 5.0,
  },
  {
    id: 49,
    name: "Gaming Console",
    price: 500,
    description: "Experience immersive gaming with this powerful console.",
    category: "Electronics",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizI39kW8D_mgacezh0LqMiCaimVGeR__EOQ&s",
    rating: 4.8,
  },
  {
    id: 50,
    name: "Ironing Board",
    price: 80,
    description:
      "Sturdy ironing board with adjustable height and heat-resistant cover.",
    category: "Home",
    image_url:
      "https://i5.walmartimages.com/seo/Honey-Can-Do-Silver-and-Multi-Oval-Print-Collapsible-Ironing-Board-with-Iron-Rest-and-Shelf_38504150-d17f-4482-a005-bbc67c69e95d.fc6c1b4d01a0035713c581eafbb50d7a.jpeg",
    rating: 4.3,
  },
];

{
  /*for (let i = 49; i <= 50; i++) {
  products.push({
    id: i,
    name: `Product ${i}`,
    price: Math.floor(Math.random() * 300) + 20,
    description: "High quality premium item.",
    category: ["Electronics", "Fashion", "Home"][i % 3],
    image_url: `https://source.unsplash.com/400x400/?product&sig=${i}`,
    rating: (Math.random() * 2 + 3).toFixed(1),
  });
*/
}

export default products;

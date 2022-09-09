const dbConnection = require('../connection');

(async () => {
  const db = await dbConnection();

  console.log('Inserting dummy data...');

  await db
    .collection('users')
    .insertOne({
      _id: 1,
      email: 'admin@gmail.com',
      password: '$2a$12$CMaq/BlAHhLaaDuul7ljoeMVzt8t8xHPYCi0KIkBEPXKBMKk5yS2y',
      createdAt: new Date(),
    });

  await db.collection('categories').insertMany([
    { _id: 1, name: 'Home Appliances', createdAt: new Date() },
    { _id: 2, name: 'Mobile Accessories', createdAt: new Date() },
    { _id: 3, name: 'Gaming', createdAt: new Date() },
    { _id: 4, name: 'Sports & Travel', createdAt: new Date() },
    { _id: 5, name: 'Groceries', createdAt: new Date() },
    { _id: 6, name: 'Laptops & Computers', createdAt: new Date() },
    { _id: 7, name: 'Hobbies & Stationery', createdAt: new Date() },
    { _id: 8, name: 'Women Accessories', createdAt: new Date() },
    { _id: 9, name: 'Makeup & Fragrances', createdAt: new Date() },
    { _id: 10, name: 'Motors', createdAt: new Date() },
    { _id: 11, name: "Women's Apparel", createdAt: new Date() },
    { _id: 12, name: 'Toys, Games & Collectibles', createdAt: new Date() },
    { _id: 13, name: 'Home Entertainment', createdAt: new Date() },
    { _id: 14, name: "Men's Bags & Accessories", createdAt: new Date() },
    { _id: 15, name: 'Pet Care', createdAt: new Date() },
    { _id: 16, name: "Women's Shoes", createdAt: new Date() },
    { _id: 17, name: "Women's Bags", createdAt: new Date() },
    { _id: 18, name: 'Digital Goods & Vouchers', createdAt: new Date() },
    { _id: 19, name: 'Audio', createdAt: new Date() },
  ]);

  await db.collection('sellers').insertMany([
    { _id: 1, name: 'Samsung Official Store', createdAt: new Date() },
    { _id: 2, name: 'Beyond the Box', createdAt: new Date() },
    { _id: 3, name: 'The Good Meat', createdAt: new Date() },
    { _id: 4, name: 'KitchenMarks', createdAt: new Date() },
    { _id: 5, name: 'NCAT', createdAt: new Date() },
    { _id: 6, name: 'Complink', createdAt: new Date() },
    { _id: 7, name: 'Secretlab', createdAt: new Date() },
    { _id: 8, name: 'OXGN', createdAt: new Date() },
    { _id: 9, name: 'Toys R Us', createdAt: new Date() },
  ]);

  await db.collection('products').insertMany([
    {
      name: 'Samsung Galaxy M12 (4+64GB)',
      price: 7490,
      img: 'https://cf.shopee.ph/file/10140e5683c2cc309d66f6f1728fb2e6',
      brand: 'Samsung',
      description:
        '6.5" HD+ TFT • Exynos 850 • 4GB RAM + 64GB Internal • 48MP Main + 5MP Ultra Wide + 2MP Macro + 2MP Depth • 8MP Front Camera • 5,000mAh with 15W Fast Charging • One UI Core • Samsung Knox • Dolby Atmos • Dual SIM',
      category_id: 6,
      seller_id: 1,
    },
    {
      name: 'Samsung Galaxy Buds2',
      price: 3495,
      img: 'https://cf.shopee.ph/file/3dc5bb323fa00144c6686330e21935f1',
      brand: 'Samsung',
      description:
        'Play Time: up to 20 hours (ANC On) / 29 hours (ANC Off) 1Talk Time: up to 13 hours (ANC On) / 14 hours (ANC Off) 2 61mAh Buds/ 472mAh Charging Case • Bluetooth 5.2 2 Way Speaker • IPX2  •  Bixby Support Game Mode • Touch UX',
      category_id: 2,
      seller_id: 1,
    },
    {
      name: 'Samsung Galaxy Watch4 44mm',
      price: 7495,
      img: 'https://cf.shopee.ph/file/baf37372174bfd71752ffd2eba934eac',
      brand: 'Samsung',
      description:
        'Wear OS powered by Samsung • Battery Life up to 24 hours for 44mm • 5ATM + IP68 + Military Standard 810G • Super AMOLED • Corning® Gorilla® Glass DX • 1.5GB + 16GB • BIA Sensor, Compass • Photo Plethysmography • Accelerometer(up to 32G) • Gyro, Barometer, Ambient Light Exynos W920 • Bluetooth 5.0 • Wi-Fi 2.4GHz & 5GHz • NFC • GPS',
      category_id: 2,
      seller_id: 1,
    },
    {
      name: 'Apple iPhone 13 Pro',
      price: 68990,
      img: 'https://cf.shopee.ph/file/eec4f9a2ba6bdee9df32dec5d4c58f3c',
      brand: 'Apple',
      description:
        'iPhone 13 Pro. The biggest Pro camera system upgrade ever. Super Retina XDR display with ProMotion for a faster, more responsive feel. Lightning-fast A15 Bionic chip.Superfast 5G. Durable design and a huge leap in battery life.',
      category_id: 6,
      seller_id: 2,
    },
    {
      name: 'Speck Presidio Perfect Clear Case for iPhone 13 Series',
      price: 1290,
      img: 'https://cf.shopee.ph/file/9e2abc3cf81c6dbf4a801485de61c603',
      brand: 'Speck',
      description:
        'Up to 13-foot drop protection for extreme durability. Innovative clear impact technology cushions your phone and resists damage. Perfect-Clear coating resists discoloration and anti-yellowing materials keep your case looking perfectly-clear. Microban® reduces bacteria growth by 99% to protect the case creating a cleaner surface. Raised bezel screen protection. Slim design allows for easy wireless charging',
      category_id: 2,
      seller_id: 2,
    },
    {
      name: 'NCAT [PRE-ORDER] BLACKPINK: BORN PINK [2ND ALBUM]',
      price: 896,
      img: 'https://cf.shopee.ph/file/54ca9203144dcdedfe49e87bad53bd98',
      brand: 'Blackpink',
      description: 'BLACKPINK: BORN PINK [2ND ALBUM]',
      category_id: 19,
      seller_id: 5,
    },
    {
      name: 'NCAT RED VELVET: OFFICIAL LIGHTSTICK [KIM MAN BONG]',
      price: 1072,
      img: 'https://cf.shopee.ph/file/b388968ae6a2aea25c6fd73369c0ffb2',
      brand: 'Red Velvet',
      description: 'RED VELVET OFFICIAL FANLIGHT',
      category_id: 12,
      seller_id: 5,
    },
    {
      name: 'Logitech M105 Black Red White Optical Mouse',
      price: 310,
      img: 'https://cf.shopee.ph/file/cdd7faeaa462dc1e81526eaf6338a6c3',
      brand: 'Logitech',
      description:
        'Wired Optical Mouse 1000 dpi for smooth cursor control 1.5 meter USB cord Buttons: 3-button mouse (with scrolling wheel) Plug and Play Works with Windows XP, Vista, 7 and 8',
      category_id: 6,
      seller_id: 6,
    },
  ]);

  console.log('Successfully inserted dummy data!');
})();

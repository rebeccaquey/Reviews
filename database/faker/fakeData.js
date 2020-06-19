const faker = require('faker');


const imageUrls = ['https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa1.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa10.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa11.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa12.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa13.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa14.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa15.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa16.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa17.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa18.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa19.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa2.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa20.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa21.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa22.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa23.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa24.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa25.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa3.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa4.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa5.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa6.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa7.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa8.png', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa9.png'];


const getRandomUrl = () => imageUrls[Math.floor(Math.random() * imageUrls.length)];

const getRandomText = () => faker.lorem.sentences(Math.floor(Math.random() * (11 - 2) + 2));

const getRandomRating = () => Math.floor(Math.random() * (6 - 2) + 2);

const getRandomReviews = (number, rooms) => {
  const reviews = [];
  // const randomN = Math.floor(Math.random() * (16 - 6) + 6);
  const roomLen = rooms.length;
  for (let i = 0; i < number; i++) {
    // eslint-disable-next-line no-underscore-dangle
    const randomRoomId = rooms[Math.floor(Math.random() * roomLen)]._roomId;
    const review = {
      name: faker.name.findName().toString(),
      userImageUrl: getRandomUrl().toString(),
      createdAt: faker.date.between('2015-01-01', '2020-06-15').toString(),
      content: getRandomText().toString(),
      overall: getRandomRating(),
      cleanliness: getRandomRating(),
      communication: getRandomRating(),
      checkin: getRandomRating(),
      accuracy: getRandomRating(),
      location: getRandomRating(),
      value: getRandomRating(),
      roomId: randomRoomId,
    };
    reviews.push(review);
  }
  return reviews;
};

const getAvg = (reviews, property) => {
  let score = 0;
  reviews.forEach((element) => {
    score += element[property];
  });
  score /= reviews.length;
  return score.toPrecision(2);
};

const getRandomRooms = (number) => {
  number = number || 1;
  const rooms = [];
  for (let i = 0; i < number; i += 1) {
    const room = {
      _roomId: (i + 1).toString().padStart(9, 0),
    };
    rooms.push(room);
  }
  return rooms;
};

const randomRooms = getRandomRooms(100);
const randomReviews = getRandomReviews(2000, randomRooms);

module.exports = {
  getRandomRooms, getRandomReviews, randomRooms, randomReviews, getAvg,
};

console.log(typeof randomReviews[0].overall);
const moment = require('moment');

const getAverage = (reviews, property) => {
  let score = 0;
  reviews.forEach((element) => {
    score += element[property];
  });
  score /= reviews.length;
  return score.toPrecision(2);
};

const transformReviews = (id, reviews) => {
  const totalReviews = [];
  for (let i = 0; i < reviews.length; i++) {
    const jsDate = new Date(reviews[i].created_at);

    const review = {
      id: reviews[i]._id,
      name: reviews[i].name,
      imageUrl: reviews[i].image_url,
      createdAt: jsDate,
      content: reviews[i].content,
    };
    totalReviews.push(review);
  }

  totalReviews.sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt));

  const room = {
    roomId: id,
    overall: getAverage(reviews, 'overall'),
    otherStars: {
      cleanliness: getAverage(reviews, 'cleanliness'),
      communication: getAverage(reviews, 'communication'),
      checkin: getAverage(reviews, 'checkin'),
      accuracy: getAverage(reviews, 'accuracy'),
      location: getAverage(reviews, 'location'),
      value: getAverage(reviews, 'value'),
    },
    reviews: totalReviews,
  };
  return room;
};

module.exports = { transformReviews };

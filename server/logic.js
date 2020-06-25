/* eslint-disable no-underscore-dangle */
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
  for (let i = 0; i < reviews.length; i += 1) {
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
      accuracy: getAverage(reviews, 'accuracy'),
      communication: getAverage(reviews, 'communication'),
      location: getAverage(reviews, 'location'),
      checkin: getAverage(reviews, 'checkin'),
      value: getAverage(reviews, 'value'),
    },
    reviews: totalReviews,
  };
  return room;
};

module.exports = { transformReviews };

const User = require('../models/user');

exports.addFavoriteCoin = async (req, res) => {
  try {
    const user = req.user;
    const { coinId } = req.body;

    if (user.favoriteCoinIds.length >= 7) {
      console.log('Exceeded maximum limit of 7 favorite coins');
      return res
        .status(400)
        .json({ message: 'Exceeded maximum limit of 7 favorite coins' });
    }

    if (!user.favoriteCoinIds.includes(coinId)) {
      user.favoriteCoinIds.push(coinId);
      await user.save();
      console.log('Coin added to favorites successfully');
      return res.json({ message: 'Coin added to favorites successfully' });
    } else {
      console.log('Coin is already in favorites');
      return res.status(400).json({ message: 'Coin is already in favorites' });
    }
  } catch (error) {
    console.error('Error adding favorite coin:', error);
    res.status(500).json({ message: 'Failed to add favorite coin' });
  }
};

exports.removeFavoriteCoin = async (req, res) => {
  try {
    const user = req.user;
    const { coinId } = req.body;

    const stringCoinId = coinId.toString();

    console.log('Received coinId:', coinId);
    console.log('Converted stringCoinId:', stringCoinId);

    user.favoriteCoinIds = user.favoriteCoinIds.filter(
      (id) => id !== stringCoinId
    );

    console.log('Updated favoriteCoinIds:', user.favoriteCoinIds);

    await user.save();

    console.log('Coin removed from favorites successfully');

    res.json({ message: 'Coin removed from favorites successfully' });
  } catch (error) {
    console.error('Error removing favorite coin:', error);
    res.status(500).json({ message: 'Failed to remove favorite coin' });
  }
};

// exports.removeFavoriteCoin = async (req, res) => {
//   try {
//     const user = req.user;
//     const { coinId } = req.body;

//     user.favoriteCoinIds = user.favoriteCoinIds.filter((id) => id !== coinId);
//     await user.save();

//     res.json({ message: 'Coin removed from favorites successfully' });
//   } catch (error) {
//     console.error('Error removing favorite coin:', error);
//     res.status(500).json({ message: 'Failed to remove favorite coin' });
//   }
// };

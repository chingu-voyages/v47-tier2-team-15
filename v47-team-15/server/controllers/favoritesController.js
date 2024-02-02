const User = require('../models/user');

exports.addFavoriteCoin = async (req, res) => {
  try {
    const user = req.user;
    const { coinId } = req.body;

    if (!user.favoriteCoinIds.includes(coinId)) {
      user.favoriteCoinIds.push(coinId);
      await user.save();
    }

    res.json({ message: 'Coin added to favorites successfully' });
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

    // Remove the coin from favorites
    user.favoriteCoinIds = user.favoriteCoinIds.filter(
      (id) => id !== stringCoinId
    );
    await user.save();

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

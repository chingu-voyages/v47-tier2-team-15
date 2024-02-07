const express = require("express");
const { getGlobalData } = require("../controllers/globalController");

const router = express.Router();

/**
 * GET endpoint to retrieve global cryptocurrency market data.
 * @route GET /api/global
 * @group Global - Operations related to global cryptocurrency data
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {void}
 */
router.get("/", async (req, res) => {
  try {
    const globalData = await getGlobalData();
    res.json({ data: globalData });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

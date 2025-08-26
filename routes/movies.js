const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

// GET /movies → list all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.render("movies", { movies });
  } catch (err) {
    console.error("Error fetching movies:", err);
    res.status(500).send("Error fetching movies");
  }
});

// GET /movie/:id → show movie details
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).send("Movie not found");
    }
    res.render("movie", { movie });
  } catch (err) {
    console.error("Error fetching movie details:", err);
    res.status(500).send("Error fetching movie details");
  }
});

module.exports = router;

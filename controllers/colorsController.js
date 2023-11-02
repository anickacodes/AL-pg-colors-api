const express = require("express");
const {
  getAllColors,
  getOneColor,
  createColor,
  deleteColor,
  updateColor,
} = require("../queries/color");
const { checkName, checkBoolean } = require("../validations/checkColors");
const colors = express.Router();

// GET all colors
colors.get("/", async (req, res) => {
  const allColors = await getAllColors();
  if (allColors[0]) {
    res.status(200).json(allColors);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

colors.get("/:id", async (req, res) => {
  const { id } = req.params;

  const oneColor = await getOneColor(id);
  if (oneColor) {
    res.status(200).json(oneColor);
  } else {
    res.status(404).json({ error: "ID Not Found" });
  }
});

colors.post("/", checkName, checkBoolean, async (req, res) => {
  const postColor = await createColor(req.body);
  res.status(200).json(postColor);
});

colors.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deletedColor = await deleteColor(id);
  // dot notation, not parenthesis
  if (deletedColor.id) {
    res.status(200).json(deletedColor);
  }
});

colors.put("/:id", checkName, checkBoolean, async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updatedColor = await updateColor(id, body);
  if (updatedColor.id) {
    res.status(200).json(updatedColor);
  } else {
    res.status(404).json({ error: "Color Not Found" });
  }
});

module.exports = colors;

const db = require("../db/dbConfig");

const getAllColors = async () => {
  try {
    const allColors = await db.any("SELECT * FROM colors");
    return allColors;
  } catch (error) {
    return error;
  }
};

const getOneColor = async (id) => {
  try {
    const oneColor = await db.one(" SELECT * FROM colors WHERE id=$1", id);
    return oneColor;
  } catch (error) {
    return error;
  }
};

// INSERT INTO colors (name, is_favorite) VALUES ('Teal', true)
const createColor = async (color) => {
  try {
    const createColor = await db.one(
      "INSERT INTO colors (name, is_favorite) VALUES($1, $2) RETURNING *",
      [color.name, color.is_favorite]
    );
    // kvp $1 $2 returning
    return createColor;
  } catch (error) {
    return error;
  }
};

const deleteColor = async (id) => {
  try {
    const deletedColor = await db.one(
      "DELETE FROM colors WHERE id=$1 RETURNING *",
      id
    );
    return deletedColor;
  } catch (error) {
    return error;
  }
};

const updateColor = async (id, color) => {
  try {
    const updatedColor = await db.one ("UPDATE colors SET name=$1, is_favorite=$2 where id=$3 RETURNING *", [color.name, color.is_favorite, id])
return updatedColor
  } catch (error) {
return error
  }
}
module.exports = { getAllColors, getOneColor, createColor, deleteColor, updateColor };

// async wont stop the program to wait for the await to finish
// await cannot be used outside async

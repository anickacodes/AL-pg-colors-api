const checkName = (req, res, next) => {
  if (req.body.name) {
    // 
    next();
  } else {
    res.status(404).json({ error: "Name is Required" });
  }
};

const checkBoolean = (req, res, next) => {
    const fav = req.body.is_favorite
    if (typeof fav === 'boolean') {
        next()
    } else {
        res.status(400).json({error: 'is_favorite must be type boolean'})
    }
}

module.exports = {checkName, checkBoolean}

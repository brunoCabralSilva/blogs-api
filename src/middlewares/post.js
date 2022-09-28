const message = {
  message: 'Some required fields are missing',
};
  
const vTitle = (req, res, next) => {
  const { title } = req.body;
  if (!title || title === '') {
    return res.status(400).json(message);
  }
  next();
};

const vContent = (req, res, next) => {
  const { content } = req.body;
  if (!content || content === '') {
    return res.status(400).json(message);
  }
  next();
};

const vCategoryIds = (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds || categoryIds === '') {
    return res.status(400).json(message);
  }
  next();
};

const vTitleUpdt = (req, res, next) => {
  const { title } = req.body;
  if (!title || title === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const vContentUpdt = (req, res, next) => {
  const { content } = req.body;
  if (!content || content === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  vTitle,
  vContent,
  vCategoryIds,
  vTitleUpdt,
  vContentUpdt,
};

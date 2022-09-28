const { BlogPost, User, Category, PostCategory } = require('../models');

const getAll = async () => {
  const query = await BlogPost.findAll({
    include: [
      {
        attributes: {
          exclude: ['password'],
        },
        as:'user',
        model: User,
      },
      {
        as:'category',
        model: Category,
      },
    ],
  });
  return query;
};

const getById = async (params) => {
  const id = Number(params);
  const query = await BlogPost.findOne({
    where: { id },
  });
  return query;
};

const register = async (body, id) => {
  const { title, content, categoryIds } = body;
    const post = await BlogPost.create({
      title,
      content,
      userId: id,
    });
    await Promise.all(
      categoryIds.map(async (cat) => {
        const category = await Category.findByPk(cat);
        if (!category) {
          throw new error ('"categoryIds" not found');
        }
        await PostCategory.create({
          post_id: post.dataValues.id,   
          category_id: cat,
        });
        return category;
      }));
      return post;
};

module.exports = { getAll, getById, register }
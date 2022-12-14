const { BlogPost, User, Category, PostCategory } = require('../models');

const getAll = async () => {
  const query = await BlogPost.findAll({
    include: [
      {
        attributes: {
          exclude: ['password'],
        },
        as: 'user',
        model: User,
      },
      {
        as: 'categories',
        model: Category,
        through: { attributes: [] },
      },
    ],
  });
  return query;
};

const queryOne = async (id) => {
  const query = await BlogPost.findOne({
    include: [
      {
        attributes: {
          exclude: ['password'],
        },
        as: 'user',
        model: User,
      },
      {
        as: 'categories',
        model: Category,
        through: { attributes: [] },
      },
    ],
    where: { id },
  });
  return query;
};

const getById = async (params) => {
  const id = Number(params);
  const query = await queryOne(id);
  return query;
};

const create = async (title, content, id) => {
  const post = await BlogPost.create({
    title, 
    content,
    userId: id,
    published: new Date(),
    updated: new Date(),
   });
   return post;
};

const register = async (body, id) => {
  const { title, content, categoryIds } = body;
    const post = await create(title, content, id);
    await Promise.all(
      categoryIds.map(async (cat) => {
        const category = await Category.findByPk(cat);
        if (!category) {
          throw new Error(
            '"categoryIds" not found',
          );
        }
        await PostCategory.create({
          postId: post.dataValues.id,
          categoryId: cat,
        });
        return category;
      }),
      );
      return post;
};

const deletePost = async (idPost, idUser) => {
  const query = await BlogPost.findByPk(idPost);
  if (query === null) {
    return null;
  }

  if (query.userId !== idUser) {
    return 'not authorized';
  }
  
  await BlogPost.destroy({
    where: { id: idPost },
  });
};

const updatePost = async ({ title, content }, idPost, id) => {
  const query = await BlogPost.findByPk(idPost);
  if (query.dataValues.id !== id) {
    return 'Unauthorized user';
  }

  await BlogPost.update(
    { title, content },
    { where: { id: idPost } },
  );

  const post = await getById(idPost);
  return post;
};

module.exports = {
  getAll,
  getById,
  register,
  deletePost,
  updatePost,
};
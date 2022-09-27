const VdisplayName = (req, res, next) => {
  const { displayName } = req.body;
  const number = 8;
  if (displayName.length < number) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const Vemail = (req, res, next) => {
  const { email } = req.body;
  const validateEmail = /\S+@\S+\.\S+/;
  if (!validateEmail.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  next();
};

const Vpassword = (req, res, next) => {
  const { password } = req.body;
  const number = 6;
  if (password.length < number) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }
  next();
};

module.exports = { VdisplayName, Vemail, Vpassword };
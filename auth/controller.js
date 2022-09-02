import authService from '../auth/service.js'
import bcrypt from 'bcryptjs/dist/bcrypt.js'



const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.loginService(email);

  if (!user) {
    return res.status(400).send({ message: "Usuário não encontrado!" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).send({ message: "Senha inválida!" });
  }

  const token = authService.generateToken(user.id);

  res.send({
    user: {
      id: user.id
    },
    token,
  });
};

const authController = {
  loginController
}

export default authController
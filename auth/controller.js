import authService from '../auth/service.js'
import bcrypt from 'bcryptjs/dist/bcrypt.js'


const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authService.loginService(email);
    const token = authService.generateToken(user.id);
    const isPasswordValid = await bcrypt.compare(password, user.password);

    res.status(200).send({ user: { id: user.id }, token })

    if (!isPasswordValid) {
      return res.status(400).send({ message: "Senha inválida!" });
    }

    if (!user) {
      return res.status(400).send({ message: "Usuário não encontrado!" });
    }
    ;
  } catch (err) {
    return res.status(400).send({ message: "Usuário não encontrado!" })
  }
}
const authController = {
  loginController
}

export default authController
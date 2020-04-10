import axios from "axios";

//1.1
const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));
const umPorSegundo = async () => {
  await delay(console.log("1s"));
  await delay(console.log("2s"));
  await delay(console.log("3s"));
};
umPorSegundo();

//1.2
async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log("Usuário não existe");
  }
}
getUserFromGithub("diego3g");
getUserFromGithub("diego3g124123");

//1.3
class Github {
  static async getRepositories(repo) {
    const response = await axios.get(`https://api.github.com/repos/${repo}`);
    console.log(response);
  }
  catch(err) {
    console.log("Repositorio nao existe");
  }
}

Github.getRepositories("rocketseat/rocketseat.com.br"); // ERR
Github.getRepositories("LeonardoBrizolla/rocketseat-starter-javascriptES6"); // Repo ok

//1.4
const buscaUsuario = async (users) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${users}`);
    console.log(response.data);
  } catch (err) {
    console.log("Users nao existem");
  }
};
buscaUsuario("diego3g");

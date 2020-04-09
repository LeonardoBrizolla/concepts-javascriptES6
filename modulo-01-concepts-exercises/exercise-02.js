const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

//2.1
const agesOfTheUsers = usuarios.map((usersAges) => usersAges.idade);
console.log("agesOfTheUsers", agesOfTheUsers);

//2.2
const usersRocketseat = usuarios.filter(
  (users) => users.idade >= 18 && users.empresa === "Rocketseat"
);
console.log("usersRocketseat", usersRocketseat);

//2.3
const userJobGoogle = usuarios.find((users) => users.empresa === "Google");
console.log("userJobGoogle", userJobGoogle);

//2.4
const calculo = usuarios
  .map((usuarios) => ({ ...usuarios, idade: usuarios.idade * 2 }))
  .filter((usuarios) => usuarios.idade <= 50);
console.log("calculo", calculo)

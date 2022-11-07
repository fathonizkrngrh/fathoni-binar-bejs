const { User } = require("./models");

async function main() {
  //create
  //   const user = await User.create({
  //     name: "nugroho",
  //     email: "nugroho@gmail.com",
  //     password: "789",
  //   });
  //   console.log(user);

  /* Find All */
  const users = await User.findAll();
  users.forEach((el) => {
    console.log(el.get());
  });

  /* Find One */
  //   const user = await User.findOne({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //   console.log(user.get());

  /* UPdate */
  //   const updated = await User.update(
  //     {
  //       name: "toniganteng",
  //       email: "toni@email.com",
  //     },
  //     {
  //       where: {
  //         id: 1,
  //       },
  //     }
  //   );
  //   console.log(updated);

  /* Delete */
  //   const deleted = await User.destroy({
  //     where: {
  //       id: 3,
  //     },
  //   });
  //   console.log(deleted);
}

main();

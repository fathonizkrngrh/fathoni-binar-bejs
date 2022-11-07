const { Client } = require("pg");
const client = new Client({
  user: "fathoni",
  host: "localhost",
  database: "game_data",
  password: "301002",
  port: "5432",
});

/* synchronus */

client.connect();

client.query("SELECT $1::text as message", ["Hello World"], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message);
  client.end();
});

// async function main() {
//   await client.connect();

//   const res = await client.query("SELECT $1::text as message", ["Hello World"]);
//   console.log(res.rows[0].message);

//   await client.end();
// }

// main();

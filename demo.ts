const db = await Deno.openKv();

const user = "trollscien";
const result = await db.set(["username"], user);

console.log(result);

const username = await db.get(["username"]);

console.log(username);

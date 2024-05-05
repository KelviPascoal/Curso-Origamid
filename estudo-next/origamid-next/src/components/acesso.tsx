import fs from "fs/promises";

export async function Acesso() {
  await fs.appendFile("acesso.txt", `${Date.now()}`, "utf8");
  const acesso = fs.readFile("acesso.txt", "utf-8");

  return <div>{acesso}</div>;
}

"use client";

import { Acesso } from "@/components/acesso";

export default function HomePage() {
  const aaa = console.log("aaa");
  return (
    <main>
      <h1>Home</h1>
      <input type="text" onChange={(e) => console.log(e.target.value)} />
      {/* <button onClick={() => console.log("teste")}>aaa</button>; */}
      {/* <Acesso /> */}
    </main>
  );
}

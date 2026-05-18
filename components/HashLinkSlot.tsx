"use client";

import dynamic from "next/dynamic";

const HashLink = dynamic(
  () => import("./HashLink").then((mod) => mod.HashLink),
  { ssr: true },
);

export { HashLink };
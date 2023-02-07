"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Modals from "../layout/Modals";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let [isOPen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {!isOPen && (<button onClick={handleOpenModal}>Open Modal</button>)}
        {isOPen && (<Modals></Modals>)}
      </div>
    </main>
  );
}

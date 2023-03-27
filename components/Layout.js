import React from 'react';
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import styles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

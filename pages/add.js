import styles from "../styles/Home.module.css";
import Link from "next/link";
import { supabase } from "../database/supabaseClient";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import AddMember from "../components/AddMember";

const Add = () => {
  

  return (
    <div className={styles.main}>
      <p style={{ padding: "2rem", fontSize: "1.5rem" }}>Add FAC member:</p>

      <AddMember/>

      <Link href="/">
        <a style={{ marginTop: "3rem" }}>Back to home</a>
      </Link>
    </div>
  );
};

export default Add;

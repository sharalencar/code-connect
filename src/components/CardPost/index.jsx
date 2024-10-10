import styles from "./CardPost.module.css";
import Image from "next/image";
import { Avatar } from "../Avatar";
import Link from "next/link";

export const CardPost = ({ post, highlight }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.link}>
      <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
        <header className={styles.header}>
          <figure style={{ height: highlight ? 300 : 133 }}>
            <Image src={post.cover} fill alt={`Capa do post: ${post.tittle}`} />
          </figure>
        </header>
        <section className={styles.body}>
          <h2>{post.tittle}</h2>
          <p>{post.body}</p>
        </section>
        <footer className={styles.footer}>
          <Avatar name={post.author.username} imageSrc={post.author.avatar} />
        </footer>
      </article>
    </Link>
  );
};

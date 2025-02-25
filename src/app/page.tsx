import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.profilePicture}
          src="https://kostaskoto.github.io/kostaskoto/images/kostaskotoProfile.jpg"
          alt="profile picture"
          width={1250}
          height={1664}
          priority
          unoptimized
        />
        <h1 className={styles.title}>
          Konstantinos Kotorenis
        </h1>
        <h2 className={styles.subtitle}>
          or just kostaskoto
        </h2>
        <h3> Who Am I?</h3>
        <p>Good question! I think I will never know the answer. What I know is that I express myself through photography, I love making graphic and UI/UX designs for other people and playing my harmonica from time to time.</p>
        <Link href="/aboutMe">About Me</Link>
        <Link href="/design">Design</Link>
        <Link href="/photography">Photography</Link>

      </main>
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.profile}>
          <div className={styles.profileRelative}>
            <Image
              className={styles.profilePicture}
              src="https://kostaskoto.github.io/kostaskoto/images/kostaskotoProfile.jpg"
              alt="profile picture"
              width={1250}
              height={1664}
              priority
              unoptimized
            />
            <div className={styles.personalInfo}>
              <p>BORN IN 1998</p>
              <p>PHOTOGRAPHING SINCE 2014</p>
              <p>DESIGNING SINCE 2019</p>
            </div>
          </div>

        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            KONSTANTINOS
          </h1>
          <h1 className={styles.title}>
            KOTORENIS
          </h1>
        </div>
        <h2 className={styles.subtitle}>
          OR JUST KOSTASKOTO
        </h2>
        <div>
          <h3> Who Am I?</h3>
          <p>Good question! I think I will never know the answer. What I know is that I express myself through photography, I love making graphic and UI/UX designs for other people and playing my harmonica from time to time.</p>
        </div>
        <div>
          <Link href="/photography">PHOTOGRAPHY</Link>
          <Link href="/design">DESIGN</Link>
          <Link href="/aboutMe">ABOUT ME</Link>
        </div>
      </main>
    </div>
  );
}

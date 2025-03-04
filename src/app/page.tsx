import Image from "next/image";
import './home.css';
import Link from "next/link";

export default function Home() {
  return (
    <div className='page'>
      <main className='main'>
        <div className='profile'>
          <div className='aboutMePlaceholder'>
            <h3> WHO AM I?</h3>
            <p>Good question! I think I will never know the answer. What I know is that I express myself through photography, I love making graphic and UI/UX designs for other people and playing my harmonica from time to time.</p>
          </div>
          <div className='profileRelative'>
            <Image
              className='profilePicture'
              src="https://kostaskoto.github.io/kostaskoto/images/kostaskotoProfile.jpg"
              alt="profile picture"
              width={1250}
              height={1664}
              loading="lazy"
            />
            <div className='personalInfo'>
              <p>BORN IN 1998</p>
              <p>PHOTOGRAPHING SINCE 2014</p>
              <p>DESIGNING SINCE 2019</p>
            </div>
          </div>
          <div className='aboutMe'>
            <h3> WHO AM I?</h3>
            <p>Good question! I think I will never know the answer. What I know is that I express myself through photography, I love making graphic and UI/UX designs for other people and playing my harmonica from time to time.</p>
          </div>
        </div>
        <h2 className='subtitle'>
          OR JUST KOSTASKOTO
        </h2>
        <div className='titleContainer'>
          <h1 className='title'>
            KONSTANTINOS
          </h1>
          <h1 className='title'>
            KOTORENIS
          </h1>
        </div>


        <div className='navigationHome'>
          <Link className='navLink' href="/photography">PHOTOGRAPHY</Link>
          <Link className='navLink' href="/design">DESIGN</Link>
          <Link className='navLink' href="/aboutMe">ABOUT ME</Link>
        </div>
      </main>
    </div>
  );
}

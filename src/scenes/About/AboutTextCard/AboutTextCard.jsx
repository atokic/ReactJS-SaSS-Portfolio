import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Ante Tokić </span>
        from <span className={s.purple}> Sinj, Croatia.</span>
        <br />
        I have recently completed my
        <br /> Master’s in computer science at
        FESB - Faculty of Electrical  
        <br /> Engineering, Mechanical Engineering and Naval Architecture, Split.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Tennis
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Soccer
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Running
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Hiking
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Social Media and Website Management for friends and their companies, where I
gain knowledge and experience.
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Creation of business cards, brochures and catalogs using Adobe tools such as Adobe Photoshop, Adobe
Illustrator and Adobe InDesign
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Strive to build things that make a difference!"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;

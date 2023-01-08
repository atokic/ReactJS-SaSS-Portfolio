import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiGit,
  DiSass,
} from 'react-icons/di';
import {
  SiAngular,
  SiReact,
  SiRedux,
  SiAmazonaws,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobexd

} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <SiAngular />
      </li>
      <li className={s.techIcon}>
        <SiReact />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiMysql />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <SiAmazonaws />
      </li>
      <li className={s.techIcon}>
        <SiAdobephotoshop />
      </li>
      <li className={s.techIcon}>
        <SiAdobelightroom />
      </li>
      <li className={s.techIcon}>
        <SiAdobeillustrator />
      </li>
      <li className={s.techIcon}>
        <SiAdobeindesign />
      </li>
      <li className={s.techIcon}>
        <SiAdobexd />
      </li>
    </ul>
  );
};

export default TechSkills;

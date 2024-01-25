import github_logo from '@assets/github.svg';
import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className={styles.container}>
        <p className={styles.year}>2024</p>
        <div className={styles.github}>
          <a
            target="_blank"
            href={`https://github.com/KirillVM`}
            rel="noreferrer"
          >
            <img src={github_logo} alt="Github icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

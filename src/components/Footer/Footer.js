import Container from '@components/Container';

import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <Container className={`${styles.footerContainer} ${styles.footerLegal}`}>
        <p>
          &copy; <a href="https://spacejelly.dev"> Team R3negades </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

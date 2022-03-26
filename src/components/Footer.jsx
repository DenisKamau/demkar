import Image from "next/image";
import styles from "../../styles/Footer/Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <div className={styles.footerLeft}>
        <Image src="/logo.png" alt="logo" width={30} height={30} />
        <p>
          Yeah Mom, we know, youve told us this story a million times. You felt sorry for him so you decided to go with him to The Fish Under The Sea
          Dance.
        </p>
        <p>
          WORKING DAYS/HOURS: <br />
          Mon - Sat/ 7:00 AM - 6:00 PM
        </p>
        <div>
          <p>Follow Us</p>
          <div className={styles.socialIcons}></div>
        </div>
      </div>
      <div className={styles.footerRight}></div>
    </div>
  );
};

export default Footer;

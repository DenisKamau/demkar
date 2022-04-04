import Image from "next/image";
import styles from "../../styles/Footer/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLeft}>
          <Image src="/logo.png" alt="logo" width={80} height={80} />
          <p className={styles.shopDetails}>
            Demker Electricals is a leading elecricals dealer in electical goods & appliances, hardware & general merchants
          </p>
          <p className={styles.workingHours}>
            WORKING DAYS/HOURS: <br />
            Mon - Sat/ 7:00 AM - 6:00 PM
          </p>
          <div className={styles.socials}>
            <p>Follow Us</p>
            <div className={styles.line} />
            <div className={styles.socialIcons}>
              <Image src="/fb.png" alt="facebook" width={30} height={30} />
              <Image src="/ig.png" alt="facebook" width={30} height={30} />
              <Image src="/whatsapp.png" alt="facebook" width={30} height={30} />
            </div>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.top}>
            <p className={styles.getInTouch}>Get in touch</p>
            <div className={styles.line} />
            <div className={styles.bottom}>
              <div className={styles.contactDetails}>
                <Image src="/location.png" alt="location" width={20} height={20} />
                <p style={{ lineHeight: "26px" }}>
                  Kilimanjaro Mall, Charles Rubia Rd <br /> Shop No. 53 &57 ,Basement <br /> Next to Mololine Stage{" "}
                </p>
              </div>
              <div className={styles.contactDetails}>
                <Image src="/phone.png" alt="phone" width={20} height={20} />
                <p style={{ lineHeight: "26px" }}>
                  0724 235 594 <br /> 0722 771 226{" "}
                </p>
              </div>
              <div className={styles.contactDetails}>
                <Image src="/mail.png" alt="mail" width={20} height={20} />
                <p>Demkerelectricals@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>©Demker Electricals Ltd. All Rights Reserved 2022</p>
      </div>
    </footer>
  );
};

export default Footer;

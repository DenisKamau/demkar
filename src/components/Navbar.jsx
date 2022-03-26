import Image from "next/image";
import styles from "../../styles/Home/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Image src="/logo.png" alt="" layout="fixed" width={60} height={60} priority />
      </div>
      <div className={styles.navbarRight}>
        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

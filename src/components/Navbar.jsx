import Image from "next/image";
import styles from "../../styles/Home/Navbar.module.scss";
import { DebounceInput } from "react-debounce-input";
import { useState, useEffect } from "react";
import { debounce } from "../utils/helpers";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [navbar, setNavbar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = debounce(() => {
    if (window.scrollY > 8) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    const currentScrollPos = window.pageYOffset;
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollPos]);

  return (
    <div className={!navbar ? styles.navbar : styles.navbar_active}>
      <div className={styles.navbarLeft}>
        <Image src="/logo.png" alt="" layout="fixed" width={60} height={60} priority />
        <p>DEMKER ELECTRICALS</p>
      </div>
      <div>
        <div className={styles.mobileMenu}>
          <input className={styles.menuBtn} type="checkbox" id="menuBtn" />
          <label className={styles.menuIcon} htmlFor="menuBtn">
            <span className={styles.navicon}></span>
          </label>
          <ul className={styles.menu}>
            <li>
              <a href="#" title="Go to homepage">
                Home
              </a>
            </li>
            <li>
              <a href="#" title="Go to product page">
                Shop
              </a>
            </li>
            <li>
              <a href="#" title="Go to solutions page">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className={styles.navbarRight}>
        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <Image src="/search.png" alt="" layout="fixed" width={25} height={25} priority />
          </div>
          <DebounceInput
            className={styles.searchInput}
            placeholder="I'm looking for..."
            value={query}
            minLength={2}
            debounceTimeout={500}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;

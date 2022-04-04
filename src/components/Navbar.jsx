import Image from "next/image";
import styles from "../../styles/Home/Navbar.module.scss";
import { DebounceInput } from "react-debounce-input";
import { useState, useEffect } from "react";
import { debounce } from "../utils/helpers";
import Link from "next/link";

const Navbar = ({ scroll }) => {
  const [query, setQuery] = useState("");
  const [checked, setChecked] = useState(false);
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

  const handleChecked = () => {
    setChecked(!checked);
  };

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
        <Link href="/" passHref>
          <Image src="/logo.png" alt="" layout="fixed" width={40} height={40} priority />
        </Link>
        <p>DEMKER ELECTRICALS</p>
      </div>

      <div className={styles.mobileNav}>
        <div>
          <div className={styles.mobileMenu}>
            <input className={styles.menuBtn} onClick={handleChecked} checked={checked} type="checkbox" id="menuBtn" />
            <label className={styles.menuIcon} htmlFor="menuBtn">
              <span className={styles.navicon}></span>
            </label>
            <div className={styles.menu}>
              <ul onClick={() => setChecked(false)}>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop">
                    <a>Shop</a>
                  </Link>
                </li>
                <li onClick={scroll}>
                  <a>Contact</a>
                </li>
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
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.deskNav}>
        <div className={styles.navbarRight}>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/shop">
                  <a>Shop</a>
                </Link>
              </li>
              <li onClick={scroll}>
                <a>Contact</a>
              </li>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;

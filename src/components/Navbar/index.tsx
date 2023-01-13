import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      <li className={styles.active}>Content</li>
      <li>Community</li>
      <li>Marketplace</li>
      <li>Settings</li>
    </ul>
  );
};

export default Navbar;

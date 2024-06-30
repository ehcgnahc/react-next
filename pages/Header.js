import Link from 'next/link';
import styles from '../styles/Header.module.css';

function Header() {
    return (
        <header>
            <nav className={styles.menu}>
                <ul>
                    <li className={styles.hover}><Link href="/"><span className={styles.text}>Ehc-Code</span></Link></li>
                    <li>
                        <Link href="/"><span className={styles.text}>MyCode</span><span className={styles.downArrow}></span></Link>
                        <div className={styles.dropdown}>
                            <ul>
                                <li><Link href="/Code-Cpp"><span className={styles.text}>C/Cpp</span></Link></li>
                                <li><Link href="/"><span className={styles.text}>Python</span></Link></li>
                                <li><Link href="/"><span className={styles.text}>My Website</span></Link></li>
                                <li><Link href="/"><span className={styles.text}>Discord Bot</span></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href="/"><span className={styles.text}>About</span><span className={styles.downArrow}></span></Link>
                        <div className={styles.dropdown}>
                            <ul>
                                <li><Link href="/About-the-Aurthor"><span className={styles.text}>About the Author</span></Link></li>
                                <li><Link href="/"><span className={styles.text}>About the Website</span></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.hover}><Link href="/"><span className={styles.text}>Services</span></Link></li>
                    <li className={styles.hover}><Link href="/Contact"><span className={styles.text}>Contact</span></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

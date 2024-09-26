import Link from 'next/link';
import styles from '../styles/Header.module.css';

function Header() {
    return (
        <header>
            <nav className={styles.menu}>
                <ul>
                    <li className={styles.hover}><Link href="/"><span className={styles.brand}>Ehc-Code</span></Link></li>
                    <li className={styles.text}>
                        <Link href="/"><span className={styles.options}>MyCode</span><span className={styles.downArrow}></span></Link>
                        <div className={styles.dropdown}>
                            <ul>
                                <li><Link href="/Codes/Cpp"><span className={styles.options}>C/Cpp</span></Link></li>
                                <li><Link href="/"><span className={styles.options}>Python</span></Link></li>
                                <li><Link href="/"><span className={styles.options}>My Website</span></Link></li>
                                <li><Link href="/"><span className={styles.options}>Discord Bot</span></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href="/"><span className={styles.options}>About</span><span className={styles.downArrow}></span></Link>
                        <div className={styles.dropdown}>
                            <ul>
                                <li><Link href="/About-the-Aurthor"><span className={styles.options}>About the Author</span></Link></li>
                                <li><Link href="/"><span className={styles.options}>About the Website</span></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.hover}><Link href="/"><span className={styles.options}>Services</span></Link></li>
                    <li className={styles.hover}><Link href="/Contact"><span className={styles.options}>Contact</span></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

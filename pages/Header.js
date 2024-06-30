import Link from 'next/link';
import styles from '../styles/Header.module.css';

function Header() {
    return (
        <header>
            <nav className={styles.menu}>
                <ul>
                    <li className={styles.hover}><Link href="/">Ehc-Code</Link></li>
                    <li>
                        <Link href="/">MyCode<span className={styles.downArrow}></span></Link>
                        <div className={styles.dropdown}>
                            <ul>
                                <li><Link href="/Code-Cpp">C/Cpp</Link></li>
                                <li><Link href="/">Python</Link></li>
                                <li><Link href="/">My Website</Link></li>
                                <li><Link href="/">Discord Bot</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href="/">About<span className={styles.downArrow}></span></Link>
                        <div className={styles.dropdown}>
                            <ul>
                                <li><Link href="/About-the-Aurthor">About the Author</Link></li>
                                <li><Link href="/">About the Website</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="/">Services</a></li>
                    <li><Link href="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

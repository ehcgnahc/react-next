import Link from 'next/link';
import styles from '../styles/Header.module.css';

function Header() {
    return (
        <header>
            <nav className={styles.menu}>
                <ul>
                    <li className={styles.hover}><Link href="/"><span className={styles.brand}>首頁</span></Link></li>
                    <li className={styles.text}>
                        <Link href="/"><span className={styles.options}>xx專區</span><span className={styles.downArrow}></span></Link>
                        <div className={styles.dropdown}>
                            <ul>
                                <li><Link href="/Curtains/Curtain1"><span className={styles.options}>x1</span></Link></li>
                                <li><Link href="/Curtains/Curtain2"><span className={styles.options}>x2</span></Link></li>
                                <li><Link href="/Curtains/Curtain3"><span className={styles.options}>x3</span></Link></li>
                                <li><Link href="/Curtains/Curtain4"><span className={styles.options}>x4</span></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href="/"><span className={styles.options}>相關介紹</span><span className={styles.downArrow}></span></Link>
                        <div className={styles.dropdown}>
                            <ul>
                                <li><Link href="/About-the-Aurthor"><span className={styles.options}>About the Author</span></Link></li>
                                <li><Link href="/"><span className={styles.options}>About the Website</span></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.hover}><Link href="/"><span className={styles.options}>Services</span></Link></li>
                    <li className={styles.hover}><Link href="/Contact"><span className={styles.options}>聯繫我們</span></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

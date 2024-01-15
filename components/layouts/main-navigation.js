import Link from 'next/link';
import Logo from './logo';
import classes from './main-navigation.module.css'


export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <div className={classes.logo}>
                    <Link href={'/'}>
                        <Logo></Logo>
                    </Link>
                </div>
                <ul>
                    <li> 
                        <Link href='/posts'> Posts </Link>
                    </li>
                    <li> 
                        <Link href='/contact'> Contact </Link> 
                    </li>
                </ul>
            </nav>
        </header>
    );
}

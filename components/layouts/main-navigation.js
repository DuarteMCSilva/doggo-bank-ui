import Link from 'next/link';
import Logo from './logo';
import classes from './main-navigation.module.css'


export default function MainNavigation() {

    const TOPICS = [
        {
            title: 'Login',
            subsections: [],
            route: '/investiment'
        },
        {
            title: 'Portfolio',
            subsections: [],
            route: '/portfolio'
        },
        {
            title: 'Contacts',
            subsections: [],
            route: '/contact'
        },
    ]

    return (
        <header className={classes.header}>
            <nav>
                <div className={classes.logo}>
                    <Link href={'/'}>
                        <Logo></Logo>
                    </Link>
                </div>
                <ul>
                    {
                        TOPICS.map((topic) =>{
                            return (
                                <li>
                                    <Link href={topic.route}> {topic.title} </Link>
                                </li>
                            )
                        } )
                    }
                </ul>
            </nav>
        </header>
    );
}

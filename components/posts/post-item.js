import Image from 'next/image';
import classes from './post-item.module.css';
import Link from 'next/link';

export default function PostItem(props) {
    const { title, image, excerpt, date, slug } = props.post;
    const imagePath = `/images/investments/${image}`;
    return (
        <li className={`${classes.item} ${classes.pop_up}`}>
            <Link href={`/categories/${slug}`}>
                    <div className={classes.image}>
                        <Image src={imagePath} alt={title} width={200} height={200} layout='responsive'></Image>
                    </div>
                    <div className={classes.text}>
                        <h3> {title}</h3>
                        <p> {excerpt} </p>
                    </div>
            </Link>
        </li>
    );
}

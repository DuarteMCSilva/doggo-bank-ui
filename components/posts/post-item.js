import Image from 'next/image';
import Link from 'next/link';
import classes from './post-item.module.css';

export default function PostItem(props) {
    const { title, image, excerpt, date, slug } = props.post;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const imagePath = `/images/investments/${image}`; 

    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <Image src={ imagePath } alt={ title } width={ 200 } height={ 200 }></Image>
            </div>
            <div className={classes.text}>
                <h3> { title }</h3>
                <time> { formattedDate }</time>
                <p> { excerpt } </p>
            </div>
        </li>
    );
}

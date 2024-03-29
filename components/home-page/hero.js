import Image from "next/image";
import classes from "./hero.module.css";
import Link from "next/link";

export default function Hero() {
    return (
        <div className={classes.page}>
            <div className={classes.content_wrapper}>
                <div className={classes.image_wrapper}>
                    <Link href={'/about'}>
                        <Image src='/images/formal-suki.jpeg' alt='suki' width={300} height={300} layout="responsive"/>
                    </Link>
                </div>
                <h1 className={classes.header}> Welcome to DoggoBank! </h1>
                <h3 className={classes.subheader}> My name is Suki, and I will help you finding the best investment opportunities for your spare bones! </h3>
            </div>
        </div>
    );
}

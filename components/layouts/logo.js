import Image from "next/image";
import classes from "./logo.module.css";

export default function Logo() {
    return (
        <div className={`${classes.image_wrapper} ${classes.pop_up}`}>
            <Image src='/images/hello-suki.jpeg' width={64} height={64}></Image>
        </div>
    );
}

import type { FC, HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Card.module.css";
import cx from "classix";

type Props = HTMLAttributes<HTMLDivElement> & PropsWithChildren

export const Card: FC<Props> = ({children, className}) => {
    return (
        <div className={cx(...[styles.container, className])}>{children}</div>
    )
};
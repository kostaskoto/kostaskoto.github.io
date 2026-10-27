'use client';

import {
    Children,
    isValidElement,
    useState,
    type ReactNode,
} from 'react';

import styles from './Accordion.module.scss';

interface AccordionProps {
    children: ReactNode;
    className?: string;
}

interface AccordionItemProps {
    title: string;
    children: ReactNode;
}

export function Accordion({
    children,
    className = "",
}: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(
        null
    );

    return (
        <div className={`${styles.accordion} ${className}`}>
            <div className={styles.line} />
            {Children.map(children, (child, index) => {
                if (
                    !isValidElement<AccordionItemProps>(child) ||
                    child.type !== AccordionItem
                ) {
                    return child;
                }

                return (
                    <div className={styles.item} key={child.key ?? index}>
                        <button
                            type="button"
                            className={styles.trigger}
                            aria-expanded={openIndex === index}
                            onClick={() =>
                                setOpenIndex(
                                    openIndex === index ? null : index
                                )
                            }
                        >
                            <h3>{child.props.title}</h3>
                            <span aria-hidden="true">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        {openIndex === index && (
                            <div className={styles.content}>
                                {child.props.children}
                            </div>
                        )}

                        <div className={styles.line} />
                    </div>
                );
            })}
        </div>
    );
}

export function AccordionItem({
    children,
}: AccordionItemProps) {
    return <>{children}</>;
}

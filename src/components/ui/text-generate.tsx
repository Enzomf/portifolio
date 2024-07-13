"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string;
    className?: string;
}) => {
    const [scope, animate] = useAnimate();
    const containerRef = useRef(null);
    let wordsArray = words.split(" ");

    const isInView = useInView(containerRef);

    useEffect(() => {

        if(!isInView) return;
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2.5,
                delay: stagger(0.01),
            }
        );
    }, [scope.current, isInView]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {

                    if (word === "\n") {
                        return <br key={"br" + idx} />;
                    }
                    return (
                        <motion.span
                            key={word + idx}
                            className="text-white opacity-0"
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div ref={containerRef} className={cn("", className)}>
            <div className="mt-4">
                <div className=" text-white ">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};

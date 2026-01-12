import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
    value: number;
};

const CountUp = ({ value }: CountUpProps) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref, { once: true });

    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(count, value, {
            duration: 2,
            ease: "easeOut",
            delay: 0.3,
        });

        return controls.stop; // cleanup
    }, [isInView, value, count]);

    return (
        <motion.span ref={ref}>
            {rounded}
        </motion.span>
    );
};

export default CountUp;

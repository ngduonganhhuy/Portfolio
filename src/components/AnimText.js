import { animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import RedoAnimText from "./RedoAnimText";

export default function AnimText({ delay }) {
  const [done, setDone] = useState(false);
  const baseText = "Holmes";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeInOut",
      onComplete: () => {
        setDone(true);
      },
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RedoAnimText delay={delay + 1} />
    </>
  );
}

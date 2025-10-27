import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min.js";

const Background = ({ isDarkMode }) => {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);

    const getCSSColor = (variableName) => {
        return getComputedStyle(document.documentElement)
            .getPropertyValue(variableName)
            .trim();
    };

    useEffect(() => {
        if (vantaEffect) vantaEffect.destroy();

        const effect = GLOBE({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.5,
            scaleMobile: 1.0,
            color: 0xff3f81,
            color2: getCSSColor("--primary"),
            backgroundColor: getCSSColor("--background"),
        });

        setVantaEffect(effect);

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [isDarkMode]);

    return (
        <div
            ref={vantaRef}
            style={{
                position: "fixed",
                width: "100%",
                height: "100vh",
                overflowY: "scroll",
                zIndex: "-1"
            }}
        />
    );
};

export default Background;
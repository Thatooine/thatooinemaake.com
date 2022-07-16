import {useSpring, animated, useSpringRef, Controller, easings, config} from "react-spring";
import {useEffect, useRef} from "react";

export const FancyLoader = () => {
    const {number} = useSpring({
        from: {number: 0},
        number: 100,
        delay: 200,
        config: {
            ...config.molasses,
            duration: 2500,
        },
    })

    const styles = useSpring({
        loop: true,
        delay: 0,
        config: {
            ...config.molasses,
            duration: 40,
            damping: 0,
        },
        to: (() => {
            const to = []
            for (let val = -100; val <= 100; val += 5) {
                to.push({
                    x: val,
                    y: Math.sqrt(100 * 100 - Math.pow(val, 2))
                })
            }

            // reverse
            for (let val = 100; val >= -100; val -= 5) {
                to.push({
                    x: val,
                    y: -1 * Math.sqrt(100 * 100 - Math.pow(val, 2))
                })
            }

            return to
        })(),
        from: {
            x: -100,
            y: 0
        },
    })

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: 'center'
            }}
        >
            <animated.div
                style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    backgroundColor: '#46e891',
                    ...styles
                }}
            />
            <animated.div>
                {number.to(n => n.toFixed(0))}
            </animated.div>
        </div>
    )
}
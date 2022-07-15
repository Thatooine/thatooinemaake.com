import {useSpring, animated, useSpringRef, Controller} from "react-spring";
import {useEffect, useRef} from "react";

export const FancyLoader = () => {
    const props = useSpring({
        loop: true,
        to: [
            {opacity: 1, color: 'rgb(80,80,80)'},
            {opacity: 0, color: 'rgb(0,0,0)'},
        ],
        from: {opacity: 0, color: '#16b8f3'},
    })

    const styles = useSpring({
        loop: true,
        to: (() => {
            const to = []
            for(let val =  -10; val < 10; val++){
                to.push({
                    x: val,
                    y: 2 * val * val
                })
            }
            return to
        })(),
        from: {
            x: -10,
            y: 200
        },
    })

    return (
        <div>
            <animated.div
                style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: '#46e891',
                    ...styles
                }}
            />
            <animated.div style={props}>
                <div
                    style={{
                        fontFamily: "Papyrus",
                        fontSize: '12px',
                    }}
                >Loading
                </div>
            </animated.div>
        </div>
    )
}
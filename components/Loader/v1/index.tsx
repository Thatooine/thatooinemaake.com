import {useSpring, animated, useSpringRef} from "react-spring";
import {useEffect} from "react";

export const FancyLoader = () => {
    const props = useSpring({
        loop: true,
        to: [
            {opacity: 1, color: 'rgb(80,80,80)'},
            {opacity: 0, color: 'rgb(0,0,0)'},
        ],
        from: {opacity: 0, color: '#16b8f3'},
    })

    const ref = useSpringRef()
    const [style, animate] = useSpring(() => ({x: 0, y: 0}))

    useEffect(() => {
        console.log(ref)
        console.log(animate)
    })

    return (
        <div>
            <animated.div
                style={{
                    width: 80,
                    height: 80,
                    backgroundColor: '#46e891', borderRadius: 16,
                    ...style,
                }}
            />
            <animated.div style={props}>
                <div
                    style={{
                        fontFamily: "Papyrus",
                        fontSize: '12px',
                    }}
                >Loading</div>
            </animated.div>
        </div>
    )
}
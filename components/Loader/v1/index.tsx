import {useSpring, animated} from "react-spring";

export const FancyLoader = () => {
    const props = useSpring({
        loop: true,
        to: [
            {opacity: 1, color: 'rgb(80,80,80)'},
            {opacity: 0, color: 'rgb(0,0,0)'},
        ],
        from: {opacity: 0, color: '#16b8f3'},
    })

    return (
        <animated.div style={props}>
            <div
                style={{
                    fontFamily: "Papyrus",
                    fontSize: '12px',
                }}
            >Loading</div>
        </animated.div>
    )
}
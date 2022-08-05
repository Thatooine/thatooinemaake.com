import type {NextPage} from 'next'
import {FancyLoader} from "../components/Loader/v1";
import Link from "next/link";


// 1. The fancy loader must potentially fade out after loading happens
// 2. Slight change on the background color density (darker blue)
// 3. Display the main landing page
const App: NextPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
                alignItems: 'center',
                justifyContent: "center",
                backgroundImage: "radial-gradient(circle, rgb(49, 144, 228) 0%, rgb(29, 84, 166) 100%)"
            }}
        >
            <FancyLoader/>
        </div>
    )
}

export default App

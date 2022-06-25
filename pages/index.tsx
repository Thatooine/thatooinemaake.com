import type {NextPage} from 'next'
import {FancyLoader} from "../components/Loader/v1";

const App: NextPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
                alignItems: 'center',
                justifyContent: "center",
                backgroundColor: "#16b8f3"
            }}
        >
            <FancyLoader/>
        </div>
    )
}

export default App

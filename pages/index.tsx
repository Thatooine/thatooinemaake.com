import type {NextPage} from 'next'
import { AppShell, Navbar, Header } from '@mantine/core';
import {FancyLoader} from "../components/loader/v1";

// 1. The fancy loader must potentially fade out after loading happens
// 2. Slight change on the background color density (darker blue)
// 3. Display the main landing page
const App: NextPage = () => {
    return (
            <AppShell
                padding="md"
                header={
                <Header
                    styles={() => ({
                        root: {
                            border: "none",
                            backgroundColor: "rgb(225, 192, 58)",
                        }
                    })}
                    height={60}
                    p="xs"
                >
                    <div>Header Content</div>
                </Header>}
                styles={(theme) => ({
                    main: {
                        backgroundImage: "radial-gradient(circle, rgb(49, 144, 228) 0%, rgb(29, 84, 205) 193%)"
                    },
                })}
            >
                <div
                    style={{
                        display: 'flex',
                        height: '100vh',
                        alignItems: 'center',
                        justifyContent: "center",
                    }}
                >
                    <FancyLoader/>
                </div>
            </AppShell>
    )
}

export default App

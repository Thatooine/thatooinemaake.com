import type {NextPage} from 'next'
import {AppShell, Header} from '@mantine/core';
import {Button} from '@mantine/core';
import {Text} from '@mantine/core';
import sunLogo from "/images/sun.svg"

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
                            display: "grid",
                            gridTemplateColumns: '50px 1fr auto'

                        }
                    })}
                    height={90}
                    p="xs"
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: 'center'
                        }}
                    >
                        <img
                            alt="" width="100%"
                            src={sunLogo}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row-reverse",
                            gap: '8px',
                            width: "100%",
                            justifyContent: "center",
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            color={"white"}
                        >
                            Gallery
                        </Text>
                        <Text
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                            color={"white"}
                        >
                            Blog
                        </Text>
                        <Text
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                            color={"white"}
                        >
                            About
                        </Text>
                    </div>
                    <Button
                        style={{
                            alignSelf: 'center',
                            borderRadius: '20px'
                        }}
                        variant={"gradient"}
                        gradient={{from: 'indigo', to: 'cyan', deg: 60}}
                    >
                        Resume
                    </Button>
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
            </div>
        </AppShell>
    )
}

export default App

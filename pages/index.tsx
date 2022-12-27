import type {NextPage} from 'next'
import {AppShell, Header} from '@mantine/core';
import {Button, Avatar} from '@mantine/core';
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
                            size={24}
                            color={"white"}
                        >
                            Gallery
                        </Text>
                        <Text
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                            size={24}
                            color={"white"}
                        >
                            Blog
                        </Text>
                        <Text
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                            size={24}
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
                    width: '100%',
                    gap: "40px",
                    justifyContent: "center",
                    marginTop: '40px'
                }}
            >
                <div  style={{maxWidth: "600px", position: "relative", top: "80px"}}>
                    <Text sx={{fontWeight: 600}} size={24} color={"white"} >
                        HELLO,
                    </Text>
                    <Text sx={{fontWeight: 600}} size={50} color={"white"} >
                        I'm Thato Maake
                    </Text>
                    <Text size={18} color={"white"} >
                        I'm software engineer working in the finTech industry for the past 5 years, specializing in the development of web applications and integration with blockchain technologies, particularly Stellar.
                        Throughout my career, I have gained a wealth of experience in building efficient and reliable systems that provide valuable insights to clients. Currently am building innovative and disruptive
                        products in the capital markets at Mesh.Trade.

                    </Text>
                </div>
                <Avatar
                    radius={100}
                    size={500}
                    src={'profilepic.jpg'}
                />
            </div>
        </AppShell>
    )
}

export default App

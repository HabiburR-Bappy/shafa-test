import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Shafa Care</title>
                <meta name="keyboard" content="Shafa, Care, Doctor" />
            </Head>
            <div>
                <main>{children}</main>
            </div>
        </>
    )
}

export default Layout
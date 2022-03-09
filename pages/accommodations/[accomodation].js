import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Accommodation() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <h1 className="">
                    Accommodation
                </h1>

                <p className="">
                    <Link href="/">Back home</Link>
                </p>
            </Layout>
        </div>
    )
}
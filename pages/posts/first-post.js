import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../Components/Layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Posts</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                {/*If you need to link to an external page outside the Next.js app, just use an <a> tag without Link*/}
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
        </Layout>
    )
}
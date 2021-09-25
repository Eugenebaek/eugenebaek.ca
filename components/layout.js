import Head from 'next/head'
import Sidebar from "./sidebar";

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>Layouts Example</title>
            </Head>

            <main>
                <div className='flex gap-10 mx-10'>
                    <div className='w-2/3 pt-36'>{children}</div>
                    <div className='w-1/3 h-screen sticky top-0'><Sidebar/></div>
                </div>
            </main>
        </>
    )
}

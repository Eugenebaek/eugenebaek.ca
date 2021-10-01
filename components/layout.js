import Head from 'next/head'
import React from "react";
import Link from "next/link";

export default function Layout({children}) {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    return (
        <>
            <Head>
                <title>Eugene Baek</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className='font-Roboto font-light text-xs sm:text-sm'>
                <div className='flex gap-2 mx-2 sm:gap-6 sm:mx-6'>
                    <div className='w-full md:w-3/4 pt-36'>{children}</div>
                    <div className='hidden md:flex w-1/4 h-screen sticky top-0'>
                        <Sidebar/>
                    </div>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden menu-button fixed top-2 right-2 sm:top-6 sm:right-6 z-50">
                        {(sidebarOpen) ? 'x' : '+'}
                    </button>
                    {(sidebarOpen)
                    ? <MobileSidebar/>
                    : ''}
                </div>
            </div>
        </>
    )
}

function MobileSidebar() {
    return (
        <nav className='fixed w-full h-screen bg-white'>
            <div className='fixed py-16 uppercase text-2xl'>
                <Link href="/">
                    <a onClick={() => setSidebarOpen(!sidebarOpen)}>Eugene Baek</a>
                </Link>
            </div>
            <div className='flex flex-col pt-36'>
                <Link href="/about">
                    <a onClick={() => setSidebarOpen(!sidebarOpen)}>About</a>
                </Link>
                <Link href="/portfolio">
                    <a onClick={() => setSidebarOpen(!sidebarOpen)}>Portfolio</a>
                </Link>
                <Link href="/blog">
                    <a onClick={() => setSidebarOpen(!sidebarOpen)}>Blog</a>
                </Link>
            </div>
        </nav>
    )
}

function Sidebar() {
    return (
        <nav>
            <div className='fixed py-16 uppercase'>
                <Link href="/">
                    <a>Eugene Baek</a>
                </Link>
            </div>
            <div className='flex flex-col pt-36'>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/portfolio">
                    <a>Portfolio</a>
                </Link>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </div>
        </nav>
    )
}
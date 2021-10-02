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

            <div className='font-Roboto font-extralight text-xs sm:text-sm'>
                <div className='flex gap-2 mx-2 sm:gap-12 sm:mx-6'>
                    <div className='w-full md:w-3/4 pt-44'>{children}</div>
                    <div className='hidden md:flex w-1/4 h-screen sticky top-0'>
                        <Sidebar/>
                    </div>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden menu-button fixed top-4 right-2 z-50">
                        {(sidebarOpen) ? '< close >' : '< open >'}
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
        <nav className='fixed w-full h-screen bg-white text-base'>
            <div className='fixed py-20 uppercase'>
                <Link href="/">
                    <a onClick={() => setSidebarOpen(!sidebarOpen)}>Eugene Baek</a>
                </Link>
            </div>
            <div className='flex flex-col pt-44 gap-y-1.5'>
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
        <nav className=''>
            <div className='fixed py-20 uppercase'>
                <Link href="/">
                    <a>Eugene Baek</a>
                </Link>
            </div>
            <div className='flex flex-col pt-44 gap-y-0.5'>
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
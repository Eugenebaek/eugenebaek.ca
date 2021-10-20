import Head from 'next/head'
import React from "react";
import Link from "next/link";
import {misc, music, movies, socials} from "../public/sidebar_content";

export default function Layout({children}) {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const movies_and_shows = [];

    return (
        <>
            <Head>
                <title>Eugene Baek</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className='font-Roboto font-light text-xs'>
                <div className='flex gap-2 mx-2 sm:gap-12 sm:mx-6'>
                    <div className='w-full md:w-3/4 pt-44'>{children}</div>
                    <div className='hidden md:flex w-1/4 h-screen sticky top-0'>
                        <Sidebar/>
                    </div>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="md:hidden menu-button fixed top-4 right-2 z-50">
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
        <nav className='fixed w-screen h-screen bg-white text-sm'>
            <div className="my-4 mx-2">
                <div className='uppercase'>
                    <Link href="/">
                        <a onClick={() => setSidebarOpen(!sidebarOpen)}>Eugene Baek</a>
                    </Link>
                </div>
                <div className='flex flex-col pt-10 gap-y-1.5'>
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
                <div className="text-xs">
                    <div className='flex flex-col pt-10 gap-y-0.5'>
                        {misc.map((misc) => (
                            <Link href={misc.link}>
                                <a target="_blank">{misc.message}</a>
                            </Link>
                        ))}
                    </div>
                    <div className='flex flex-col pt-4 gap-y-0.5'>
                        <h1>~music~</h1>
                        {music.map((music) => (
                            <Link href={music.link}>
                                <a target="_blank">{music.title} - {music.artist}</a>
                            </Link>
                        ))}
                    </div>
                    <div className='flex flex-col pt-4 gap-y-0.5'>
                        <h1>~movies/shows~</h1>
                        {movies.map((movie) => (
                            <Link href={movie.link}>
                                <a target="_blank">{movie.title} - {movie.director}</a>
                            </Link>
                        ))}
                    </div>
                    <div className='flex flex-row pt-4 gap-y-0.5'>
                        <div className="flex-1">
                            <h1>ᕦ(ˇò_ó)ᕤ</h1>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col">
                                {socials.map((social) => (
                                    <Link href={social.link}>
                                        <a target="_blank">> {social.title}</a>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function Sidebar() {

    return (
        <nav className=''>
            <div className='fixed py-20 uppercase text-sm'>
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

            <div className='flex flex-col pt-10 gap-y-0.5'>
                {misc.map((misc) => (
                    <Link href={misc.link}>
                        <a target="_blank">{misc.message}</a>
                    </Link>
                ))}
            </div>

            <div className='flex flex-col pt-10 gap-y-0.5'>
                <h1>~music~</h1>
                {music.map((music) => (
                    <Link href={music.link}>
                        <a target="_blank">{music.title} - {music.artist}</a>
                    </Link>
                ))}
            </div>
            <div className='flex flex-col pt-10 gap-y-0.5'>
                <h1>~movies/shows~</h1>
                {movies.map((movie) => (
                    <Link href={movie.link}>
                        <a target="_blank">{movie.title} - {movie.director}</a>
                    </Link>
                ))}
            </div>
            <div className='flex flex-row pt-10 gap-y-0.5'>
                <div className="flex-1">
                    <h1>ᕦ(ˇò_ó)ᕤ</h1>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col">
                        {socials.map((social) => (
                            <Link href={social.link}>
                                <a target="_blank">> {social.title}</a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}
import Link from 'next/link'

export default function Sidebar() {
    return (
        <nav>
            <div className='fixed py-16'>
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

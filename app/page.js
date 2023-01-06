import Link from 'next/link';

export default function Index() {
    return (
        <>
        <h1> The Home Page</h1>
        <nav>
            <Link href='/about'>About</Link>
            <Link href='/memorials'>Memorials</Link>
        </nav>
        </>
    )
}
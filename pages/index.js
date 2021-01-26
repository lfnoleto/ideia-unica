import Link from 'next/link'

function Home (){
    return (
        <div>
            <h1>Home</h1>
            <Link href= "/sobre">
                <a >acessar página sobre</a>
            </Link>

            <Link href= "/Tempo">
                <a >acessar página sobre</a>
            </Link>
        </div>)
}

export default Home;
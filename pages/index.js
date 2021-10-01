import Head from 'next/head'
import clientPromise from "../lib/mongodb";
import Date from "../components/date";

export default function Home({home}) {
    return (
            <main>
                {home.map((home) => (
                    <div key={home.id} className='mb-16'>
                        <div>
                            {home.images.map((image, index) => <img key={index} className='mb-2 sm:mb-6' src={image}/>)}
                        </div>
                        <div className='flex flex-col sm:flex-row gap-x-4'>
                            <div className='flex-1 mb-4 sm:mb-0'>
                                <h2>{home.title}</h2>
                                <Date dateString={home.date}/>
                                <h2>{home.subtitle}</h2>
                            </div>
                            <div className='flex-1'>
                                <p>{home.message}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
    )
}

export async function getServerSideProps(context) {
    const client = await clientPromise
    const db = await client.db('portfolio');

    const home = await db
        .collection("home")
        .find({})
        .toArray();

    return {
        props: {
            home: JSON.parse(JSON.stringify(home))
        }
    }
}

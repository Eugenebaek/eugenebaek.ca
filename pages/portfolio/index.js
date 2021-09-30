import Head from "next/head";
import Date from "../../components/date";
import clientPromise from "../../lib/mongodb";

export default function Portfolio({projects}) {
    return (
            <main className='overflow-x-scroll'>
                <table className='table-fixed divide-y'>
                    <thead>
                    <tr className=''>
                        <th scope='col' className="w-1/3 text-left uppercase tracking-wider">Title</th>
                        <th scope='col' className="w-1/3 text-left uppercase tracking-wider">Technology</th>
                        <th scope='col' className="w-1/3 text-left uppercase tracking-wider">Language</th>
                        <th scope='col' className="w-1/12 text-left uppercase tracking-wider">Date</th>
                    </tr>
                    </thead>
                    <tbody className='divide-y'>
                    {projects.map((project) => (
                        <tr>
                            <td className='whitespace-nowrap pr-20'><a href={project.link}>{project.title}</a></td>
                            <td className='whitespace-nowrap pr-20'>{project.technology}</td>
                            <td className='whitespace-nowrap pr-20'>{project.languages}</td>
                            <td className='whitespace-nowrap pr-20'><Date dateString={project.date}/></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </main>
    )
}

export async function getServerSideProps(context) {
    const client = await clientPromise
    const db = await client.db('portfolio');

    const projects = await db
        .collection("projects")
        .find({})
        .toArray();

    return {
        props: {
            projects: JSON.parse(JSON.stringify(projects))
        }
    }
}

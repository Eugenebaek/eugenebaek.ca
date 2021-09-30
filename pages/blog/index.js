import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";
import clientPromise from "../../lib/mongodb";

export default function Blog({blogs}) {

    return (
            <main className='overflow-x-scroll'>
                <table className='table-fixed divide-y'>
                    <thead>
                    <tr className=''>
                        <th scope='col' className="w-1/3 text-left uppercase tracking-wider">Title</th>
                        <th scope='col' className="w-1/3 text-left uppercase tracking-wider">Description</th>
                        <th scope='col' className="w-1/3 text-left uppercase tracking-wider">Topic</th>
                        <th scope='col' className="w-1/12 text-left uppercase tracking-wider">Date</th>
                    </tr>
                    </thead>
                    <tbody className='divide-y'>
                    {blogs.map((blog) => (
                        <tr>
                            <td className='whitespace-nowrap pr-20'><a href={`/blog/${blog._id}`}>{blog.title}</a></td>
                            <td className='whitespace-nowrap pr-20'>{blog.description}</td>
                            <td className='whitespace-nowrap pr-20'>{blog.topic}</td>
                            <td className='whitespace-nowrap pr-20'><Date dateString={blog.date}/></td>
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

    const blogs = await db
        .collection("blog")
        .find({})
        .toArray();

    return {
        props: {
            blogs: JSON.parse(JSON.stringify(blogs))
        }
    }
}

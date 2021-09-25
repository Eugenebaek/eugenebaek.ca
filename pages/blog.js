import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import clientPromise from "../lib/mongodb";

export default function Blog({blogs}) {
    return (
        <div className="container">
            <main>
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
                            <td>{blog.title}</td>
                            <td>{blog.description}</td>
                            <td>{blog.topic}</td>
                            <td><Date dateString={blog.date}/></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </main>
        </div>
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

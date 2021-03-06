import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";
import Date from "../../components/date";
import clientPromise from "../../lib/mongodb";

//cant seem to figure out how to import blogposts with slugs. The blog object im trying to render is returning null

export default function BlogDetails({blogpost}) {
    return (
        <div className="container">
            <main>
                <p>{blogpost}</p>
            </main>
        </div>
    )
}

// export async function getServerSideProps({params}) {
//     const client = await clientPromise
//     const db = await client.db('portfolio');
//
//     console.log(params.id + " : " + typeof params.id)
//
//     const blogs = await db
//         .collection("blog")
//         .findOne({
//             title: "blog 1"
//         })
//
//     console.log(blogs._id + " : " + typeof blogs._id)
//
//     return {
//         props: {
//             blogs: JSON.parse(JSON.stringify(blogs))
//         }
//     }
// }


export async function getStaticPaths() {
    return{
        paths: [],
        fallback: true,
    }
}

export async function getStaticProps({params}) {
    const client = await clientPromise
    const db = await client.db('portfolio');

    const blog = await db
        .collection("blog")
        .findOne({
            _id: params.id
        })

    console.log(blog);

    return {
        props: {
            blogpost: JSON.parse(JSON.stringify(blog)),
        },
        revalidate: 1,
    }
}

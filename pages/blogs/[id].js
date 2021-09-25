import Head from "next/head";
import Date from "../../components/date";

export default function Post({postData}) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1>{postData.title}</h1>
                <div>
                    <Date dateString={postData.date}/>
                </div>
            </article>
        </>
    )
}
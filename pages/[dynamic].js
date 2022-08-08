import {useRouter} from "next/router";
import Head from "next/head";

const DynamicRoute = () => {
    const router = useRouter();
    const query = router.query.dynamic;

    // console.log("router",router)
    // console.log("query",query)
    return <div>
        <Head>
            <title>{query}</title>
        </Head>
        In dynamic route: {query}</div>
}


export default DynamicRoute;
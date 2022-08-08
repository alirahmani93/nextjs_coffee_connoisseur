import Document, {Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {

    render() {
        return <Html lang="en">
            <Head>
                <title>Coffee Connoisseur</title>

                <link
                    rel={"stylesheet"}
                    href={"/fonts/IBMPlexSans-Bold.ttf"}
                    as={"font"}
                    crossOrigin={"anonymous"}
                />
                <link
                    rel={"stylesheet"}
                    href={"/fonts/IBMPlexSans-Regular.ttf"}
                    as={"font"}
                    crossOrigin={"anonymous"}
                />
                <link
                    rel={"stylesheet"}
                    href={"/fonts/IBMPlexSans-SemiBold.ttf"}
                    as={"font"}
                    crossOrigin={"anonymous"}
                />

            </Head>

            <body>
            <Main>

            </Main>
            <NextScript/>
            </body>
        </Html>;
    }
}

export default MyDocument;
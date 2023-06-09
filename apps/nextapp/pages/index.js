import Head from "next/head";

// Import the shared function into the Next.js application
import {
  getSiteInfo,
  addNumber,
  subNumber,
  mulNumber,
  divNumber,
} from "site-info";

export default function Home() {
  let siteInfo = getSiteInfo(); //Define a variable to get the values
  let add = addNumber(4, 2);
  let div = divNumber(4, 2);
  let sub = subNumber(4, 2);
  let mul = mulNumber(4, 2);
  return (
    <div>
      <Head>
        <title>{siteInfo.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Output the site title and subtitle to the screen*/}
      <main>
        <h1>Welcome to {siteInfo.title}</h1>
        <p>{siteInfo.subtitle}</p>
        <p>
          For 4 and 2 your result is: add= {add}, sub = {sub}, mul = {mul}, div
          = {div}
        </p>
      </main>
    </div>
  );
}

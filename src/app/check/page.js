
import Head from 'next/head';
import dynamic from 'next/dynamic'
import Section from '../../components/Section/Section'

const DynamicMap = dynamic(() => import('../../components/Map'), {
  ssr: false
});

export default function Home() {
  return (
   <div> 
      <Head>
        <title>Geo-Tagging of CCTV Cameras</title>
        <meta name="description" content="Create mapping apps with Next.js Leaflet Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <div>
          <h1 >
          Geo-Tagging of CCTV Cameras
          </h1>
          <main>
            <DynamicMap />
          </main>
        </div>
      </Section>
   </div> 
  )
}
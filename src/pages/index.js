import Head from 'next/head';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';

import styles from '@styles/Home.module.scss';

const DEFAULT_CENTER = [38.907132, -77.036546]

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Geo-Tagging of CCTV Cameras</title>
        <meta name="description" content="Create mapping apps with Next.js Leaflet Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
          <h1 className={styles.title}>
          Geo-Tagging of CCTV Cameras
          </h1>

          <Map className={styles.homeMap} width="800" height="400" center={{lat:26.9124, lng:75.7396}} zoom={12}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={{lat:26.9124, lng:75.7396}}>
                  <Popup>
                    Address <br /> Camera Details <br/> <button> View Livestream </button> <br/> <button> Contact Owner </button>
                  </Popup>
                </Marker>
              </>
            )}
          </Map>

          <p className={styles.description}>
            <code className={styles.code}></code>
          </p>

          <p className={styles.view}>
            <Button href="">Go to Home</Button>
          </p>
        </Container>
      </Section>
    </Layout>
  )
}

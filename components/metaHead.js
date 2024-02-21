import Head from 'next/head'
import { useRouter } from 'next/router'

export default function MetaHead({ pageMeta }) {
  const router = useRouter()
  const meta = {
    title: 'Packult',
    description: 'Group of packaging experts committed to the cause of better, smarter and sustainable packaging',
    type: 'website',
    url: 'www.packult.com',
    ...pageMeta
  }
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:url" content={meta.url + router.pathname} />
      <meta property="og:type" content={meta.type} />
      {/* <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} /> */}
      <meta property="og:sitename" content={"Packult"} />
      { meta.date && <meta property="article:published_time" content={meta.date} /> }
    </Head>
  )
}

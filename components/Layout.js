import Head from 'next/head';
import Header from './Header';

export default function Layout({ title, description, keyword, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keyword' content={keyword} />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
      </Head>

      <div className='layout'>

        <Header />

        <main>
          {children}
        </main>

        <p>footer</p>

      </div>
    </>
  )
}

Layout.defaultProps = {
  title: 'Konsept Furniture Store',
  description: 'Shop Konsept to find the best in home essentials such as modern furnitures, kitchen appliances & more.',
  keywords: 'furniture, kitchen appliances, outdoor, office, modern designs'
}


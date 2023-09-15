import Head from 'next/head'
import Header from '@/src/components/header/header'
import Footer from '@/src/components/footer/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div>
        <section>
          <h2>Nossa organização</h2>
          <p>
            <section id="ideia">
              <h3>Pagina Inicial</h3>
              <p>Expondo a situação</p>

              <h3>Nossa Ideia</h3>
              <p>Ideia de solução</p>

              <h3>Organograma</h3>
              <p>Organização da página</p>

              <h3>Exemplo projeto</h3>
              <p>Demonstração do projeto em Figma</p>

              <h3>Nomes Equipe</h3>
              <p>Integrantes e github</p>

            </section>
          </p>

        </section>
        <Footer />
      </div>

    </>
  )
}
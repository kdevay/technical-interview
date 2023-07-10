import Head from 'next/head';

const metadata = {
  description: 'Our non-profit connects workers with the right tools, resources and support to make confident career shifts. We’ll help you find career training, good wage jobs and opportunities for promising career growth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <meta name='description' content={metadata.description}></meta>
        <title>SkillUp Coalition</title>
      </Head>

      <div>
        {children}
      </div>
    </>
  )
}

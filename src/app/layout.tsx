export const metadata = {
  title: '期民实业',
  description: 'test'
}

export default function RootLayout({
  children
}: {children: React.ReactNode}) {
  return (
    <>
      <html>
        <head></head>
        <body>
          <header>header</header>
          {children}
          <footer>footer</footer>
        </body>
      </html>
    </>
  )
}
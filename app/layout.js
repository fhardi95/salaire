export default function RootLayout({children}){
  return (
    <html>
      <body>
        <nav>
          <a href="/">Home</a> | 
          <a href="/salaire-net/3000">Salaire</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
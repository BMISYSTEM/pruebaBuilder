
import "./globals.css";



interface props {
    children: React.ReactNode;
}

export default function RootLayout({children}: Readonly<props>) {
  return (
    <html lang="en">
      <body
        className={`  ` }
      >
        {children}
      </body>
    </html>
  );
}

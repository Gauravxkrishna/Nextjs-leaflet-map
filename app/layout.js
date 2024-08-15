// src/app/layout.js
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Leaflet Map Example</title>
        <meta name="description" content="A simple map with React Leaflet and Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}

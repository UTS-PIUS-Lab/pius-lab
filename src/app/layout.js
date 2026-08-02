"use client";
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>PIUS Lab — Physical Intelligence and Uncrewed Systems Lab | UTS</title>
        <meta name="description" content="Physical Intelligence and Uncrewed Systems Lab at the University of Technology Sydney. Research in autonomous drones, swarms, AI and real-world deployment." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#030712] antialiased">
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

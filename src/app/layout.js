"use client";
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: the inline script below may add the `dark`
    // class to <html> before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply the saved theme (or the OS preference) before first paint, so
            there's no flash of the wrong theme. ThemeToggle writes "theme". */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=null;try{t=localStorage.getItem('theme')}catch(e){}var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark')})();`,
          }}
        />
        <title>PIUS Lab — Physical Intelligence and Uncrewed Systems Lab | UTS</title>
        <meta name="description" content="Physical Intelligence and Uncrewed Systems Lab at the University of Technology Sydney. Research in autonomous drones, swarms, AI and real-world deployment." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-ink antialiased">
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

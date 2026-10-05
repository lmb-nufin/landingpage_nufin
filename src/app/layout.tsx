import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { MOTION_ENABLED } from "@/components/landing/motion/config";

export const metadata: Metadata = {
  metadataBase: new URL('https://nufin.com.mx'),
  title: 'Nufin: Tu Prestamo Sin Buro',
  description: 'Préstamos al instante, sin buró. De $500 a $7,000 MXN directos a tu cuenta.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={MOTION_ENABLED ? "!scroll-smooth motion-on" : "!scroll-smooth"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Plus+Jakarta+Sans:wght@800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans text-gray-900 bg-white overflow-x-hidden">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

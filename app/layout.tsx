import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Open Sauce One untuk heading
const openSauceOne = localFont({
  src: [
    {
      path: "../public/OpenSauceOne-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/OpenSauceOne-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-open-sauce-one",
  display: "swap",
});

// Open Sauce Sans untuk body text
const openSauceSans = localFont({
  src: [
    {
      path: "../public/OpenSauceSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/OpenSauceSans-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-open-sauce-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tracking.torch.id"),
  title: "Tracking Pengiriman Torch | Lacak Status Order & Paket Anda",
  description:
    "Lacak status pengiriman pesanan Torch secara real-time. Masukkan nomor resi untuk melihat lokasi paket, riwayat perjalanan, kurir, dan estimasi waktu tiba.",
  icons: {
    icon: [
      { url: "/avatar.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/avatar.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Tracking Pengiriman Torch | Lacak Status Order & Paket Anda",
    description:
      "Lacak status pengiriman pesanan Torch secara real-time dengan dukungan Lion Parcel & SiCepat.",
    url: "https://tracking.torch.id",
    siteName: "Torch Indonesia",
    images: [
      {
        url: "/TORCH_LOGOS.png",
        width: 1200,
        height: 630,
        alt: "Tracking Pengiriman Torch",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tracking Pengiriman Torch",
    description: "Lacak status pengiriman pesanan Torch secara real-time.",
    images: ["/TORCH_LOGOS.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${openSauceSans.variable} ${openSauceOne.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
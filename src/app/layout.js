'use client'
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import ThemeProvider from "./provider";
import { theme } from "@/libs/muiThemeOptions";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>
        Traffic Report
      </title>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <MuiThemeProvider theme={theme}>
           {children}
          </MuiThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

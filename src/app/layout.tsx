import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PDFLoader } from "langchain/document_loaders"; // Adjust path based on updated module
import { NextRequest, NextResponse } from "next/server";
import { PineconeClient } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";


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

export const metadata = {
  title: "PDF Chatbot",
  description: "Generate a chatbot from a PDF",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


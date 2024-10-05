# Pdf-Chatbot

## Overview

This project is designed to leverage Langchain for document loading and embedding, using Pinecone for vector storage. The application allows users to load PDF documents, process their content, and store embeddings in a Pinecone database.

## Features

- Load PDF documents using `PDFLoader`.
- Generate embeddings with OpenAI's embeddings model.
- Store and retrieve document embeddings using Pinecone.
- Built with Next.js for a responsive web application experience.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v14 or later)
- [npm](https://www.npmjs.com/get-npm) (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables:

   Create a `.env` file in the root of your project and add your Pinecone and OpenAI API keys:

   ```plaintext
   PINECONE_API_KEY=your_pinecone_api_key
   OPENAI_API_KEY=your_openai_api_key
   ```

### Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Upload your PDF documents through the provided interface, and the application will process and embed them using the Langchain library.

### Example Code

Here’s a simple example of how to use `PDFLoader` and store embeddings in Pinecone:

```javascript
import { PDFLoader } from "langchain/loaders"; // Update the import based on the correct path
import { PineconeClient } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";

// Load PDF
const loader = new PDFLoader("path/to/document.pdf");
const documents = await loader.load();

// Generate embeddings
const embeddings = new OpenAIEmbeddings();
const embeddedDocs = await embeddings.embedDocuments(documents);

// Store in Pinecone
const pineconeClient = new PineconeClient();
const pineconeIndex = pineconeClient.Index("your_index_name");
await pineconeIndex.upsert(embeddedDocs);
```

## Troubleshooting

- If you encounter issues with `PDFLoader`, ensure you are using the correct import path based on the `langchain` package version.
- Make sure your API keys are valid and have the necessary permissions.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Langchain](https://langchain.com/)
- [Pinecone](https://www.pinecone.io/)
- [OpenAI](https://openai.com/)

## Module

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

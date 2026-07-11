# 🗜️ Huffman File Compression Tool

> A modern file compression application built with **React**, **TypeScript**, and **Huffman Coding**. The project implements a complete end-to-end compression pipeline using a custom Priority Queue, Binary Tree, Greedy Algorithm, and Bit Packing, along with an interactive Huffman Tree visualization.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss)

---

## 📖 Overview

This project demonstrates the complete implementation of **Huffman Coding**, one of the most widely used **lossless compression algorithms**.

Unlike basic Huffman coding demonstrations, this application provides a complete compression workflow:

- Compress text into a custom **`.huff`** file format
- Pack binary data into bytes for real compression
- Upload and decompress previously compressed files
- Visualize the generated Huffman Tree interactively
- Display compression statistics and Huffman codes

The project was built to demonstrate advanced **Data Structures & Algorithms**, **TypeScript**, and **React** development.

---

# ✨ Features

## Compression

- Huffman Encoding
- Huffman Decoding
- Custom `.huff` File Format
- Bit Packing
- Bit Unpacking
- Upload `.txt`
- Download `.huff`
- Upload `.huff`
- Restore Original Text

---

## Data Structures

- Custom Priority Queue (Min Heap)
- Binary Tree
- Huffman Tree
- Frequency Map

---

## Algorithms

- Greedy Algorithm
- Huffman Coding
- Depth First Search (DFS)
- Tree Traversal
- Binary Encoding
- Binary Decoding

---

## Visualization

- Interactive Huffman Tree
- React Flow Integration
- Zoom & Pan
- Node Inspection
- Huffman Code Table

---

## Statistics

- Original Size
- Compressed Size
- Compression Ratio
- Bits Saved
- Frequency Table

---

## User Experience

- Drag & Drop Upload
- File Upload
- File Download
- Responsive Dashboard
- Modern UI


---


# 🏗️ System Architecture

```mermaid
flowchart LR

A[Input Text]
-->B[Frequency Analysis]
-->C[Priority Queue]
-->D[Build Huffman Tree]
-->E[Generate Huffman Codes]
-->F[Encode Text]
-->G[Bit Packing]
-->H[Create .huff File]
```

---

# 🔄 Compression Pipeline

```mermaid
flowchart LR

A[Input Text]

-->B[Frequency Map]

-->C[Priority Queue]

-->D[Huffman Tree]

-->E[Generate Codes]

-->F[Binary Encoding]

-->G[Bit Packing]

-->H[Custom Huffman File]

-->I[Download]
```

---

# 🔄 Decompression Pipeline

```mermaid
flowchart LR

A[Upload .huff]

-->B[Read Metadata]

-->C[Rebuild Frequency Map]

-->D[Rebuild Huffman Tree]

-->E[Bit Unpacking]

-->F[Decode Binary]

-->G[Original Text]
```

---

# 📂 Project Structure

```text
file-compression-tool/

src/

├── algorithms/
│   ├── BitPacker.ts
│   ├── BitUnpacker.ts
│   ├── HuffmanDecoder.ts
│   ├── HuffmanEncoder.ts
│   ├── HuffmanNode.ts
│   ├── HuffmanTree.ts
│   └── PriorityQueue.ts
│
├── components/
│   ├── AppHeader.tsx
│   ├── Controls.tsx
│   ├── DropZone.tsx
│   ├── OutputPanel.tsx
│   ├── StatsGrid.tsx
│   ├── CodeTable.tsx
│   ├── HuffmanTreeView.tsx
│   └── ...
│
├── types/
│
├── utils/
│   ├── compress.ts
│   ├── decompress.ts
│   ├── CompressionStats.ts
│   └── createHuffmanFile.ts
│
├── tests/
│
└── App.tsx
```

---

# 🛠️ Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS

---

## Visualization

- React Flow

---

## Algorithms

- Huffman Coding
- Priority Queue
- Binary Tree
- Greedy Algorithm

---


# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/VardaanThakur-1902/file-compression-tool.git
```

Navigate into the project

```bash
cd file-compression-tool
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

---


# 📈 Time Complexity

| Operation | Complexity |
|------------|-----------|
| Frequency Count | O(n) |
| Build Priority Queue | O(k log k) |
| Build Huffman Tree | O(k log k) |
| Generate Codes | O(k) |
| Encode Text | O(n) |
| Decode Text | O(n) |
| Bit Packing | O(n) |
| Bit Unpacking | O(n) |

Where:

- **n** = Number of characters
- **k** = Number of unique characters

---

# 🧠 Data Structures Used

- Priority Queue (Min Heap)
- Binary Tree
- Hash Map
- Map
- Arrays
- Uint8Array

---

# 📚 Algorithms Used

- Huffman Coding
- Greedy Algorithm
- Depth First Search
- Binary Tree Traversal
- Bit Manipulation

---

# 📦 Custom Huffman File Format

Each `.huff` file stores:

```text
Magic Number

Version

Padding Information

Frequency Table

Compressed Binary Data
```

This allows compressed files to be restored independently without requiring the original Huffman tree.

---

# 🚀 Future Improvements

- Binary Header Format
- Multi-file Compression
- Folder Compression
- Password Protection
- AES Encryption
- Streaming Compression
- File Explorer Integration
- Multi-threaded Compression
- Compression Benchmark Charts
- Desktop Version (Electron)

---

# 📖 Learning Outcomes

This project demonstrates practical implementation of:

- Priority Queue
- Binary Heap
- Binary Trees
- Huffman Coding
- Greedy Algorithms
- Binary Encoding
- Binary Decoding
- Bit Manipulation
- React Component Architecture
- TypeScript
- File Handling
- Custom File Formats
- Interactive Data Visualization

---

# 👨‍💻 Author

**Vardaan Thakur**

B.Tech Computer Science Engineering

GitHub: https://github.com/VardaanThakur-1902

LinkedIn: https://linkedin.com/in/vardaan-thakur

---

# ⭐ If you found this project useful, consider giving it a star!
import Head from "next/head";
import { useState } from "react";

import FileQandAArea from "../components/FileQandAArea";
import { FileLite } from "../types/file";
import FileUploadArea from "../components/FileUploadArea";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FileQandA() {
  const [files, setFiles] = useState<FileLite[]>([]);

  return (
    <div className="flex items-left text-left h-screen flex-col">
      <Head>
        <title>DocGPTio</title>
      </Head>
      <Navbar /> {/* Add the Navbar component */}
      <div className="max-w-3xl mx-auto m-8 space-y-8 text-gray-800">
     

        <div className="">
          To search for answers from the content in your files, upload them here
          and the system will to find answers from the relevant documents.
        </div>

        <FileUploadArea
          handleSetFiles={setFiles}
          maxNumFiles={75}
          maxFileSizeMB={30}
        />

        <FileQandAArea files={files} />
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}

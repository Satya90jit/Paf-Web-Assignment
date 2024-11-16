import { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState<any>(null);

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="p-4">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-dashed border-2 border-gray-300 p-4 rounded-md"
      >
        {file ? (
          <p>File uploaded: {file.name}</p>
        ) : (
          <p>Drag and drop a file here, or click to select a file</p>
        )}
      </div>

      <input type="file" onChange={handleFileChange} className="mt-4" />
    </div>
  );
}

export default FileUpload;

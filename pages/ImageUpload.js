// ImageUpload.js
import { useState } from 'react';

const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelection = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const updatedImages = [...selectedImages];

    files.forEach((file) => {
      if (file.type.startsWith('image/')) {
        updatedImages.push(file);
      }
    });

    setSelectedImages(updatedImages);
  };

  const handleUpload = async () => {
    const formData = new FormData();

    selectedImages.forEach((image, index) => {
      formData.append(`image-${index + 1}`, image);
    });

    try {
      const response = await fetch('/api/file-upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Images uploaded successfully!');
        // Optionally, handle success behavior here
      } else {
        console.error('Failed to upload images');
        // Optionally, handle error behavior here
      }
    } catch (error) {
      console.error('Error uploading images', error);
      // Optionally, handle error behavior here
    }
  };

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{
          border: '2px dashed #ccc',
          borderRadius: '5px',
          padding: '20px',
          marginBottom: '20px',
        }}
      >
        <p>Drag and drop or click to select images</p>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileSelection}
        />
      </div>

      {selectedImages.length > 0 && (
        <div>
          <h3>Selected Images:</h3>
          <ul>
            {selectedImages.map((image, index) => (
              <li key={index}>{image.name}</li>
            ))}
          </ul>
          <button onClick={handleUpload}>Upload Images</button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

import { useState } from "react";
import axios from "axios";

interface UploadResult {
  url: string;
  public_id: string;
}

interface CloudinaryUploadHook {
  uploadFile: (file: File) => Promise<UploadResult | undefined>;
  progress: number;
  isUploading: boolean;
  error: string | null;
}

const useCloudinaryUpload = (): CloudinaryUploadHook => {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadFile = async (file: File): Promise<UploadResult | undefined> => {
    setIsUploading(true);
    setError(null);
    setProgress(0);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "chat-file"); // Replace with your actual Cloudinary upload preset
    formData.append("public_id", `upload_${new Date().getTime()}`); // Unique ID for each upload

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/duikdiq7o/auto/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              setProgress(percentCompleted);
            }
          },
        }
      );

      const result = response.data;
      return { url: result.secure_url, public_id: result.public_id };
    } catch (uploadError: any) {
      setError("Failed to upload file. Please try again.");
      console.error("Upload Error:", uploadError.response || uploadError.message || uploadError);
      return undefined;
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadFile, progress, isUploading, error };
};

export default useCloudinaryUpload;

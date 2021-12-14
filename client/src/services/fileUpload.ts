import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/upload';

const upload = async (newFile: FormData): Promise<number> => {
  const response = await axios.post(BASE_URL, newFile);
  return response.status;
};

const FileUploadService = {
  upload
};

export default FileUploadService;

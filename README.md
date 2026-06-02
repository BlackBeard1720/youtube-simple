### 1. Lấy YouTube API Key
Để gọi được dữ liệu từ YouTube, bạn cần một API Key:
1. Truy cập [Google Cloud Console](https://console.cloud.google.com/).
2. Tạo một Project mới.
3. Vào mục **Library**, tìm kiếm **"YouTube Data API v3"** và nhấn **Enable**.
4. Vào mục **Credentials** -> **Create Credentials** -> **API Key**.
5. Copy mã này lại để dùng ở bước sau.
6. Tạo file `.env` từ `.env.example`, sau đó điền key vào biến `VITE_YOUTUBE_API_KEY`:
   ```env
   VITE_YOUTUBE_API_KEY=your_youtube_data_api_v3_key_here
   ```


### 2. Link video demo dự án: 
    https://drive.google.com/file/d/1uZuQwD-Y0UPSygJzND6Np8b-PNPLuLSo/view?usp=sharing
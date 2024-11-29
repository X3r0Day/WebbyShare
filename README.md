# **WebbyShare**  
WebbyShare is a lightweight, user-friendly file-sharing and link-management application. It enables users to upload, share, and manage files and links through a web interface. Built with Node.js and Express, it’s perfect for individuals or teams looking for a simple local file-sharing solution.

---

## **Features**
- **Cross-Device Sharing**: Share files across multiple devices connected to the same network, allowing quick and seamless file transfers.
- **High-Speed Transfers**: Transfer large files in seconds without any restrictions imposed by third-party services.
- **Internet Hosting**: Optionally host the application on the internet for remote file and link management.
- **File Management**: Upload, download, and delete files easily through an intuitive interface.
- **Link Management**: Save and organize shared links in a central repository.
- **Lightweight and Fast**: Runs with minimal dependencies for quick setup and efficient performance.

---

## **Getting Started**


### **Prerequisites**
Ensure the following software is installed on your system:
- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [Git](https://git-scm.com/)

---

## **Installation Steps**

### **1. Clone the Repository**
For Linux:
```bash
git clone https://github.com/X3r0Day/WebbyShare.git && cd WebbyShare
```

### **2. Install Dependencies**
```bash
npm install express multer ejs
```

### **3. Start the server**

```bash
node server.js
```
The server will run at http://localhost:3000. If you’re on the same network, the app will also be accessible via your local IP.
## **How to Use**
1. **Access the Application**:  
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
   
2. **Upload Files**:  
   Use the upload form to add files, which will be stored in the `/uploads` directory.
   
3. **Add Links**:  
   Enter links into the provided form to save them to a central list (`links.txt`).

4. **Manage Files**:  
   Download or delete files directly from the interface.

5. **Share Across Devices**:  
   Access the application from other devices on the same network using the displayed local IP address.

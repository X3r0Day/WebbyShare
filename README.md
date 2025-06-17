

# **WebbyShare**  

> File Sharing Made Easy


## Overview

- **Cross-Device Sharing** - Share any file, video, image, song, even links just using the web interface.

- **High-Speed Transfers on Local Network** - Almost instant sharing!

- **Public Hosting** - Can even host files on the internet that can be accessed by anyone in any corner of the world!

- **Easy File/Link Management** - Upload, download and delete files/links easily through web interface


---

## **Getting Started**

### **Prerequisites**
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

### Allow port 3000 on your local network

#### Windows:

- Open `CMD` as **Administrator** and run
 
```
netsh advfirewall firewall add rule name="Allow Port 3000 from Local Network" dir=in action=allow protocol=TCP localport=3000 remoteip=192.168.1.0/24
```

- This command creates a rule named "Allow Port 3000 from Local Network" that allows incoming TCP connections on port 3000 only from IP addresses within the 192.168.1.0/24 subnet. (i.e Local IP Addresses only)

#### Linux:

- Run:

```
sudo ufw allow from 192.168.1.0/24 to any port 3000 proto tcp
```

---
---
---
---
---

### Accessing Web Interface

#### 1. **Access the Application**:  
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
   
#### 2. **Upload Files**:  
   Use the upload form to add files, which will be stored in the `/uploads` directory.
   
#### 3. **Add Links**:  
   Enter links into the provided form to save them to a central list (`links.txt`).

#### 4. **Manage Files**:  
   Download or delete files directly from the interface.

#### 5. **Share Across Devices**:
   Access the web interface from other devices on the same network suing the local IP and Port of the machine hosting the local server

---
---
---
---

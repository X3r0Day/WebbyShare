// server.js
const express = require('express');
const multer  = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000; // You can change this port if needed

// Set up storage for multer to save files in the 'uploads' directory
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    // Use original file name
    cb(null, file.originalname)
  }
});
const upload = multer({ storage: storage });

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files from 'public' directory
app.use(express.static('public'));

// Middleware to parse URL-encoded bodies (for form data)
app.use(express.urlencoded({ extended: true }));

// Route: Home Page
app.get('/', (req, res) => {
  // Read the uploads directory
  fs.readdir('uploads/', (err, files) => {
    if (err) {
      console.error(err);
      return res.send('Unable to scan uploads directory.');
    }

    // Read links from links.txt
    const linksPath = path.join(__dirname, 'uploads', 'links.txt');
    let links = [];

    if (fs.existsSync(linksPath)) {
      const data = fs.readFileSync(linksPath, 'utf-8');
      links = data.split('\n').filter(Boolean); // Remove empty lines
    }

    res.render('index', { files: files, links: links });
  });
});

// Route: Handle File Upload
app.post('/upload', upload.single('file'), (req, res) => {
  res.redirect('/');
});

// Route: Handle Link Submission
app.post('/add-link', (req, res) => {
  const link = req.body.link;
  // Save link to a text file (links.txt)
  const linksPath = path.join(__dirname, 'uploads', 'links.txt');

  fs.appendFile(linksPath, link + '\n', (err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/');
  });
});

// Route: Download File
app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const file = path.join(__dirname, 'uploads', filename);
  res.download(file);
});

// Route: Delete File (Optional)
app.get('/delete/:filename', (req, res) => {
  const filename = req.params.filename;
  const file = path.join(__dirname, 'uploads', filename);
  fs.unlink(file, (err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/');
  });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Accessible on your network via http://<YOUR_LOCAL_IP>:${PORT}`);
});

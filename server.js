const express = require('express');
const multer  = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
const upload = multer({ storage: storage });

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  fs.readdir('uploads/', (err, files) => {
    if (err) {
      console.error(err);
      return res.send('Unable to scan uploads directory.');
    }

    const linksPath = path.join(__dirname, 'uploads', 'links.txt');
    let links = [];

    if (fs.existsSync(linksPath)) {
      const data = fs.readFileSync(linksPath, 'utf-8');
      links = data.split('\n').filter(Boolean);
    }

    res.render('index', { files: files, links: links });
  });
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.redirect('/');
});

app.post('/add-link', (req, res) => {
  const link = req.body.link;
  const linksPath = path.join(__dirname, 'uploads', 'links.txt');

  fs.appendFile(linksPath, link + '\n', (err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/');
  });
});

app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const file = path.join(__dirname, 'uploads', filename);
  res.download(file);
});

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

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Accessible on your network via http://<YOUR_LOCAL_IP>:${PORT}`);
});

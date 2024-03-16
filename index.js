// server.js
const fileUploadPackage = require('file-upload-nather');

const PORT = process.env.PORT || 3000;

fileUploadPackage.listen(PORT, () => {
    console.log(`File upload server is running on http://localhost:${PORT}`);
});
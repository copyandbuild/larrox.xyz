function convertAndDisplayImage() {
    const fileInput = document.getElementById('imageUpload');
    const format = document.getElementById('formatSelect').value;
    const imageFile = fileInput.files[0];
    if (!imageFile) {
        alert('Bitte wähle eine Bilddatei aus.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.src = event.target.result;
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            
            canvas.toBlob(function(blob) {
                const newImageUrl = URL.createObjectURL(blob);
                const convertedImageElement = document.getElementById('converted-image');
                const downloadButton = document.getElementById('downloadButton');

                convertedImageElement.src = newImageUrl;
                convertedImageElement.style.display = 'block';

                downloadButton.href = newImageUrl;
                downloadButton.style.display = 'block';
                downloadButton.download = 'converted-image.' + (format === 'image/png' ? 'png' : 'jpg');
            }, format);
        }
    }
    reader.readAsDataURL(imageFile);
}

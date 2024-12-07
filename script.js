function uploadImage() {
    const fileInput = document.getElementById('image-upload');
    const previewImage = document.getElementById('preview-image');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function removeWatermark() {
    const previewImage = document.getElementById('preview-image');
    const resultImage = document.getElementById('result-image');

    // Simulate watermark removal (replace with actual watermark removal logic)
    const placeholderImage = 'https://via.placeholder.com/600x400?text=Watermark+Removed';
    resultImage.src = placeholderImage;

    // Show the result section
    document.getElementById('result-section').style.display = 'block';
}

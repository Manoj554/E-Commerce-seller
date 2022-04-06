const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            let fileInfo = {
                name: file.name,
                type: file.type,
                size: Math.round(file.size / 1000) + ' kB',
                base64: reader.result,
            };
            resolve(fileInfo);
        }
        reader.onerror = (err) => {
            reject(err);
        }
    });
}

export default convertToBase64;
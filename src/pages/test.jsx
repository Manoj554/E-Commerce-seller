import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';

const test = () => {
    const [file, setFile] = useState('');
    return (
        <div>
            <FileBase64
                multiple={false}
                onDone={(base) => setFile(base)}
            />
            {console.log(file)}
        </div>

    )
}

export default test
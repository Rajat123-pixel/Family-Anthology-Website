import React from 'react';

// chakra ui
import { Stack, Button } from '@chakra-ui/react';

// for file upload
import { getStorage, ref, uploadBytes } from "firebase/storage";

import { storage } from '../../firebase/firebase';

const UploadWrittenDocuments = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const file = event.target[0]?.files[0]

        if (!file) return;

        const writtenDocumentRef = ref(storage, `written_documents/${file.name}`);
        
        console.log("In handleSubmit button");

        uploadBytes(writtenDocumentRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        }).catch(err => {
            console.log("There was error uploading the document");
            console.log(err);
        });

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" />
                <Stack direction='row' spacing={4} align='center'>
                    <Button colorScheme='teal' variant='outline' type='submit' >
                        Upload
                    </Button>
                </Stack>
            </form>
        </>
    )
}

export default UploadWrittenDocuments
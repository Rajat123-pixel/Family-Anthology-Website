import React, { useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// firebase storage
import { storage } from '../../firebase/firebase';

const SeeOtherDocs = () => {
    useEffect(() => {
        getDownloadURL(ref(storage, 'images/stars.jpg'))
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'

                // This can be downloaded directly:
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    const blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();

                // Or inserted into an <img> element
                const img = document.getElementById('myimg');
                img.setAttribute('src', url);
            })
            .catch((error) => {
                // Handle any errors
            });
    }, [])



    return (
        <>
            
        </>
    )
}

export default SeeOtherDocs
import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import {enhancedImageAPI} from '../utils/enhancedImageAPI'

function Home() {
    const [uploadImage , setUploadImge] = useState(null);
    const [enhancedImage , setEnhancedImge ] = useState(null);
    const [loding , setLoding] = useState(false);
    const UploadImageHandler = async (file) =>{
        setUploadImge(URL.createObjectURL(file));
        setLoding(true);

        //calling the API to enhance the image
        try {
            const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImge(enhancedURL);
            setLoding(false);
        } catch (error) {
            console.log(error);
            alert("Error while enhancing the imaage, Please try again letter.");
        }
    }
    //console.log(enhancedImage.image);
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <ImageUpload UploadImageHandler={UploadImageHandler}/>
        <ImagePreview 
            loding={loding} 
            uploaded={uploadImage} 
            enhanced={enhancedImage?.image}
        />
    </div>
  )
}

export default Home
import axios from 'axios';
const API_KEY = "wxilj33kh008exd8w";
const BASE_URl = "https://techhk.aoscdn.com/";

export const enhancedImageAPI = async(file) =>{
    //code call API to get enhanced image URL
    
    try {
        const taskId = await uploadImage(file);
        console.log("Image Uploded successfully , TaskId : ",taskId);

        const enhancedImageData = await PollForEnhancedImage(taskId);
        console.log("Enhanced Image data : ",enhancedImageData);

        return enhancedImageData;

    } catch (error) {
        console.log("Error enhancing image : ", error.message);
    }
};

const uploadImage = async(file) =>{
    //code to upload image
    // api/tasks/visual/scale  --post api

    const formData = new FormData();
    formData.append("image_file",file);
    const {data} = await axios.post(`${BASE_URl}/api/tasks/visual/scale`,formData,{
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
          }
    });

    if(!data || !data.data || !data.data.task_id){
        throw new Error("Failed to upload image! task id not found.");
    }
    
    return data.data.task_id;
};

const fetchEnhancedImage = async(taskId) =>{
    //fetch enhanced image
    // /api/tasks/visual/scale/{task_id}  --get api
    const formData = new FormData();
    const {data} = await axios.get(`${BASE_URl}/api/tasks/visual/scale/${taskId}`,{
        headers: {
            "X-API-KEY": API_KEY,
          }
    });
    // console.log(data.data.image);
    if(!data || !data.data){
        throw new Error("Failed to upload image! task id not found.");
    }
    return data.data;
};

const PollForEnhancedImage = async (taskId, retries=0) =>{
    const result = await fetchEnhancedImage(taskId);
    if(result.state == 4){
        console.log("Processing...");
        if(retries >=20){
            throw new Error("Max retries reached, Please try again letter.");
        }

        //wait for 2 sec
        await new Promise((resolve) =>{
            setTimeout(resolve, 2000);
        })

        return PollForEnhancedImage(taskId , retries + 1);
    }
    console.log("Enhanced Image URL : ",result);
    return result;
}


// data
// : 
// {task_id: 'cfb8b703-a53c-4978-b170-96b5b46cd6f6'}
// message
// : 
// "success"
// status
// : 
// 200
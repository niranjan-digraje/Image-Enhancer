import React from 'react'
import Loading from './Loading'

function ImagePreview(props) {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
        {/* original image */}
        <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
            <h2 className='text-xl font-semibold text-center bg-gray-800 text-white py-2'>Original Image</h2>
           { props.uploaded ? 
                <img src={props.uploaded} alt="" className='w-full h-full object-cover'/>
            :
                <div className='flex items-center justify-center h-80 '>
                    No Image Selected
                </div>
            }
        </div>

        {/* Enhanced Image */}
        <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
            <h2 className='text-xl font-semibold text-center bg-gray-800 text-white py-2'>Enhanced Image</h2>
            { props.enhanced && !props.loding ?
                <img src={props.enhanced} alt="" className='w-full h-full object-cover'/>
                :
                <div className='flex items-center justify-center h-80 '>
                    {
                        props.loding ?
                            <Loading />
                        :
                            <p>No Enhanced Image</p>
                    }
                </div>
            }
            
            
        </div>
    </div>
  )
}

export default ImagePreview
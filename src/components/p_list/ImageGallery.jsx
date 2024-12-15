import React, { useState } from 'react'

function ImageGallery() {
    const [image , setImage] = useState('');

    function handleImageChnager(imgSource) {
        setImage(imgSource);
    }


    return <div className='flex flex-col justify-center items-center'>
        <h2 className='font-bold text-2xl py-4'>Image Gallery</h2>
        <div className="flex justify-center gap-4 flex-wrap pt-4">

            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230524/pngtree-photo-wallpaper-labrador-puppy-puppy-dog-cute-hd-image_2674494.jpg" alt="" width={200} className='object-cover cursor-pointer shadow-xl hover:scale-105 transition-all duration-300' onClick={() => handleImageChnager('https://png.pngtree.com/thumb_back/fh260/background/20230524/pngtree-photo-wallpaper-labrador-puppy-puppy-dog-cute-hd-image_2674494.jpg')}/>

            <img src="https://t4.ftcdn.net/jpg/09/31/55/77/360_F_931557770_r5nYDKM8b3Or40fg0vLRqKPJBjQQrwVH.jpg" alt="" width={200} className='object-cover cursor-pointer shadow-xl hover:scale-105 transition-all duration-300' onClick={() => handleImageChnager('https://t4.ftcdn.net/jpg/09/31/55/77/360_F_931557770_r5nYDKM8b3Or40fg0vLRqKPJBjQQrwVH.jpg')}/>

            <img src="https://tophinhanhdep.com/wp-content/uploads/2021/10/Cute-Dog-Wallpapers.jpg" alt="" width={200} className='object-cover cursor-pointer shadow-xl hover:scale-105 transition-all duration-300' onClick={() => handleImageChnager('https://tophinhanhdep.com/wp-content/uploads/2021/10/Cute-Dog-Wallpapers.jpg')}/>

            <img src="https://images.unsplash.com/photo-1716675238240-bb58c1eaaa50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={200} className='object-cover cursor-pointer shadow-xl hover:scale-105 transition-all duration-300' onClick={() => handleImageChnager('https://images.unsplash.com/photo-1716675238240-bb58c1eaaa50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')}/>

        </div>
        <div className="h-[350px] flex justify-center items-center">
            {image === '' ? <p className='text-2xl font-serif underline'>Click over an image!</p> : <div>
                <h2 className='text-center pb-2 m-0 font-semibold text-xl'>Selected Image</h2>
                <img src={image} alt="" width={400} className='object-cover h-[250px] cursor-pointer'/>    
            </div>}
            
        </div>
    </div>
}

export default ImageGallery;
import React from 'react'
import Img1 from '../assets/images/background.svg'

function Dashboard() {
  return (
    <>
        <div className='bg-cover bg-repeat w-full h-full overflow-hidden scroll-smooth' style={{ backgroundImage: `url(${Img1})` }}>
            <div className='grid xl:grid-cols-3 sm:grid-cols-2 gap-4 py-8 px-8 grid-cols-1 items-center m-auto'>
                <div className='rounded-md'>
                    <iframe src="http://localhost:3000/d-solo/eNgGSGBVk/bird-temp?orgId=1&refresh=1m&var-bucket=8021220&theme=light&panelId=2" className='w-[350px] h-[300px] shadow-md lg:w-[450px] lg:h-[400] rounded-md m-auto' frameborder="0"></iframe>
                </div>
                <div className='rounded-md'>
                    <iframe src="http://localhost:3000/d-solo/eNgGSGBVk/bird-temp?orgId=1&refresh=1m&var-bucket=8021220&theme=light&panelId=4" className='w-[350px] h-[300px] shadow-md lg:w-[450px] lg:h-[400] rounded-md m-auto' frameborder="0"></iframe>
                </div>
                <div>
                    <iframe src="http://localhost:3000/d-solo/eNgGSGBVk/bird-temp?orgId=1&refresh=1m&var-bucket=7380062&theme=light&panelId=2" className='w-[350px] h-[300px] shadow-md lg:w-[450px] lg:h-[400] rounded-md m-auto' frameborder="0"></iframe>
                </div>
                <div>
                    <iframe src="http://localhost:3000/d-solo/eNgGSGBVk/bird-temp?orgId=1&refresh=1m&var-bucket=7380062&theme=light&panelId=4" className='w-[350px] h-[300px] shadow-md lg:w-[450px] lg:h-[400] rounded-md m-auto' frameborder="0"></iframe>
                </div>
                <div className='w-[350px] h-[300px] lg:w-[450px] rounded-md m-auto bg-white shadow-md flex items-center justify-center'>
                    <button className='px-4 py-2 border-solid border-gray-200 border-2 rounded-lg shadow-md' >Add</button>
                </div>
                <div className='w-[350px] h-[300px] lg:w-[450px] rounded-md m-auto bg-white shadow-md flex items-center justify-center'>
                    <button className='px-4 py-2 border-solid border-gray-200 border-2 rounded-lg shadow-md' >Add</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard
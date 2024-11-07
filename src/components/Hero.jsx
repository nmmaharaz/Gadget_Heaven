import banner from '../assets/banner.jpg'

const Hero = () => {
    return (
        
        <div className='relative'>
            <div className='mx-auto absolute position top-[-120px] lg:top-[0px]'>
            <div className='flex flex-col items-center'>
            <h1 className=' text-3xl sm:text-4xl lg:text-6xl text-white font-semibold leading-[80px]	 text-center'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className='mx-auto text-gray-50 max-w-[600px] text-center my-6'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className='btn bg-white text-xl px-7 rounded-3xl mb-12'>Shop Now</button>
            </div>
            <div className='mx-auto w-[400px] sm:w-[500px] lg:w-[1000px] h-[300px] lg:h-[500px] bg-white p-6 rounded-2xl'><img className='w-full h-full rounded-2xl' src={banner} alt="" /></div>
        </div>
        </div>
    );
};

export default Hero;
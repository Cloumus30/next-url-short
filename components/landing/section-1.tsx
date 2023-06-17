export default function Section1(){
    return(
    <section className="bg-[url('/images/bg-1.png')] bg-no-repeat bg-cover min-h-screen w-screen">
        <div className="pt-20 px-5 flex flex-col-reverse md:flex-row h-full">
            <div className="md:w-1/2 flex md:pl-10">
                <div className="place-self-center">
                    <div className="md:w-5/6">
                        <h1 className="text-white text-3xl md:text-5xl">Generate QR Code and Short URL as You Want Easily and Quickly</h1>
                    </div>
                    <div className="mt-10 flex md:w-1/2 justify-between">
                        <a href="#shorten-url-section" className="focus:outline-none rounded-full text-white bg-[#593EFD] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium text-sm px-5 py-2.5 mb-2 dark:bg-[#593EFD] dark:hover:bg-[#593EFD] dark:focus:ring-purple-900">Start Shorten URL</a>
                        <a href="" className="hidden focus:outline-none rounded-full text-white bg-[#FF55BB] hover:bg-[#E40089] focus:ring-4 focus:ring-[#E40089] font-medium text-sm px-5 py-2.5 mb-2 dark:bg-[#FF55BB] dark:hover:bg-[#FF55BB] dark:focus:ring-[#E40089]">Start Make QR</a>
                    </div>
                    
                </div>
                
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img src="/images/vector-1.png" className="w-[552px]" alt="landing Image" />
            </div>
        </div>
      </section>
    )
}
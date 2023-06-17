'use client';
import { submitLink } from "@/servers/inputLink";
import { useRef, useState } from "react"

export default function Section2() {
    const [customLinkShow, setCustomLinkShow] = useState(false);
    const [link, setLink] = useState('');
    const [customLink, setCustomLink] = useState('');
    
    const toggleCustomLink = ()=>{
        setCustomLinkShow(!customLinkShow);
    }
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('link', link);
        if(customLinkShow){
            formData.append('custom_link', customLink);
        }
        console.log(formData);
    }
  return (
    <section className="w-full flex md:min-h-screen bg-gradient-to-t from-[#ECFAFF] to-[#93E5FF]" id="shorten-url-section">
        <div className="text-center my-52 md:m-auto w-full">
            <div>
                <h1 className="font-bold text-4xl">Try Shorten Your URL</h1>
            </div>
            <form action="" onSubmit={handleSubmit} method="POST">
                <div className="mt-16 mx-3 md:mx-0">
                    <div className="flex w-full md:w-[837px] md:mx-auto">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-full dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <img src="/icons/link.svg" alt="Link Icon SVG" />
                        </span>
                        <input type="text" value={link} onChange={(e) =>{setLink(e.target.value)}} id="website-admin" name="real_link" className="rounded-none rounded-r-full bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="http://your-Long-URL.com" />
                        <div className="hidden md:block ml-5 place-self-center">
                            <button type="submit" className="focus:outline-none rounded-full text-white bg-[#593EFD] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium text-sm px-5 py-2.5 mb-2 dark:bg-[#593EFD] dark:hover:bg-[#593EFD] dark:focus:ring-purple-900">Shorten URL</button>
                        </div>
                    </div>
                    <div className="flex justify-start md:justify-center ml-5 mt-3">
                        <button id="btn-custom" onClick={toggleCustomLink} type="button" className="focus:outline-none rounded-full text-white bg-[#3E68FD] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium px-3 py-2 text-xs mb-2 dark:bg-[#3E68FD] dark:hover:bg-[#3E68FD] dark:focus:ring-blue-900">custom link</button>
                        <div className="w-1/2"></div>
                    </div>
                </div>
                <div id="form-custom-link" className={(customLinkShow ? '' : 'hidden') + " mt-5"}>
                    <div className="flex w-5/6 md:w-[505px] mx-auto">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-full dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        {/* <%= appDomain %>/ */}
                        </span>
                        <input type="text" value={customLink} onChange={(e) => {setCustomLink(e.target.value)}} id="custom-link-input" name="short_link" className="rounded-none rounded-r-full bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your-custom" />
                    </div>
                </div>
                <div className="mt-5 md:hidden">
                    <div className="ml-5 place-self-center">
                        <button type="submit" className="focus:outline-none rounded-full text-white bg-[#593EFD] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium text-sm px-5 py-2.5 mb-2 dark:bg-[#593EFD] dark:hover:bg-[#593EFD] dark:focus:ring-purple-900">Shorten URL</button>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-xs">
                        By clicking SHORTEN, you are agreeing to Short QR Terms of Service, Privacy Policy, and Acceptable Use Policy
                    </p>
                </div>
            </form>
        </div>
    </section>
  )
}

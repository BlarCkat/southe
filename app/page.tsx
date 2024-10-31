"use client"
import Image from "next/image";
import Link from "next/link";
import { PiInstagramLogoDuotone, PiMetaLogoDuotone, PiShoppingCartDuotone, PiThreadsLogoDuotone, PiXLogoDuotone } from "react-icons/pi";
import logoImage from "../public/img/southe-logo-dark.svg";
import logoHeroImage from "../public/img/southe-logo-gradient.svg";
import heroImage1 from "../public/img/image-1.jpeg";
import heroImage2 from "../public/img/image-1.webp";
import heroImage3 from "../public/img/image-3.jpeg";
import heroImage4 from "../public/img/image-4.jpeg";
import Carousel from "./carousel";


const LandingPageView = () => {
    return ( 
        <>
        <main className="w-screen h-screen overflow-x-hidden">
            <nav className="flex justify-between lg:px-[100px] px-[32px] h-[60px] items-center">
                <div className=" w-[80px]">
                <Image alt="logo" src={logoImage}/>
                </div>
                <ul className="links gap-8 hidden lg:flex">
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/'}>Categories</Link></li>
                    <li><Link href={'/'}>Shop</Link></li>
                    <li><Link href={'/'}>Partners</Link></li>
                </ul>
                <div className="">
                    <Link href={''}>Signup</Link>
                </div>
            </nav>
            <header className="header lg:px-[100px] px-[32px]">
            <div className="w-full flex items-center justify-center my-10">
                <Image alt="logo" src={logoHeroImage}/>
                </div>
                <div className="hero w-full flex items-center justify-center">
                    <button className="px-8 py-4 rounded-full bg-[#212121] text-white flex justify-between gap-[16px] group/btn hover:bg-[#9DED69] hover:text-[#2C5D0B] transition-all">Start Shopping <PiShoppingCartDuotone size={24} className="hidden group-hover/btn:block transition-all"/></button>
                </div>
                <div className="flex lg:gap-[24px] gap-4 w-full h-[500px] my-[32px] flex-col lg:flex-row">
                    <div className="w-full h-fit bg-slate-200 rounded-xl overflow-hidden">
                        <Image src={heroImage1} alt="image-hero-1" className="object-cover"/>
                    </div>
                    <div className="w-full h-fit bg-slate-200 rounded-xl overflow-hidden">
                        <Image src={heroImage2} alt="image-hero-2"/>
                    </div>
                    <div className="w-full h-fit bg-slate-200 rounded-xl overflow-hidden">
                        <Image src={heroImage3} alt="image-hero-3"/>
                    </div>
                    <div className="w-full h-fit bg-slate-200 rounded-xl overflow-hidden">
                        <Image src={heroImage4} alt="image-hero-4"/>
                    </div>
                </div>
            </header>

            <section className="description flex flex-col items-center justify-center h-fit py-[48px] px-[32px] lg:px-[100px]">
                <p className="text-[24px] lg:text-[32px]">Southe is more than just clothing; it&apos;s a feeling. A feeling of effortless style, unmatched comfort, and undeniable confidence. Inspired by nature, crafted with care, and made to move with you.

                Discover the joy of dressing in clothes that feel as good as they look.</p>
            </section >

            <section className="description flex flex-col justify-center min-h-[50vh] lg:px-[100px] px-[32px]">
                <h2 className="text-[48px] text-[#F44C4C] tracking-tighter">Featured</h2>
                <div className="grid grid-cols-2 gap-4">
                <div className="w-full h-[1000px] flex flex-col gap-4 bg-slate-50">
                    <div className="w-full h-[45%] bg-slate-300 rounded-3xl"></div>
                    <div className="w-full h-[45%] bg-slate-300 rounded-3xl"></div>
                    <div className="w-full h-[10%] bg-slate-300 rounded-3xl"></div>
                </div>
                <div className="w-full h-[1000px] flex flex-col gap-4 bg-slate-50">
                    <div className="w-full h-[10%] bg-slate-300 rounded-3xl"></div>
                    <div className="w-full h-[45%] bg-slate-300 rounded-3xl"></div>
                    <div className="w-full h-[45%] bg-slate-300 rounded-3xl"></div>
                </div>
                </div>
            </section>

            <section> 
                <Carousel autoPlayInterval={3000} className="my-custom-class"/>
            </section>
            
            
            <section className="marquee"></section>
            <footer className="footer h-[80vh] w-screen p-8">
                <div className="rounded-lg bg-[#212121] text-white h-full w-full flex flex-col justify-between gap-4 p-8">
                    <div className="">
                    <div className="w-fit flex items-center justify-start my-10 bg-[#9DED69] p-4">
                        <Image alt="logo" src={logoImage}/>
                    </div>
                   <div className="flex gap-20">
                   <div className="flex flex-col gap-4">
                        <Link href={""}>Home</Link>
                        <Link href={""}>Categories</Link>
                        <Link href={""}>Shop</Link>
                        <Link href={""}>Partners</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link href={""} className="flex gap-2 items-center"><PiInstagramLogoDuotone size={20}/>Instagram</Link>
                        <Link href={""} className="flex gap-2 items-center"><PiThreadsLogoDuotone size={20}/>Threads</Link>
                        <Link href={""} className="flex gap-2 items-center"><PiXLogoDuotone size={20}/>X</Link>
                        <Link href={""} className="flex gap-2 items-center"><PiMetaLogoDuotone size={20}/>Meta</Link>
                    </div>
                   </div>
                    </div>

                   <div className="copyright flex lg:flex-row flex-col w-full justify-between">
                    <p>Copyright © 2024 Southe. All rights reserved.</p>
                    <div className=" flex gap-2">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                   </div>
                </div>
            </footer>
        </main>
        </>
     );
}
 
export default LandingPageView;
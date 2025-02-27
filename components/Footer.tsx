import React from 'react'
import MagicButton from '../components/ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/Data'
import Image from 'next/image'


const Footer = () => {
    return (
        <footer className="w-full pb-10 mb-[100px] sm:mb-0" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital presence to next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                </p>
                <a href="mailto:kathy.wazowski@gmail.com">
                    <MagicButton title="Let&apos;s get in touch" icon={<FaLocationArrow />} position="right" />
                </a>
            </div>

            <div className="flex mt-16 md:flew-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2025 Kathy</p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map(profile => (
                        <div
                            key={profile.id}
                            className="w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter 
                                backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300">
                            <Image src={profile.img} alt={profile.id.toString()} width={20} height={20} />
                        </div>
                    ))}
                </div>

            </div>
        </footer>






    )
}

export default Footer
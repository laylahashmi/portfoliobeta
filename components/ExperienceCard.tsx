import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import robinhoodLogo from '/public/robinhoodLogo.png'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#1d1c1c]
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
        <motion.div
        initial={{y: -100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1.2}}
        viewport={{once: true}}>
            <Image
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src={robinhoodLogo}
            alt="robinhood logo"
            />
        </motion.div>
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Customer Service Rep</h4>
            <p className="font-bold text-2xl mt-1">Robinhood</p>
            <div className="flex space-x-2 my-2">
                <Image
                className="h-10 w-10 rounded-full"
                src={robinhoodLogo}
                alt=""/>
                <Image
                className="h-10 w-10 rounded-full"
                src={robinhoodLogo}
                alt=""/>
                <Image
                className="h-10 w-10 rounded-full"
                src={robinhoodLogo}
                alt=""/>
            </div>
            <p className="uppercase py-5 text-gray-300">Stared work...-Ended...</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary PointsSummary PointsSummary PointsSummary Points</li>
                <li>Summary PointsSummary PointsSummary PointsSummary Points</li>
                <li>Summary PointsSummary PointsSummary PointsSummary Points</li>
                <li>Summary PointsSummary PointsSummary PointsSummary Points</li>
                <li>Summary PointsSummary PointsSummary PointsSummary Points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard
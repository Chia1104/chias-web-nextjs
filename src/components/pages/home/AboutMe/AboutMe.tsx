import Image from 'next/image'
import { FC } from "react";
import { Chia } from "@/utils/meta/chia"
import NextLink from "next/link";

interface Props {
    avatarSrc: string
    newUpdate: string
    slug: string
}

export const AboutMe: FC<Props> = ({avatarSrc, newUpdate, slug}) => {
    const name = Chia.name
    const chineseName = Chia.chineseName
    const title = Chia.title
    const content = Chia.content

    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex flex-col xl:flex-row px-3 justify-center z-20 mt-10">
                <div className="flex flex-col justify-end items-center xl:items-end mb-5 xl:pr-5">
                    <h1
                        className="title text-sec-text dark:text-white">
                        {name} - {chineseName}
                    </h1>
                    <h2 className="description c-text-green-to-purple">
                        {title.toUpperCase()}
                    </h2>
                </div>
                <div className="flex justify-center items-center rounded-full w-[200px] h-[200px] overflow-hidden bg-gradient-to-r from-purple-400 to-pink-600 flex justify-center items-center self-center">
                    <div className="rounded-full w-[195px] h-[195px] p-3 c-bg-secondary">
                        <Image
                            src={avatarSrc || '/favicon.ico'}
                            alt="Chia1104"
                            width={195}
                            height={195}
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:flex-row mx-auto">
                <div className="mt-10 flex flex-col justify-center items-center">
                    <h3 className="title c-text-secondary">
                        About me
                    </h3>
                    <div className="lg:mx-5 c-bg-gradient-yellow-to-pink w-[350px] rounded-xl relative flex justify-center items-center min-h-[150px] mt-5">
                        <div className="w-[343px] h-[143px] c-bg-secondary p-2 rounded-xl">
                            <p className="text-xl text-center">
                                {content}
                            </p>
                        </div>
                        <NextLink
                            href="/about"
                        >
                            <a className="c-bg-gradient-green-to-purple w-[85px] absolute top-[8rem] h-10 rounded-full flex justify-center items-center text-white hover:scale-[1.05] transition ease-in-out">
                                MORE
                            </a>
                        </NextLink>
                    </div>
                </div>
                <div className="mt-10 flex flex-col justify-center items-center">
                    <h3 className="title c-text-secondary">
                        New update
                    </h3>
                    <div className="lg:mx-5 c-bg-gradient-yellow-to-pink w-[350px] rounded-xl relative flex justify-center items-center min-h-[150px] mt-5">
                        <div className="w-[343px] h-[143px] c-bg-secondary p-2 rounded-xl">
                            <p className="text-xl text-center">
                                { newUpdate || 'This is an example of a blog post.'}
                            </p>
                        </div>
                        <NextLink
                            href={`/posts/${slug}`}
                        >
                            <a className="c-bg-gradient-green-to-purple w-[85px] absolute top-[8rem] h-10 rounded-full flex justify-center items-center text-white hover:scale-[1.05] transition ease-in-out">
                                MORE
                            </a>
                        </NextLink>
                    </div>
                </div>
            </div>
            <div className="bg-primary/90 rounded-xl p-5 mt-20 mx-auto text-white backdrop-blur-sm w-[350px] md:w-[75%]">
                <ul>
                    <li className="mb-2">
                        🔭 I’m currently working on: My personal website with NextJS
                    </li>
                    <li className="mb-2">
                        🌱 I’m currently learning: Docker, Next.js, Nest.js, TypeScript, Go
                    </li>
                    <li className="mb-2">
                        👯 I’m looking to collaborate on: Intern ship
                    </li>
                    <li className="mb-2">
                        📫 How to reach me: yuyuchia7423@gmail.com
                    </li>
                    <li>
                        ⚡ Fun fact:
                        <a href="https://open.spotify.com/user/21vnijzple4ufn2nzlfjy37py?si=b5f011d11a794ba4&nd=1" target="_blank" rel="noreferrer"> Spotify </a>
                        /
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <a href="https://skyline.github.com/Chia1104/2022" target="_blank" rel="noreferrer"> Chia1104's 2022 GitHub Skyline </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

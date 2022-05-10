import dayjs from 'dayjs'
import React from 'react'
import Image from 'next/image'
import rehypeSlug from 'rehype-slug'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { getSlugs, getPostFromSlug } from '../../../../lib/mdx/services'
import { Layout } from "../../../components/globals/Layout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Post } from "../../../utils/types";
import 'highlight.js/styles/atom-one-dark-reasonable.css'

interface Props {
    source: MDXRemoteProps,
    frontMatter: Post,
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getSlugs()

    const paths = slugs.map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const slug = params?.slug
    // @ts-ignore
    const { content, frontMatter } = await getPostFromSlug(slug.toString())

    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [
                    rehypeAutolinkHeadings,
                    {
                        properties: { className: ['anchor'] },
                    },
                    { behaviour: 'wrap' },
                ],
                rehypeHighlight,
                rehypeCodeTitles,
            ],
        },
    })

    return {
        props: {
            source: mdxSource,
            frontMatter,
        },
    }
}


const PostPage: NextPage<Props> = ({ source, frontMatter }) => {
    return (
        <Layout
            title={frontMatter.title}
            description={frontMatter.excerpt}
        >
            <main className="main c-container mt-5 px-5">
                <h1 className="title self-start">{frontMatter.title}</h1>
                <p className="description self-start">
                    {dayjs(frontMatter.createdAt).format('MMMM D, YYYY')} &mdash;{' '}
                    {frontMatter.readingTime}
                </p>
                <div className="c-bg-secondary p-5 mt-5 rounded-xl self-start w-[80%] content">
                    <MDXRemote {...source} components={{ Image }} />
                </div>
            </main>
        </Layout>
    )
}

export default PostPage

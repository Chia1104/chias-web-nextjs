import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export type PostFrontMatter = {
    slug: string;
    id?: number;
    title?: string;
    excerpt?: string;
    tags?: string[];
    createdAt: string;
    updateAt?: string;
    readingMins: string;
    published?: boolean;
}

export type PostSource = {
    source: MDXRemoteSerializeResult;
    frontMatter: PostFrontMatter;
}
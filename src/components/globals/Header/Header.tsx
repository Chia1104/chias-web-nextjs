import Head from 'next/head'
import { FC } from "react";

interface Props {
    title: string,
    description: string,
}

export const Header: FC<Props> = (
    {
        title,
        description,
    }
) => {
    return(
        <Head>
            <title>{ title || 'Chia WEB' }</title>
            <meta name="description" content={ description || 'Yu Yu, Chia, 俞又嘉, WEB developer, UI/UX' } />
            <link rel="icon" href="/public/favicon.ico" />
        </Head>
    )
}

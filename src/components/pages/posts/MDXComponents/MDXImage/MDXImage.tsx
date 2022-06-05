import Image from 'next/image';
import { FC } from 'react';

interface Props {
    a: string;
    s: string;
}

export const MDXImage: FC<Props> = (props) => {

    return (
        <div className="flex flex-col justify-center items-center my-5">
            <div className="aspect-w-2 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 shadow-lg">
                <Image
                    src={props.s}
                    alt={props.a}
                    aria-label={props.a}
                    blurDataURL={'/loader/skeleton.gif'}
                    placeholder="blur"
                    className="rounded-lg hover:scale-[1.05] duration-300 transition ease-in-out"
                    loading="lazy"
                    objectFit="cover"
                    layout="fill"
                    quality={100}
                    {...props}
                />
            </div>
            <p className="self-center mt-2">{props.a || ''}</p>
        </div>
    );
}


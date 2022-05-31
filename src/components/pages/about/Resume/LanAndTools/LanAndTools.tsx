import { FC } from "react";
import {LATList} from "@chia/components/pages/about/Resume/LanAndTools/LATList";
import { Chia } from "@chia/utils/meta/chia";

export const LanAndTools: FC = () => {
    const d = Chia.technologies

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="title pb-10 text-center">
                Languages and Tools
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                <LATList
                    category={'Languages'}
                    data={d.languages}
                />
                <LATList
                    category={'Web Frameworks'}
                    data={d.web_frameworks}
                />
                <LATList
                    category={'Database'}
                    data={d.databases}
                />
                <LATList
                    category={'DevOps'}
                    data={d.devops}
                />
                <LATList
                    category={'Other Tools'}
                    data={d.other_tools}
                />
                <LATList
                    category={'Design'}
                    data={d.design}
                />
            </div>
        </div>
    )
}

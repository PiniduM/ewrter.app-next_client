import React from "react";
import MiniHeader from "@/common/components/Headers/MiniHeader"
import EssayWriterHeading from "@/sections/essayWriter/components/Headings/EssayWriterHeading";

interface IProps {
    children: React.ReactNode
}

const EssayWriterLayout = (props: IProps) => {
    return (
        <>
        <MiniHeader />
        <EssayWriterHeading />
        {props.children}
        </>
    )
}

export default EssayWriterLayout;
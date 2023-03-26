import React from "react";
import MiniHeader from "@/common/components/Headers/MiniHeader"

interface IProps {
    children: React.ReactNode
}

const EWriterBasicLayout = (props: IProps) => {
    return (
        <>
        <MiniHeader />
        {props.children}
        </>
    )
}

export default EWriterBasicLayout;
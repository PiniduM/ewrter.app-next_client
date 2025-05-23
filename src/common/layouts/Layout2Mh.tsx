import React from "react";
import MiniHeader from "@/common/components/Headers/MiniHeader"

interface IProps {
    children: React.ReactNode
}

const Layout2Mh = (props: IProps) => {
    return (
        <>
        <MiniHeader />
        {props.children}
        </>
    )
}

export default Layout2Mh;
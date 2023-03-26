import React from "react";
import Header from "@/common/components/Headers/Header"

interface IProps {
    children: React.ReactNode
}

const EWriterBasicLayout = (props: IProps) => {
    return (
        <>
        <Header />
        {props.children}
        </>
    )
}

export default EWriterBasicLayout;
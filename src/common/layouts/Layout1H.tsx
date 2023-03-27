import React from "react";
import Header from "@/common/components/Headers/Header"

interface IProps {
    children: React.ReactNode
}

const Layout1H = (props: IProps) => {
    return (
        <>
        <Header />
        {props.children}
        </>
    )
}

export default Layout1H;
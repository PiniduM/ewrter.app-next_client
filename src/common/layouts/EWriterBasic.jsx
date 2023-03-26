import Header from "@/common/components/Headers/Header"

const EWriterBasicLayout = (props) => {
    return (
        <>
        <Header />
        {props.children}
        </>
    )
}

export default EWriterBasicLayout;
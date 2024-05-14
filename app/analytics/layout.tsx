import Header from "@/components/Header"

export default function layout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Header />

            {children}
        </section>
    )
}
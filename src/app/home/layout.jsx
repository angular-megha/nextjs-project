export default function homeLayout({children, left, right, bottom}) 
{
    const isSection = false
    return (
        <section>
            {children}
            {/* {left}
            {right}
            {bottom} */}
            {/* conditionaly render routes */}
            {isSection ? left: right}  
        </section>
    )
}
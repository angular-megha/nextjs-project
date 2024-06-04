import AdminHeader from "../../components/header";

export default function adminLayout({children}) {
    return (
        <section>
           <AdminHeader />
            {children}
            
        </section>
    )
}
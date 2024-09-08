import { SectionItem } from "../shared/components/section-item/SectionItem";
import { Header } from "../shared/layouts/Header";
import '../shared/components/section-item/section-item.css'
import '../shared/layouts/header.css'
import { Footer } from "../shared/layouts/Footer";
import { Alert } from "../shared/components/alert/Alert";
export function App() {
    return (
        <>
            <Header />
            <SectionItem />
            <Footer></Footer>
            <Alert />
        </>
    );
}
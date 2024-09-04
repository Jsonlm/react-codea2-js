import { SectionItem } from "../shared/components/section-item/SectionItem";
import { Header } from "../shared/layouts/Header";
import '../shared/components/section-item/section-item.css'
import '../shared/layouts/header.css'
import { Footer } from "../shared/layouts/Footer";
export function App() {
    return (
        <>
            <div>
                <Header/>
                <SectionItem/>
                <Footer></Footer>
            </div>
        </>
    );
}
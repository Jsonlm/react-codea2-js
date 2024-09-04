import { sectionArray } from "../../../assets/data/section-items";

export function SectionItem() {
    const listItems = sectionArray.map((item) =>
        <section key={item.id}>
            <img src={`/src/assets/img/${item.img}`} alt="" className="img-section" />
            <h3>{item.title}</h3>
            <span>{item.desciption}</span>
            <button className="button-section">Ver mas</button>
        </section>
    )
    return (
        <>
            <div className="text-container">
                <h2>Nuestros Servicios</h2>
                <br />
                <p>Conoce nuestros servicios de depilacion láser corporal y facial, fotorejuvenecimiento, limpieza facial y corporales</p>
            </div>
            <div className="container">
                {listItems}
            </div>
        </>
    );
}
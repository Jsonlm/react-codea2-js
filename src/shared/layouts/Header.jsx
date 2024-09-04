import '/src/styles.css';
export function Header() {
    return (
        <>
            <img src={`/src/assets/img/logoDepilive.png`} alt="" className="img-logo" />
            <span className='span-header'>123456 / +57 317 315 8811</span>
            <div className="container-header">
                <header>
                    <nav>
                        <ul>
                            <li>Inicio</li>
                            <li>Servicios</li>
                            <li>Contacto</li>
                            <li>Portal</li>
                            <li>Nosotros</li>
                        </ul>
                    </nav>
                </header>

                <img src={`/src/assets/img/header-image.png`} alt="" className="img-header" />
            </div>
        </>
    );
}
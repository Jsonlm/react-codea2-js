import './footer.css'
export function Footer() {
    return (
        <footer>
            <div className='footer-section'>
                <strong>Depilive - Depilación y estética</strong>
                <br />
                <br />
                <small className='footer-small'>Depilive © 2021</small> <br /><br />
                <small className='footer-small'>Todos los derechos reservados</small>
            </div>
            <div className='footer-section'>
                <strong>Nosotros</strong>
                <br />
                <br />
                <p>¿Quienes Somos?</p>
                <br />
                <p>Contáctanos</p>
            </div>
            <div className='footer-section'>
                <strong>Políticas</strong>
                <br />
                <br />
                <p>Términos y condiciones</p>
                <br />
                <p>Políticas de privacidad</p>
            </div>
            <div className='footer-section'>
                <p>Siguenos</p>
            </div>
        </footer>
    );
}
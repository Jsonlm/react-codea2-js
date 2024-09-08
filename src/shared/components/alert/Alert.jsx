import './alert.css';
import { useState, useEffect } from 'react';

export function Alert() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const alertAccepted = localStorage.getItem('alertAccepted');
        if (alertAccepted === 'true') {
            setIsVisible(false);
        }
    }, []);

    const handleAccept = () => {
        setIsVisible(false);
        localStorage.setItem('alertAccepted', 'true');
    };

    if (!isVisible) {
        return null;
    }

    return (
        <section className='main-box'>
            <div className="alert-dialog">
                <div className='container-alert'>
                    <h3>Bienvenido a Depilive</h3>
                    <br />
                    <p>Debes autorizar cookies para navegar a gusto en nuestra web</p>
                </div>
                <div className='buttons-container'>
                    <button className='btn-reject button-alert'>Rechazar</button>
                    <button className='btn-accept button-alert' onClick={handleAccept}>Aceptar</button>
                </div>
            </div>
        </section>
    );
}

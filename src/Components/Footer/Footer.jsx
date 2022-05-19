import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <section className="footer-container">
                <h2 className="title-footer"></h2>
                <h3 className="subtitle-footer"></h3>
                <div className="footer">
                    <form action="">
                        <input type="text" name='name' placeholder='Nombre' />
                        <input type="email" name='mail' placeholder='Email' />
                        <textarea name="message" cols="30" rows="10" placeholder='Ingrese su mensaje...'></textarea>
                        <button type='submit' className='btn-submit' >Enviar</button>
                    </form>
                </div>
            </section>
        </footer>
    )
}

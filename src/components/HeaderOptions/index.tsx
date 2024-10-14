import './style.css'

const optionsText = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

function HeaderOptions() {
    return (
        <ul className='options'>
            { optionsText.map( (texto) => (
            <li className='option'><p>{texto}</p></li>
            ) ) }
        </ul>
    )
}

export default HeaderOptions
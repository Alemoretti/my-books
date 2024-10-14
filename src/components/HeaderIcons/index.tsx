import './style.css'
import perfil from '../../assets/perfil.svg'
import sacola from '../../assets/sacola.svg'

const icones = [perfil, sacola]

function HeaderIcons() {
    return (
        <ul className='icones'>
          { icones.map( (icone) => (
            <li className='icone'><img src={icone}></img></li>
          ) ) }
        </ul>         
    )
}

export default HeaderIcons
import perfil from '../../assets/perfil.svg'
import sacola from '../../assets/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
  margin-right: 40px;
  align-items: center;
  display: flex;
`

const Icones = styled.ul`
  display: flex;
  align-items: center;
`

const icones = [perfil, sacola]

function HeaderIcons() {
    return (
        <Icones>
          { icones.map( (icone) => (
            <Icone><img src={icone}></img></Icone>
          ) ) }
        </Icones>         
    )
}

export default HeaderIcons
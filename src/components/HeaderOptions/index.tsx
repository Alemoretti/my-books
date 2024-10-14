import styled from "styled-components"

const Options = styled.ul`
    display: flex;
`

const Option = styled.ul`
    font-size: 16px;
    min-width: 120px;
    display: flex;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

const optionsText = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

function HeaderOptions() {
    return (
        <Options>
            { optionsText.map( (texto) => (
            <Option><p>{texto}</p></Option>
            ) ) }
        </Options>
    )
}

export default HeaderOptions
import Input from '../Input'
import styled from 'styled-components'

const ResearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const TitleContainer = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubtitleContainer = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Research() {
    return (
        <ResearchContainer>
            <TitleContainer>Já sabe por onde começar?</TitleContainer>
            <SubtitleContainer>Encontre seu livro em nossa estante.</SubtitleContainer>
            <Input
                placeholder="Escreva sua próxima leitura"
            />
        </ResearchContainer>
    )
}

export default Research
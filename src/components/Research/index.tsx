import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { books } from './searchData'
import { Book } from './book'

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

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Research() {
    const [searchedBooks, setSearchedBooks] = useState<Book[]>([])
    return (
        <ResearchContainer>
            <TitleContainer>Já sabe por onde começar?</TitleContainer>
            <SubtitleContainer>Encontre seu livro em nossa estante.</SubtitleContainer>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={event => {
                    const typedText = event.target.value
                    const searchResult = books.filter( book => book.name.includes(typedText) )
                    setSearchedBooks(searchResult)
                }}
            />
            { searchedBooks.map( book => (
                <Result>
                    <img src={book.src} alt={book.name} />
                    <p>{book.name}</p>
                </Result>
            ) ) }

            
        </ResearchContainer>
    )
}

export default Research
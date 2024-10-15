import { books } from './dataLatestReleases'
import styled from 'styled-components'
import { Title } from '../Title/index'
import Recommended from '../Recommended'
import bookImage from '../../assets/livro2.png'

const LatestReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LatestReleases() {
    return (
        <LatestReleasesContainer>
            <Title 
                color="#EB9B00" 
                fontSize="36px" 
                alignment="center"
            >
                Latest Releases
            </Title>
            <NewBooksContainer>
                {books.map( book => (
                    <img src={book.src} alt={book.name} key={book.id} />
                ))}
            </NewBooksContainer>
            <Recommended 
                title="Maybe you like"
                subtitle="People who read this book also read"
                description="About the book in Recommended"
                img={bookImage}

            />
        </LatestReleasesContainer>
    )
}

export default LatestReleases
import styled from "styled-components";

interface TitleProps {
    color: string
    fontSize: string
    alignment: 'left' | 'center' | 'right'
  }

export const Title = styled.h2<TitleProps>`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.color || '#000'};
    font-size: ${props => props.fontSize || '18px'};
    text-align: ${props => props.alignment || 'center'};
    margin: 0;
`
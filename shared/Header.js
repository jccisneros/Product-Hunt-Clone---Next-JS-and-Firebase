import styled from '@emotion/styled'

export const HeaderStyle = styled.header`
  border-bottom: 2px solid var(--gray-light);
  padding: 1rem 0;
`

export const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;  
  @media(min-width: 769px){
    display: flex;
    justify-content: space-between;
  }
`

export const Logo = styled.p`
  color: var(--orange-light);
  font-size: 4rem;
  line-height: 0;
  font-weight: bold;
  font-family: 'Roboto Slab', serif;
  margin-right: 2rem;

  &:hover{
    color: var(--orange);
    cursor: pointer;
  }
`
import styled from '@emotion/styled'

export const Buton = styled.a`
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #d1d1d1;
  padding: .8rem 2rem;
  margin-right: 1rem;
  background-color: ${ props => props.bgColor ? 'var(--orange-light)' : 'white' };
  color: ${ props => props.bgColor ? '#fff'  : '#000' };

  &:last-of-type{
    margin-right: 0;
  }

  &:hover{
    cursor: pointer;
    background-color: ${ props => props.bgColor ? 'var(--orange)' : 'var(--gray)' };
    color: ${ props => props.bgColor ? '#fff'  : '#fff' };
  }
`
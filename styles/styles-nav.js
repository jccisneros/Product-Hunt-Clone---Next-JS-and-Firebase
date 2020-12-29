import styled from '@emotion/styled'

export const Nav = styled.nav`
  padding-left: 2rem;

  a{
    font-size: 1.8rem;
    margin-left: 1.8rem;
    color: var(--gray-dark);
    font-family: 'PT Sans', sans-serif;

    &:last-of-type {
      margin-right: 0;
    }

    &:hover {
      color: var(--orange);
      font-weight: 600;
    }
  }
`
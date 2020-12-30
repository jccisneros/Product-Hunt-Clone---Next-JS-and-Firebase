import styled from '@emotion/styled'

export const InputText = styled.input`
  border: 1px solid var(--gray-light);
  padding: 1rem;
  min-width: 300px;
  font-size: 1.5rem;

  &:focus{
    border: 1.9px solid var(--orange);
  }
`

export const ButtonSearch = styled.button`
  height: 3.6em;
  width: 3.6rem;
  display: block;
  background-size: 1.4rem;
  background-image: url('/img/search.png');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 1px;
  top: 1.5px;
  background-color: white;
  border: none;
  text-indent: -9999px;

  &:hover{
    cursor: pointer;
  }
`
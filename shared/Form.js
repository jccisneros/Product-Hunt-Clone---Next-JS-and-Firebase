import styled from '@emotion/styled'

export const Form = styled.form`
  max-width: 600px;
  width: 95%;
  margin: 5rem auto 2rem auto;
`

export const Field = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  label {
    flex: 0 0 150px;
    font-size: 1.8rem;
    @media(max-width: 575px){
      flex: 0 0 120px;      
    }
  }

  input{
    flex: 1;
    padding: 1rem;
    border: 1px solid var(--gray-light);
    font-size: 1.5rem;

    &:focus{
      border: 1.9px solid var(--orange);
    }
  }
`

export const InputSubmit = styled.input`
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  padding: 1.5rem;
  background-color: var(--orange-light);
  color: #fff;
  width: 100%;
  font-size: 1.8rem;
  font-family: 'PT sans', sans-serif;

  &:hover{
    cursor: pointer;
    background-color: var(--orange);    
  }
`
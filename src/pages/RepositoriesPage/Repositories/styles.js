import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 5rem;
  margin-top: 2rem;
  padding: 10px;


  @media screen and (max-width:  ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width:  ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: auto;
  }




`;

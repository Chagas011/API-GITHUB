import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width:  ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background:  ${(props) => props.theme.colors.container};
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: hidden;
`;

export const Main = styled.section`
  background:  ${(props) => props.theme.colors.gray700};
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  padding: 20px;
  @media screen and (max-width:  ${(props) => props.theme.breakpoints.md}) {
    height: 100%;
    padding: 0;
  }

  @media screen and (max-width:  ${(props) => props.theme.breakpoints.sm}) {
    padding: 0;
  }
`;




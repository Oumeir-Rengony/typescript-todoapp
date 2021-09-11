import styled from "styled-components";
import Todo from "./components/todo";
import GlobalStyle from "./style/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />

      <StyledWrapper>
        <header className="header">
          <div className="logo-container">
            <img className="logo" src="./icon.png" alt="logo" />
          </div>
          <h1 className="header-title">MyTasks</h1>
        </header>
        <Todo />
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 18px auto;

  @media (min-width: 425px) {
    max-width: 600px;
  }

  @media (min-width: 768px) {
    border-radius: 20px;
    padding: 16px;
    background: rgb(245, 222, 70);
  }

  .header {
    display: flex;
    align-items: center;

    .logo-container {
      width: 64px;
      margin: 0 12px;

      .logo {
        max-width: 100%;
      }
    }

    .header-title {
      color: #585858;

      @media (min-width: 768px) {
        color: #fff;
      }
    }
  }
`;

export default App;

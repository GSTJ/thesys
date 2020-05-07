import styled from "styled-components";

export default styled.div`
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  .dropzone {
    flex: 1;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .dropzone,
  aside {
    padding: 15px;
  }
`;

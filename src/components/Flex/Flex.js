import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) => `
    flex-direction: ${props?.flexdirection ? props.flexdirection : 'column'};
    gap: ${props?.gap ? props.gap : ''};
    flex-wrap: ${props?.flexwrap ? props.flexwrap : 'wrap'};
  `}
`;
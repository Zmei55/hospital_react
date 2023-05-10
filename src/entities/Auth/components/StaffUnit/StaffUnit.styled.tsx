import styled from "@emotion/styled";

export const SubTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.17;

  margin-bottom: ${props => props.theme.spacing(10)};
`;

export const StationsList = styled.ul`
  width: 368px;
  height: 152px;
  overflow: auto;

  margin-bottom: ${props => props.theme.spacing(18)};

  ::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    height: 100px;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.grey.default};

    :active {
      background-color: ${props => props.theme.colors.grey.pressed};
    }
  }
`;

export const StationListItem = styled.li`
  display: flex;

  font-weight: 500;

  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 368px;
`;

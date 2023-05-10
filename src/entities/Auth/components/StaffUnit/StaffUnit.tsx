import { useHandleChange } from "entities/Auth";
import {
  useAppNavigate,
  Spinner,
  InputEl as RadioBtn,
  Button as BackBtn,
  Button as LoginBtn,
  Icon,
} from "shared";

import {
  SubTitle,
  StationsList,
  StationListItem,
  BtnContainer,
} from "./StaffUnit.styled";

export function StaffUnit() {
  const { formState, handleChange, isLoading } = useHandleChange();
  const [navigate] = useAppNavigate();

  const isEmptyLoginForm = formState.station === "";

  return (
    <>
      <SubTitle>Wählen Sie eine Personaleinheit</SubTitle>

      <StationsList>
        <StationListItem>
          <RadioBtn
            width="48px"
            height="48px"
            type="radio"
            name="station"
            value="chirurgisch"
            onChange={handleChange}
            marginRight="8px"
          />
          chirurgische Station, Krankenschwester
        </StationListItem>

        <StationListItem>
          <RadioBtn
            width="48px"
            height="48px"
            type="radio"
            name="station"
            value="neurologisch"
            onChange={handleChange}
            marginRight="8px"
          />
          neurologische Station, Krankenschwester
        </StationListItem>

        <StationListItem>
          <RadioBtn
            width="48px"
            height="48px"
            type="radio"
            name="station"
            value="traumatologisch"
            onChange={handleChange}
            marginRight="8px"
          />
          traumatologische Station, Krankenschwester
        </StationListItem>
      </StationsList>

      <BtnContainer>
        <BackBtn
          width="172px"
          height="72px"
          background="grey"
          color="#524E6B"
          onClick={() => navigate("/")}
        >
          <Icon icon="caret-left-bold" size={24} color="grey" />
          Zurück
        </BackBtn>

        <LoginBtn
          type="submit"
          width="172px"
          height="72px"
          background="blue"
          disabled={isEmptyLoginForm}
        >
          {isLoading ? <Spinner /> : "Log In"}
        </LoginBtn>
      </BtnContainer>
    </>
  );
}

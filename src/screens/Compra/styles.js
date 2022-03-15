import styled from "styled-components";
import DefaultCard from "../../components/Card";

const Card = styled(DefaultCard)`
  padding: 25px !important;
`;

const Info = styled.h2`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  letter-spacing: -0.04em;
  color: #7e7e7e;
`;

const Value = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  letter-spacing: -0.04em;
  color: #2f2f2f;
`;

export { Card, Info, Value };

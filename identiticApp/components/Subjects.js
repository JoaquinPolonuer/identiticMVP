import React from "react";
import styled from "styled-components";

const SubjectMarks = props => (
  <Container>
    <Image source={props.image} resizeMode="contain" />
    <Text>{props.text}</Text>
    <Num>{props.mark}</Num>
  </Container>
);

export default SubjectMarks;

const Container = styled.View`
  flex-direction: row;
  background: white;
  height: 60px;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  align-items: center;
  margin: 2px 0px;
  width: 93%;
  elevation: 2;
`;

const Image = styled.Image`
  height: 36px;
  width: 36px;
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 12px;
`;
const Num = styled.Text`
  font-weight: 500;
  font-size: 17px;
  position: absolute;
  right: 25px;
  color: #7c7a7a;
  margin-left: 12px;
`;

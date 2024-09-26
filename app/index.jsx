import { router } from "expo-router";
import styled from "styled-components/native";

export default function Index() {
  return (
    <>
      <Container>
        <Title>Conversor</Title>
        <Subtitle>(CM) a (M)</Subtitle>
        <StartButton
          onPress={() => {
            router.push("/ConversorScreen");
          }}
        >
          <ButtonText>Iniciar</ButtonText>
        </StartButton>
      </Container>
    </>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f7e7cd;
`;
const Title = styled.Text`
  font-size: 50px;
  font-weight: 800;
  color: #62513a;
`;
const Subtitle = styled.Text`
  font-size: 20px;
  color: #62513a;
`;
const StartButton = styled.TouchableOpacity`
  background-color: #62513a;
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
`;
const ButtonText = styled.Text`
  color: #ffff;
`;

import { router } from "expo-router";
import { useState } from "react";
import styled from "styled-components/native";

export default function Conversor() {
  const [resultado, setResultado] = useState(0);
  const [cm, setCm] = useState("");

  const convertir = () => {
    const cmValue = parseFloat(cm);
    if (!isNaN(cmValue)) {
      setResultado(cmValue * 0.01); // Actualiza el resultado
    }
  };

  return (
    <Container>
      <StyledInput
        placeholder="Ingrese un valor"
        value={cm}
        onChangeText={setCm} // Actualiza el valor de cm
        keyboardType="numeric"
      />
      <CalculateButton onPress={convertir}>
        <ButtonText>Calcular</ButtonText>
      </CalculateButton>
      <ResultText>Resultado: {resultado} mts</ResultText>
      <ButtonVolver onPress={() => router.push("/index")}>
        <ButtonText>Volver</ButtonText>
      </ButtonVolver>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f7e7cd;
`;

const StyledInput = styled.TextInput`
  width: 80%;
  padding: 10px;
  margin-bottom: 20px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
`;

const CalculateButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

const ResultText = styled.Text`
  margin: 20px 0;
  font-size: 18px;
  color: #333;
`;

const ButtonVolver = styled.TouchableOpacity`
  background-color: #6c757d;
  padding: 10px 20px;
  border-radius: 5px;
`;

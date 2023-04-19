import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  container,
  dateEvent,
  nameEvent,
  input,
  button,
  buttonText,
  form,
} from "./styles";
import Participant from "../../components/Participant";
import IParticipant from "../../interface/Participant";
import { useRef, useState } from "react";
import uuid from "react-native-uuid";

export default function Home() {
  const inputRef = useRef<TextInput>({} as TextInput);
  const [valueInput, setValueInput] = useState("");
  const [participants, setParticipants] = useState<IParticipant[]>([]);

  function handleAddPartipant() {
    if (participants.some((participant) => participant.name === valueInput)) {
      Alert.alert(
        "Parcipante já existe",
        "Um participante com esse nome já está cadastrado"
      );
      return;
    }

    const newParticipant: IParticipant = {
      name: valueInput,
      id: uuid.v4() as string,
    };

    setParticipants((prev) => [...prev, newParticipant]);
    inputRef.current.clear();
  }

  function handleRemoveParticipant({ id, name }: IParticipant) {
    Alert.alert(
      "Remover participante",
      `Você deseja realmente remove o participante ${name}?`,
      [
        {
          text: "Sim",
          onPress: () => {
            const filterParticipants = participants.filter(
              (item) => item.id !== id
            );
            setParticipants(filterParticipants);
          },
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View style={container}>
      <Text style={nameEvent}>Nome do Evento</Text>

      <Text style={dateEvent}>Quinta, 13 de abril de 2023</Text>

      <View style={form}>
        <TextInput
          ref={inputRef}
          style={input}
          onChangeText={(value) => setValueInput(value)}
          placeholder="Nome do participante"
          keyboardType="default"
          placeholderTextColor="#424242"
        />

        <TouchableOpacity style={button} onPress={handleAddPartipant}>
          <Text style={buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Participant
            key={item.id}
            name={item.name}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
      />
    </View>
  );
}

import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native";
import { indexStyles } from "@/styles";
import { Participant } from "@/components/Participant";
import { useState } from "react";

export default function Index() {
  const [name, setName] = useState<string>('')
  const [participants, setParticipants] = useState<string[]>([])

  const handleParticipantAdd = () => {
    if (participants.includes(name)) {
      return Alert.alert("Participante Existe", "Já existe um participante com esse nome")
    }

    if (name.trim().length > 0) {
      setParticipants([...participants, name])
      setName('')
    }
  }

  const handleParticipantRemove = (text: string) => {
    Alert.alert('Remover', `Remover o participante ${text}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(participants.filter(participant => participant !== text))
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View
      style={indexStyles.container}
    >
      <Text style={indexStyles.eventName}>Nome do evento</Text>

      <Text style={indexStyles.eventDate}>Sexta, 28 de janeito de 2024</Text>

      <View style={indexStyles.form}>
        <TextInput
          style={indexStyles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setName}
          value={name}
        />
        <TouchableOpacity style={indexStyles.button} onPress={handleParticipantAdd}>
          <Text style={indexStyles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (<Participant name={item} onRemove={() => handleParticipantRemove(item)} />)}
        contentContainerStyle={indexStyles.scroll}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={indexStyles.empty}>Não há ninguém</Text>}
      />
    </View >
  );
}
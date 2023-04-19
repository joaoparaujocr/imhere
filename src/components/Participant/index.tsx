import { View, Text, TouchableOpacity } from "react-native";
import { container, nameText, button, buttonText } from "./styles";

interface ParticipantProps {
  name: string;
  onRemove: () => void;
}

export default function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={container}>
      <Text style={nameText}>{name}</Text>
      <TouchableOpacity onPress={onRemove} style={button}>
        <Text style={buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

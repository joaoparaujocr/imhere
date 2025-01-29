import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    backgroundColor: '#1F1E25',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    textAlignVertical: 'center',
    paddingLeft: 16
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E23C44',
    borderRadius: 5
  }
})
import { StyleSheet } from 'react-native'

export const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    paddingTop: 54,
    paddingHorizontal: 28,
  },
  eventName: { color: '#FDFCFE', fontSize: 24, fontWeight: 'bold' },
  eventDate: { color: '#6b6b6b' },
  input: {
    backgroundColor: '#1F1E25',
    height: 56,
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    flex: 1
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: '#31Cf67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
    marginTop: 16,
    marginBottom: 32
  },
  scroll: {
    gap: 10
  },
  empty: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center'
  }
})
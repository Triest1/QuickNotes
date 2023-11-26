import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: 'rgba(188, 163, 127, 0.8)', //Cardview background
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    width: '100%', // Adjust as needed
    borderColor: '#6C3428', // Border color for the button
    borderWidth: 2, // Border width for the button
  },
  input: {
    borderColor: '#6C3428',
    borderWidth:2,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#FAEED1',
    marginBottom: 10,
    width: '100%',
    fontWeight:'bold',
  },
  inputCard: {
    marginBottom: 20,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#BCA37F',
    width: '80%',
    borderColor: '#6C3428', // Border color for the button
    borderWidth: 2, // Border width for the button
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  labelText: {
    color: 'black', // Label text color
    marginBottom: 5,
    fontWeight: 'bold'
  },
});

export default styles;

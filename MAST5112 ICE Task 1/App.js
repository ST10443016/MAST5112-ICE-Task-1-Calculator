import {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function TasksApp() {
 const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [ans, setAns] = useState('');

  const Add = () => {
    const val1 = +num1;
    const val2 = +num2;
    setAns(val1 + val2);
  };

  const Sub = () => {
    const val1 = +num1;
    const val2 = +num2;
    setAns(val1 - val2);
  };

  const Mul = () => {
    const val1 = +num1;
    const val2 = +num2;
    setAns(val1 * val2);
  };

  const Div = () => {
    const val1 = +num1;
    const val2 = +num2;
    if (val2 !== 0) {
      setAns(val1 / val2);
    } else {
      setAns('Error: numbers cannot be divided by zero');
    }
  };

  const Pow = () => {
    const val1 = +num1;
    const val2 = +num2;
    setAns(Math.pow(val1, val2));
  };

  const Sqr = () => {
    const val1 = +num1;
    setAns(Math.sqrt(val1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calculator</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a Number"
          keyboardType="numeric"
          value={num1}
          onChangeText={(text) => setNum1(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter a Number"
          keyboardType="numeric"
          value={num2}
          onChangeText={(text) => setNum2(text)}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.addButton} onPress={Add}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={Sub}>
          <Text style={styles.addButtonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={Mul}>
          <Text style={styles.addButtonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={Div}>
          <Text style={styles.addButtonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={Pow}>
          <Text style={styles.addButtonText}>Pwr</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={Sqr}>
          <Text style={styles.addButtonText}>Sqr</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.answer}>
        <Text style={styles.answerText}>{ans}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 1,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
    paddingHorizontal: 10,
    marginVertical: 10,
    textAlign: 'center',
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  addButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  answer: {
    marginTop: 25,
    borderWidth: 2,
    borderColor: 'black',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerText: {
    fontSize: 16,
  },
});

export default TasksApp;
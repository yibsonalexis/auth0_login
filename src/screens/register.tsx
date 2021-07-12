import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useAuthContext} from '../context/AuthContext';

interface iFormState {
  username: string;
  usernameError: boolean;
  password: string;
  passwordError: boolean;
}

export const RegisterScreen = () => {
  const {
    createUser,
    authState: {isLoading, error},
  } = useAuthContext();
  const [formState, setFormState] = useState<iFormState>({
    username: '',
    usernameError: false,
    password: '',
    passwordError: false,
  });

  const validateLogin = async () => {
    let usernameError = false;
    let passwordError = false;

    if (!formState.username.length) {
      usernameError = true;
    }
    if (!formState.password.length) {
      passwordError = true;
    }
    setFormState(currentData => ({
      ...currentData,
      usernameError,
      passwordError,
    }));
    if (!usernameError && !passwordError) {
      createUser(formState.username, formState.password);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>REGISTER</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email or username"
          placeholderTextColor="rgba(44,44,44,0.4)"
          returnKeyType="next"
          style={[styles.input, formState.usernameError && styles.inputError]}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={formState.username}
          onChangeText={text =>
            setFormState(currentData => ({
              ...currentData,
              username: text.trim(),
            }))
          }
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(44,44,44,0.4)"
          secureTextEntry
          returnKeyType="go"
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.input, formState.passwordError && styles.inputError]}
          value={formState.password}
          onChangeText={text =>
            setFormState(currentData => ({
              ...currentData,
              password: text.trim(),
            }))
          }
        />
      </View>

      {!!error && <Text style={styles.textError}>{error}</Text>}

      <View style={styles.buttonContainer}>
        {isLoading ? (
          <Text style={styles.loadingText}>Loading...</Text>
        ) : (
          <TouchableOpacity onPress={validateLogin}>
            <Text style={styles.button}>REGISTER</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginText: {
    marginVertical: 50,
    fontSize: 70,
    color: '#1482ad',
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    color: '#333333',
    paddingHorizontal: 10,
    borderColor: '#eaeaea',
    borderWidth: 1.0,
  },
  inputError: {
    borderColor: 'red',
  },
  buttonContainer: {
    width: 300,
    height: 50,
    backgroundColor: '#1482ad',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  loadingText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '400',
    fontSize: 20,
  },
  textError: {
    textAlign: 'center',
    color: 'red',
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 20,
  },
});

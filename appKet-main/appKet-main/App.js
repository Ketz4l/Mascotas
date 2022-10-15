import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import MainStack from "./navigation/MainStack";

const App = () => {
  return (
    // <View style={styles.container}>
    //   <Text>hola</Text>
    //   <Image
    //     source={{ uri: "https://picsum.photos/200/200" }}
    //     style={styles.img}
    //   />
    //   <TouchableOpacity
    //     style={styles.btn}
    //     onPress={() => Alert.alert("AAAAAAAAAAA yo")}
    //   >
    //     <Text style={styles.txtBtn}>Presioname </Text>
    //   </TouchableOpacity>

      

    //   <StatusBar style="auto" />
    // </View>
    <MainStack/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 200,
    height: 200,
  },
  btn: {
    backgroundColor: "aqua",
    padding: 20,
    marginTop: 8,
  },
  txtBtn: {
    color: "#000",
    fontSize: 20,
  },
});

export default App;

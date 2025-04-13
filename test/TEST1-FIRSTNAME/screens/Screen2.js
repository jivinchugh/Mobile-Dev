import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React, { useState, useEffect } from "react";
import listData from "../modules/common.js";
import { useFocusEffect } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Screen2() {
  const [data, setData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTotal = () => {
    let total = 0;
    listData.forEach((item) => {
      const itemAmount = parseFloat(item.amount);
      if (item.deposit === true) {
        total += itemAmount;
      } else {
        total -= itemAmount;
      }
    });
    return total;
  };

  useEffect(() => {
    console.log("SCREEN 1 LOADING");
    console.log("how many tasks?", listData.length);
    setTotalAmount(calculateTotal());
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      console.log("+ SCREEN 1: user returned to this screen");
      setData([...listData]);
      setTotalAmount(calculateTotal());
    }, [])
  );

  const deletebutton = (id) => {
    const itemToDelete = listData.findIndex((item) => item.id === id);
    listData.splice(itemToDelete, 1);
    setData([...listData]);
    setTotalAmount(calculateTotal());
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <AntDesign name="delete" size={24} color="black" onPress={() => deletebutton(item.id)} />
              <Text style={styles.text}>{item.id}</Text>
              <View style={styles.column}>
                <Text style={styles.text}>{item.name}</Text>
                {item.deposit === true ? (
                  <Text style={styles.deposit}>DEPOSIT</Text>
                ) : (
                  <Text style={styles.expense}>EXPENSE</Text>
                )}
              </View>
              <Text style={styles.text}>${item.amount}</Text>
              
            </View>
          );
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.line}></View>;
        }}
      />

      <View style={styles.box}>
        <Text style={styles.btnText}>Total: ${totalAmount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  box: {
    borderWidth: 1,
    backgroundColor: "black",
    borderRadius: 10,
    paddingVertical: 12,
    marginVertical: 8,
    height: 100,
    justifyContent: "center",
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  row: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  line: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
  deposit: {
    color: "blue",
    fontWeight: 600,
  },
  expense: {
    color: "red",
    fontWeight: 600,
  },
});

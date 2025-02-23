import { StyleSheet, Text, View } from "react-native";

const Screen2 = ({ route }) => {
  const PRICE = 14.99;
  const AVOCADOPRICE = 2.0;
  const UTENSILSPRICE = 0.5;

  const quantity = route.params.qty;
  const hasavocado = route.params.avocado;
  const hasutensils = route.params.utensils;

  const itemtotal = PRICE;
  const peravocado = hasavocado ? AVOCADOPRICE : 0;
  const perutensil = hasutensils ? UTENSILSPRICE : 0;
  const subtotal = (itemtotal + peravocado + perutensil) * quantity;
  const tax = 0.13;
  const taxAmount = subtotal * tax;
  const total = taxAmount + subtotal;
  const randomOrder = Math.floor(100000 + Math.random() * 900000)
  return (
    <View style={styles.container}>
      <Text style={styles.restaurantName}>Nando's</Text>
      <Text style={styles.addressandphone}>
        15 William Kitchen Rd Unit 1, Toronto, ON M1P 5B7
      </Text>
      <Text style={styles.addressandphone}>+1 (647) 943-9270</Text>
      <Text style={styles.ordernumber}>Order #{randomOrder}</Text>
      <Text style={styles.ordername}>Name: Jenelle Chen</Text>
      <View style={styles.rowaligntext}>
        <View>
          <Text style={styles.rowtext}>
            Nandoca's Choice ({route.params.qty} @ 14.99)
          </Text>
          {hasavocado && (
            <Text style={styles.addonText}> + Avocado ($2.00)</Text>
          )}
          {hasutensils && (
            <Text style={styles.addonText}> + Utensils ($0.50)</Text>
          )}
        </View>
        <Text style={styles.rowtext}>{subtotal.toFixed(2)}</Text>
      </View>
      <View style={styles.rowaligntext}>
        <Text style={styles.rowtext}>Tax (13%)</Text>
        <Text style={styles.rowtext}>{taxAmount.toFixed(2)}</Text>
      </View>
      <View style={styles.rowaligntext}>
        <Text style={styles.totalText}>Eat In Total</Text>
        <Text style={styles.totalText}>{total.toFixed(2)}</Text>
      </View>
      <Text style={styles.footer}>Thank you for your order!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#fff",
    padding: 25,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 0,
  },
  addressandphone: {
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "center",
    marginTop: 4,
  },
  ordernumber: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: "left",
    marginTop: 15,
    marginBottom: 5,
  },
  ordername: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: "left",
    marginBottom: 15,
  },
  rowaligntext: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  rowtext: {
    fontSize: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  footer: {
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 20,
  },
  addonText: {
    fontSize: 14,
  },
});

export default Screen2;

## How to output to the screen


1.  You need a `<Text>`		→ text is going to display your message that you want to output to the screen

```
<Text style={styles.text}></Text>
```


2. You need a state variable	→ state variable will store the message that should go in the `<text>`
```
import {useState} from "react"  
const [msg, setMsg] = useState("hello")
```
3. Attach the state variable to the `<Text>`
```
<Text style={styles.text}>
     {msg}
</Text>
```

4. When the button is pressed, assign a value to the state variable

```
// click handler for the button
const buttonPressed = () => {
  console.log("Hello")  


  // randomly generate a number, and output to the screen
  // 5 - 200
 const randomValue = Math.floor(Math.random() * (200 - 5 + 1) + 5);
 setMsg(`your lucky number is : ${randomValue}`)
}
```
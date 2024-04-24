import { Pressable, PressableProps, Text, Image } from "react-native";
import { styles } from "./styles";


export type IngredientesProps = {
  name: string
  image: string
  selected?: boolean
}

export function Ingredient({name, image, selected = false, ...rest}: IngredientesProps & PressableProps) {
  return (
    <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
      <Image style={styles.image} source={require("@/assets/apple.png")}/>
      <Text style={styles.image}>
        {name}
      </Text>
    </Pressable>
  )
}


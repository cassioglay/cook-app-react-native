import { styles } from "./styles";
import { View, Text } from 'react-native'  

export default function Index(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha os produtos</Text>
            <Text style={styles.subtitle}> 
                Descubra a receitas baseadas nos produtos que você escolheu
            </Text>
        </View>

    )
}
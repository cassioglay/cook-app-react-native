import { styles } from "./styles";
import { View, Text } from 'react-native'  

export default function Index(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                
                <Text style={styles.subtitle}>os produtos</Text>
                </Text>
            <Text style={styles.message}> 
                Descubra a receitas baseadas nos produtos que você escolheu
            </Text>
        </View>

    )
}
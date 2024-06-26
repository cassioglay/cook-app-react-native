import { View, Text, ScrollView, Alert } from "react-native"

import { Ingredient } from "@/components/Ingredient";
import { Selected } from "@/components/Selected";

import { styles } from "./styles";
import { useState } from "react";

export default function Index() {

    const [selected, setSelected] = useState<string[]>([])

    function handleToggleSelected(value:string) {
        if (selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }

        setSelected((state) => [...state, value])
    }

    function handleClearSelected() {
        Alert.alert("Limpar", "Deseja limpar tudo", [
            { text: "Não", style: "cancel" },
            { text: "Sim", onPress: () => setSelected([]) }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}

                <Text style={styles.subtitle}>os produtos</Text>
            </Text>
            <Text style={styles.message}>
                Descubra a receitas baseadas nos produtos que você escolheu
            </Text>

            <ScrollView contentContainerStyle={styles.ingredients} showsVerticalScrollIndicator={false}>
                {
                    Array.from({ length: 100 }).map((_, index) => (
                        <Ingredient key={index}
                            name="Maça"
                            image=""
                            selected={selected.includes(String(index))}
                            onPress={() => handleToggleSelected(String(index))}
                        
                        />
                    ))
                }
            </ScrollView>
            {
                selected.length > 0 && (
                    <Selected quantity={selected.length} onClear={handleClearSelected} onSearch={()=> {}} />
                )
            }
        </View>
    )
}
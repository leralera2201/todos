import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList, SafeAreaView } from 'react-native';
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";


export default function App() {
  const [goals, setGoals] = useState([])
  const [visible, setVisible] = useState(false)

  const onAdd = (goalText) => {
    if(goalText.length === 0){
      return;
    }
    setGoals([...goals, {id: Math.random().toString(), text: goalText}])
    setVisible(false)
  }

  const onDelete = (id) => {
    const newGoals = goals.filter(goal => goal.id !== id)
    setGoals(newGoals)
  }

  const onCancel = () => {
    setVisible(false)
  }

  return (
      <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 50}}>
        <Button title="Add new goal" onPress={() => setVisible(true)}/>
        <GoalInput onAdd={onAdd} visible={visible} onCancel={onCancel}/>
        <View style={{marginTop: 20}}>
          <FlatList
              data={goals}
              renderItem={itemData => (
                 <GoalItem item={itemData.item} onDelete={onDelete}/>
                )
              }
              keyExractor={(item, index) => item.id}
          />
        </View>
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({


});

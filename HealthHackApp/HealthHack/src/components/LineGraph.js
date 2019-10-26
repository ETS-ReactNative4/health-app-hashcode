import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import { Line } from 'react-native-svg';
import { Dimensions, Text, StyleSheet } from "react-native";
const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    data: [ 20, 45, 28, 80, 99, 43 ],
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
    strokeWidth: 2 // optional
  }]
}
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0.05,
  backgroundGradientTo: '#1E2923',
  backgroundGradientToOpacity: 0.05,
  color: (opacity = 1) => `rgba(0, 0, 52, ${opacity})`,
  strokeWidth: 3, 
  barPercentage:0.8
}
const LineGraph = ({lineStyles, textContent}) => {
  
  return (
    <>
      <LineChart
        style={lineStyles}
        data={data}
        width={screenWidth - screenWidth /10}
        height={220}
        chartConfig={chartConfig}
      />
      <Text style={styles.textContent}>{textContent}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  textContent: {
    fontSize: 16,
    fontWeight: "600"
  }
});

export default LineGraph;
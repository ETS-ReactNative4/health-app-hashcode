import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LineGraph from '../components/LineGraph';
import { FlatList } from 'react-native-gesture-handler';
import Map from '../components/Map';
import Call from '../components/Call';

const MonitorMainScreen = ({navigation}) => {
  const  [smallValues, setSmallValues] = useState({
    temp: 26,
    bac: 0.002,
    pulse: 58
  });

  const  [locationValues, setLocationValues] = useState({
    temp: 26,
    pressure: 1105,
    alt: 1002,
    gps: {
      latitude: 12.93539,
      longitude: 77.534851,
      title: "PES University",
      desc: "PES University Hackathon HashCode 2019"
    }
  });

  const thermalImagesBW = [
    require('../../assets/thermal-images/1.png'),
    require('../../assets/thermal-images/2.png'),
    require('../../assets/thermal-images/3.png'),
    require('../../assets/thermal-images/4.png'),
  ];

  const thermalImagesColor = [
    require('../../assets/thermal-images/6.png'),
    require('../../assets/thermal-images/7.png'),
    require('../../assets/thermal-images/8.png'),
    require('../../assets/thermal-images/9.png'),
  ];
  // console.log(thermalImages);
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.section}>
        <Text style={styles.heading}>Patient</Text>
        <LineGraph 
          lineStyles={styles.lineGraph} 
          textContent={"ECG Graph"}
        />
        <LineGraph 
          lineStyles={styles.lineGraph} 
          textContent={"EKG Graph"}
        />
        <View>
          <View style={{...styles.boxes, backgroundColor: '#F5F5F5'}}>
            <Text style={styles.boxesChild} >Temperature</Text>
            <Text style={{...styles.boxesChild, left: 60}} >
              {smallValues.temp}
              <MaterialCommunityIcons name="temperature-celsius" size={15}/>
            </Text>
          </View>
          <View style={{...styles.boxes, backgroundColor: '#F5F5F5'}}>
            <Text style={styles.boxesChild} >Blood Alcohol Conc.</Text>
            <Text style={{...styles.boxesChild, left: 60}} >
              {smallValues.temp}
              <MaterialCommunityIcons name="percent" /><Text style={{fontSize: 14}}>vol</Text>
            </Text>
          </View>
          <View style={{...styles.boxes, backgroundColor: '#F5F5F5'}}>
            <Text style={styles.boxesChild} >Pulse Rate</Text>
            <Text style={{...styles.boxesChild, left: 60}} >
              {smallValues.temp}<Text style={{fontSize: 14}}>/min</Text>
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.imagesText}>Thermal Images</Text>
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={thermalImagesBW}
            keyExtractor={(item)=>item.toString()}
            renderItem={({item}) => {
              return <Image source={item} style={styles.imageStyle} />                
            }}
          />
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={thermalImagesColor}
            keyExtractor={(item)=>item.toString()}
            renderItem={({item}) => {
              return <Image source={item} style={styles.imageStyle} />                
            }}
          />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Location</Text>
        <View style={{...styles.boxes, backgroundColor: '#F5F5F5'}}>
          <Text style={styles.boxesChild} >Temperature</Text>
          <Text style={{...styles.boxesChild, left: 60}} >
            {smallValues.temp}
            <MaterialCommunityIcons name="temperature-celsius" size={15}/>
          </Text>
        </View>
        <View style={{...styles.boxes, backgroundColor: '#F5F5F5'}}>
          <Text style={styles.boxesChild} >Pressure</Text>
          <Text style={{...styles.boxesChild, left: 60}} >
            {locationValues.pressure}
            <Text style={{fontSize: 14}}>mb</Text>
          </Text>
        </View>
        <View style={{...styles.boxes, backgroundColor: '#F5F5F5'}}>
          <Text style={styles.boxesChild} >Altitude</Text>
          <Text style={{...styles.boxesChild, left: 60}} >
            {locationValues.alt}m
            <Text style={{fontSize: 12}}>above sea level</Text>
          </Text>
        </View>
        <View style={{height: 300, marginVertical: 15, borderRadius: 10}}>
          <Map 
            latitude={locationValues.gps.lat} 
            longitude={locationValues.gps.lon}
            title={locationValues.gps.title}
            desc={locationValues.gps.desc}
          />
        </View>
      </View>
      <Call />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize:20,
    fontWeight:'600',
    marginVertical: 10,
  }, 
  section: {
    marginHorizontal: 15
  },
  lineGraph: { 
    borderRadius: 10, 
    alignSelf: 'center'
  },
  boxes: {
    flexDirection: 'row',
    paddingVertical: 25,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15
  },
  boxesChild: {
    flex: 1,
    fontSize: 21,
    // // textAlign: 'center'
    // borderWidth: 2,
    // borderColor: 'black'
  },
  imagesText:{
    fontSize: 20,
    fontWeight: "500",
    marginTop: 15,
    marginBottom: 5
  },
  imageStyle: {
    height: 100,
    width: 100,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10
  }
});

export default MonitorMainScreen;
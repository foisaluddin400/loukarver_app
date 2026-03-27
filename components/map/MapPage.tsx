import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import StatusModalMap from './StatusModalMap';
import AddDestination from './AddDestination';

const MapPage = () => {
  const [open, setOpen] = useState(false);     // For Los Angeles detail modal
  const [open1, setOpen1] = useState(false);   // For Add Destination modal

  return (
    <View style={styles.container}>
      {/* Map Section */}
      <View style={styles.mapContainer}>
        <Image
          source={require('../../assets/images/map.jpg')}   // ← Fixed: Use require()
          style={styles.mapImage}
          resizeMode="cover"
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Past</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Bucket List</Text>
        </TouchableOpacity>
      </View>

      {/* Destinations List */}
      <ScrollView 
        style={styles.listContainer} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* Los Angeles - Clickable */}
        <TouchableOpacity onPress={() => setOpen(true)} activeOpacity={0.9}>
          <View style={styles.destinationCard}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>🏙️</Text>
            </View>
            <View style={styles.details}>
              <View style={styles.titleRow}>
                <Text style={styles.destinationTitle}>Los Angeles, US</Text>
                <View style={[styles.statusBadge, styles.pastBadge]}>
                  <Text style={styles.statusText}>Past</Text>
                </View>
              </View>
              <Text style={styles.subtitle}>Where it all began. Our home base.</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Turin */}
        <View style={styles.destinationCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🗼</Text>
          </View>
          <View style={styles.details}>
            <View style={styles.titleRow}>
              <Text style={styles.destinationTitle}>Turin, Italy</Text>
              <View style={[styles.statusBadge, styles.pastBadge]}>
                <Text style={styles.statusText}>Past</Text>
              </View>
            </View>
            <Text style={styles.subtitle}>Amanda's world. Where I fell even harder.</Text>
          </View>
        </View>

        {/* Paris */}
        <View style={styles.destinationCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🗼</Text>
          </View>
          <View style={styles.details}>
            <View style={styles.titleRow}>
              <Text style={styles.destinationTitle}>Paris, France</Text>
              <View style={[styles.statusBadge, styles.bucketBadge]}>
                <Text style={styles.statusText}>Bucket List</Text>
              </View>
            </View>
            <Text style={styles.subtitle}>One day. We always say one day.</Text>
          </View>
        </View>

        {/* Tulum */}
        <View style={styles.destinationCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🏛️</Text>
          </View>
          <View style={styles.details}>
            <View style={styles.titleRow}>
              <Text style={styles.destinationTitle}>Tulum, Mexico</Text>
              <View style={[styles.statusBadge, styles.upcomingBadge]}>
                <Text style={styles.statusText}>Upcoming</Text>
              </View>
            </View>
            <Text style={styles.date}>March 20-27, 2026</Text>
            <Text style={styles.subtitle}>Our reunion trip.</Text>
          </View>
        </View>
      </ScrollView>

      {/* Add Destination Button */}
      <TouchableOpacity 
        onPress={() => setOpen1(true)} 
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>+ Add Destination</Text>
      </TouchableOpacity>

      {/* Modals */}
      <StatusModalMap visible={open} onClose={() => setOpen(false)} />
      <AddDestination visible={open1} onClose={() => setOpen1(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  

    padding: 12,
  },
  mapContainer: {
    height: 220,
    paddingTop: 12,
    
    overflow: 'hidden',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    
    paddingVertical: 12,
    gap: 8,
    backgroundColor: '#FFF8F0',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E0D0B8',
  },
  activeTab: {
    backgroundColor: '#A16438',
    borderColor: '#B7835E',
  },
  tabText: {
    color: '#6F370F',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  listContainer: {
    flex: 1,
   
  },
  destinationCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderLeftWidth: 6,
    borderWidth:1,
    borderColor: '#00800080',
    padding: 16,
    marginBottom: 12,
  
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    fontSize: 32,
  },
  details: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  destinationTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2C2C2C',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  pastBadge: {
    backgroundColor: '#71846633',
  },
  bucketBadge: {
    backgroundColor: '#C296CC33',
  },
  upcomingBadge: {
    backgroundColor: '#FEBA6D33',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2C2C2C',
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  date: {
    fontSize: 14,
    color: '#E67E22',
    fontWeight: '500',
    marginTop: 2,
  },
  addButton: {
    
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C2705A80',
    borderStyle: 'dashed',
  },
  addButtonText: {
    color: '#6F370F',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MapPage;
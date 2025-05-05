import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ProgressBarProps {
  progress: number; // от 0 до 1
  backgroundColor?: string;
  progressColor?: string;
}

export default function ProgressBar({
  progress,
  backgroundColor = '#e0e0e0',
  progressColor = '#007AFF',
}: ProgressBarProps) {
  const progressWidth = `${progress * 100}%`;

  return (
    <View style={styles.container}>
      <View style={[styles.background, { backgroundColor }]} />
      <View style={[styles.foreground, { width: progressWidth as any, backgroundColor: progressColor }]} />
      <Text style={styles.text}>{`${Math.round(progress * 100)}%`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: '100%',
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  foreground: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    zIndex: 1,
  },
});
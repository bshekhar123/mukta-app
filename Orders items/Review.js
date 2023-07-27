import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Star from '../icons/Star';

const Review = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  // Function to handle rating selection
  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  // Function to handle feedback input
  const handleFeedbackChange = (text) => {
    setFeedback(text);
  };

  // Function to handle submit button click
  const handleSubmit = () => {
    // Perform submit action (e.g., send feedback to the server)
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
  };

  // Function to handle clear button click
  const handleClear = () => {
    setRating(0);
  };

  // Function to render star icons
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRating(i)}>
          <Star
            name={rating >= i ? 'star' : 'star-o'}
            size={30}
            color={rating >= i ? 'yellow' : 'gray'}
            style={styles.starIcon}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Rate Your Experience</Text>

      {/* Star rating */}
      <View style={styles.ratingContainer}>
        {/* <Text style={styles.ratingText}>Review:</Text> */}
        {renderStars()}
      </View>

      {/* Clear button */}
      <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity>

      {/* Feedback */}
      <Text style={styles.feedbackHeading}>Feedback</Text>
      <TextInput
        style={styles.feedbackInput}
        placeholder="Share your review"
        value={feedback}
        onChangeText={handleFeedbackChange}
        multiline
      />

      {/* Submit button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    // justifyContent: 'center',
    textAlign: 'center',
    color: "gray"
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  ratingText: {
    marginRight: 10,
  },
  starIcon: {
    marginRight: 5,
  },
  clearButton: {
    alignSelf: 'flex-end',
  },
  clearButtonText: {
    color: 'red',
    fontSize: 16,
  },
  feedbackHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "gray",
    marginTop: 20,
    textAlign: 'center',
  },
  feedbackInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    height: 100,
    color: "#5A5A5A",
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Review;

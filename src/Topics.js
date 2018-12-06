// Xavier Hébert-Couturier, December 5th, 2018
// Let's import react to run react
import React, { Component } from 'react';
// Now we can import the style scheet for this element and needed elements that this element calls
import './Topics.css';
import TopicFeedBlock from './TopicFeedBlock';

// Topics.js loads the feed and structure for TopicFeedBlocks
class Topics extends Component {
  // A dynamic bock creation should replace these default calls, rendering fresh blocks as the user scrolls downwards
  render() {
    return (
      <div className="Topics">
          <div className="TopicFeed">
            <TopicFeedBlock />
            <TopicFeedBlock />
            <TopicFeedBlock />
            <TopicFeedBlock />
            <TopicFeedBlock />
            <TopicFeedBlock />
            <TopicFeedBlock />
            <TopicFeedBlock />
            <TopicFeedBlock />
            <TopicFeedBlock />
            <TopicFeedBlock />
            <TopicFeedBlock />
            <TopicFeedBlock />
            <TopicFeedBlock />
            <TopicFeedBlock />
            <TopicFeedBlock />
            <TopicFeedBlock />
            <TopicFeedBlock />
          </div>
      </div>
    );
  }
}

// Export default for simplicity
export default Topics;

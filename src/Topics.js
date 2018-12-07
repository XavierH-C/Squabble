// Xavier Hébert-Couturier, December 5th, 2018
// Let's import react to run react
import React, { Component } from 'react';
// Now we can import the style scheet for this element and needed elements that this element calls
import './Topics.css';
import TopicFeedBlock from './TopicFeedBlock';
// We'll need to manually import an image for now, in the future any images should be sourced from a database
import pineapplePlaceholderImg from './pineappleImg.jpg';
import highCapacityImg from './highCapacityImg.png';
import abortionImg from './abortionImg.jpeg';
import marvelImg from './marvelImg.webp';
// Topics.js loads the feed and structure for TopicFeedBlocks
class Topics extends Component {
  // A dynamic bock creation should replace these default calls, rendering fresh blocks as the user scrolls downwards
  render() {
    return (
      <div className="Topics">
          <div className="TopicFeed">
            <TopicFeedBlock title="Pineapple should go on pizza" 
              description="Many people say that pineapple has no place on a pizza. By agreeing, you are defending a citizen's right to have the pleasure of covering their pizza pies with pineapple."
              feedImage={pineapplePlaceholderImg}/>
            <TopicFeedBlock title="The United States should ban high-capacity magazines" 
              description="The access to high-capcity magazines endangers public spaces and adds to the mass-shooting epidemic in the United States."
              feedImage={highCapacityImg}/>
            <TopicFeedBlock title="Abortions should be easily available to all women" 
              description="Having the option to visit a planned parenthood clinic is beneficial to society and women. By agreeing, you would like to see increased funding and support for such clinics across your country."
              feedImage={abortionImg}/>
            <TopicFeedBlock title="Marvel movies are in all ways superior to DC's cinematic releases" 
              description="The quality and enjoyment of marvel's cinematic universe is legues higher than DC's"
              feedImage={marvelImg}/>
          </div>
      </div>
    );
  }
}

// Export default for simplicity
export default Topics;

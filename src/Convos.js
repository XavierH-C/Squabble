// Xavier Hébert-Couturier, December 5th, 2018
// Let's import react to run react
import React, { Component } from 'react';
// Now we can import the style scheet for this element and needed elements that this element calls
import './Convos.css';
import ConvoFeedBlock from './ConvoFeedBlock';

// Convos should should the user's active conversations and let them access them
class Convos extends Component {
  // A dynamic bock creation should replace these default calls, rendering fresh blocks as the user scrolls downwards
  render() {
    return (
      <div className="Convos">
          <div className="ConvoFeed">
          <ConvoFeedBlock title="Pineapple does go on pizza" convoUser="Laila Theriault" 
            lastMessage="I respecfully disagree and will try to explain my views on this issue."/>
          <ConvoFeedBlock title="Marvel movies are in all ways superior to DC's cinematic releases" convoUser="Xavier H-C" 
            lastMessage="But have you seen Batman vs. Superman?"/>
          <ConvoFeedBlock title="The United States should ban high-capacity magazines" convoUser="William Captain" 
            lastMessage="I respecfully disagree and will try to explain my views on this issue."/>
          <ConvoFeedBlock title="Abortions should be easily available to all women" convoUser="Pichou Hebert" 
            lastMessage="Hmm, I never saw it that way"/>
          <ConvoFeedBlock title="Pineapple does go on pizza" convoUser="Charles Couturier" 
            lastMessage="I once went to hawaii and there was no pineapple pizza there!"/>
          </div>
      </div>
    );
  }
}

// Export default for simplicity
export default Convos;
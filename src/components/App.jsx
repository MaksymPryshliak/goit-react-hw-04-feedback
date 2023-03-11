import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const handleFeedback = evt => {
  if (evt === 'Good') {
    setGood( good + 1 );
  } else if (evt === 'Neutral') {
    setNeutral(neutral + 1 );
  } else if (evt === 'Bad') {
    setBad( bad + 1);
  }
}

const  countTotalFeedback = () => {
  let total = good + neutral + bad;
  return total;
};

const  countPositiveFeedbackPercentage = () => {
  if (countTotalFeedback() === 0) {
    return 0;
  }
  return Math.round((good / countTotalFeedback()) * 100);
};

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};


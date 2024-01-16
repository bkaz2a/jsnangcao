// Given data
const events = [
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🟨 Yellow Card'],
    [64, '🟨 Yellow Card'], 
    [69, '🔁 Substitution'],
    [70, '🟥 Red Card'],
    [72, '⚽ GOAL'],
    [78, '🔁 Substitution'],
    [84, '⚽ GOAL'],
    [89, '⚽ GOAL'],
  ];
  
  // Task 1: Create an array of unique events
  const uniqueEvents = [...new Set(events.map(([_, event]) => event))];
  
  // Task 2: Remove the incorrect yellow card entry
  const correctedEvents = events.filter(([minute, event]) => !(minute === 64 && event === '🟨 Yellow Card'));
  
  // Task 3: Calculate and log the average events per minute
  const averageEventsPerMinute = events.length / 90;
  console.log(`1 event occurred, on average, every ${Math.round(90 / averageEventsPerMinute)} minutes`);
  
  // Task 4: Log events with markers for each half
  for (const [minute, event] of correctedEvents) {
    const halfMarker = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
    console.log(`${halfMarker} ${minute}: ${event}`);
  }
  // Given data
  const variables = [
    'underscore_case',
    'first_name',
    'Some_Variable',
    'calculate_AGE',
    'delayed_departure',
  ];
  
  // Function to convert underscore_case to camelCase
  const convertToCamelCase = (variable) =>
    variable.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  
  // Testing the conversion and logging the results
  for (const variable of variables) {
    const camelCaseVariable = convertToCamelCase(variable);
    const ticks = '✅'.repeat(camelCaseVariable.length);
    console.log(`${camelCaseVariable} ${ticks}`);
  }
  
  (function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
      header.style.color = 'blue';
    });
  })();
  
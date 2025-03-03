import { Exercise } from '../types';

export const exercises: Exercise[] = [
  // Chest Exercises
  {
    id: 'chest-1',
    name: 'Bench Press',
    bodyPart: 'chest',
    description: 'A compound exercise that targets the pectoral muscles, shoulders, and triceps.',
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Lie on a flat bench with your feet flat on the floor.',
      'Grip the barbell with hands slightly wider than shoulder-width apart.',
      'Lower the bar to your mid-chest.',
      'Press the bar back up to the starting position.'
    ]
  },
  {
    id: 'chest-2',
    name: 'Incline Dumbbell Press',
    bodyPart: 'chest',
    description: 'Targets the upper chest muscles and shoulders.',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Set an adjustable bench to a 30-45 degree incline.',
      'Sit on the bench with a dumbbell in each hand resting on your thighs.',
      'Lift the dumbbells to shoulder height with palms facing forward.',
      'Press the dumbbells upward until your arms are extended.',
      'Lower the dumbbells back to shoulder level.'
    ]
  },
  {
    id: 'chest-3',
    name: 'Push-ups',
    bodyPart: 'chest',
    description: 'A bodyweight exercise that targets the chest, shoulders, and triceps.',
    imageUrl: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Start in a plank position with hands slightly wider than shoulder-width apart.',
      'Keep your body in a straight line from head to heels.',
      'Lower your body until your chest nearly touches the floor.',
      'Push yourself back up to the starting position.'
    ]
  },
  {
    id: 'chest-4',
    name: 'Cable Flyes',
    bodyPart: 'chest',
    description: 'Isolates the chest muscles and provides constant tension throughout the movement.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Stand in the center of a cable machine with cables set at chest height.',
      'Grab the handles with palms facing forward.',
      'Step forward and extend arms out to the sides.',
      'Bring your hands together in front of your chest in a hugging motion.',
      'Slowly return to the starting position.'
    ]
  },

  // Back Exercises
  {
    id: 'back-1',
    name: 'Pull-ups',
    bodyPart: 'back',
    description: 'A compound exercise that targets the latissimus dorsi, rhomboids, and biceps.',
    imageUrl: 'https://images.unsplash.com/photo-1598266663439-2056e6900339?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1598266663439-2056e6900339?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Hang from a pull-up bar with hands slightly wider than shoulder-width apart.',
      'Pull your body up until your chin is above the bar.',
      'Lower yourself back to the starting position with control.'
    ]
  },
  {
    id: 'back-2',
    name: 'Bent-Over Rows',
    bodyPart: 'back',
    description: 'Targets the middle back muscles, lats, and rear shoulders.',
    imageUrl: 'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Stand with feet shoulder-width apart, holding a barbell with an overhand grip.',
      'Bend at the hips and knees, keeping your back straight.',
      'Pull the barbell toward your lower chest.',
      'Lower the barbell back to the starting position.'
    ]
  },
  {
    id: 'back-3',
    name: 'Lat Pulldowns',
    bodyPart: 'back',
    description: 'Targets the latissimus dorsi and is a good alternative to pull-ups.',
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Sit at a lat pulldown machine with thighs secured under the pads.',
      'Grab the bar with a wide overhand grip.',
      'Pull the bar down to your upper chest.',
      'Slowly return the bar to the starting position.'
    ]
  },
  {
    id: 'back-4',
    name: 'Deadlifts',
    bodyPart: 'back',
    description: 'A compound exercise that targets the entire posterior chain, including the back, glutes, and hamstrings.',
    imageUrl: 'https://images.healthshots.com/healthshots/en/uploads/2025/01/16132012/deadlift-final.jpg',
    animationUrl: 'https://images.unsplash.com/photo-1598268030450-8dabb6f5e993?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Stand with feet hip-width apart, with a barbell in front of you.',
      'Bend at the hips and knees to grip the bar with hands shoulder-width apart.',
      'Lift the bar by extending your hips and knees, keeping your back straight.',
      'Return the bar to the floor with control.'
    ]
  },

  // Shoulders Exercises
  {
    id: 'shoulders-1',
    name: 'Overhead Press',
    bodyPart: 'shoulders',
    description: 'A compound exercise that targets all three heads of the deltoid muscles.',
    imageUrl: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Stand with feet shoulder-width apart, holding a barbell at shoulder height.',
      'Press the barbell overhead until your arms are fully extended.',
      'Lower the barbell back to shoulder height.'
    ]
  },
  {
    id: 'shoulders-2',
    name: 'Lateral Raises',
    bodyPart: 'shoulders',
    description: 'Isolates the lateral deltoids to build shoulder width.',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Stand with feet shoulder-width apart, holding dumbbells at your sides.',
      'Raise the dumbbells out to the sides until they reach shoulder height.',
      'Lower the dumbbells back to your sides with control.'
    ]
  },
  {
    id: 'shoulders-3',
    name: 'Front Raises',
    bodyPart: 'shoulders',
    description: 'Targets the anterior deltoids.',
    imageUrl: 'https://images.unsplash.com/photo-1584863231364-2edc166de576?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1584863231364-2edc166de576?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Stand with feet shoulder-width apart, holding dumbbells in front of your thighs.',
      'Raise the dumbbells in front of you until they reach shoulder height.',
      'Lower the dumbbells back to the starting position with control.'
    ]
  },
  {
    id: 'shoulders-4',
    name: 'Reverse Flyes',
    bodyPart: 'shoulders',
    description: 'Targets the posterior deltoids and upper back muscles.',
    imageUrl: 'https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Sit on the edge of a bench with feet flat on the floor.',
      'Bend forward at the hips, keeping your back straight.',
      'Hold dumbbells with palms facing each other.',
      'Raise the dumbbells out to the sides until they reach shoulder height.',
      'Lower the dumbbells back to the starting position.'
    ]
  },

  // Arms Exercises
  {
    id: 'arms-1',
    name: 'Bicep Curls',
    bodyPart: 'arms',
    description: 'Isolates the biceps brachii muscles.',
    imageUrl: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Stand with feet shoulder-width apart, holding dumbbells at your sides with palms facing forward.',
      'Curl the dumbbells up to shoulder height, keeping your elbows close to your sides.',
      'Lower the dumbbells back to the starting position.'
    ]
  },
  {
    id: 'arms-2',
    name: 'Tricep Dips',
    bodyPart: 'arms',
    description: 'Targets the triceps brachii muscles.',
    imageUrl: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Sit on the edge of a bench with hands gripping the edge beside your hips.',
      'Slide your butt off the bench with legs extended.',
      'Lower your body by bending your elbows until they reach a 90-degree angle.',
      'Push yourself back up to the starting position.'
    ]
  },
  {
    id: 'arms-3',
    name: 'Hammer Curls',
    bodyPart: 'arms',
    description: 'Targets the biceps and brachialis muscles.',
    imageUrl: 'https://images.unsplash.com/photo-1583969430754-a4ca5030bb21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1583969430754-a4ca5030bb21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Stand with feet shoulder-width apart, holding dumbbells at your sides with palms facing your body.',
      'Curl the dumbbells up to shoulder height, keeping your elbows close to your sides.',
      'Lower the dumbbells back to the starting position.'
    ]
  },
  {
    id: 'arms-4',
    name: 'Skull Crushers',
    bodyPart: 'arms',
    description: 'Isolates the triceps muscles.',
    imageUrl: 'https://www.mensjournal.com/.image/t_share/MTk2OTg4MTk1NjA1MzI1NDUy/barbellskullcrusher.jpg',
    animationUrl: 'https://images.unsplash.com/photo-1584952811565-c4c4031805f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Lie on a flat bench with a dumbbell or EZ bar held above your chest.',
      'Bend your elbows to lower the weight toward your forehead.',
      'Extend your arms to return to the starting position.'
    ]
  },

  // Legs Exercises
  {
    id: 'legs-1',
    name: 'Squats',
    bodyPart: 'legs',
    description: 'A compound exercise that targets the quadriceps, hamstrings, and glutes.',
    imageUrl: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Stand with feet shoulder-width apart, toes slightly turned out.',
      'Lower your body by bending your knees and hips, as if sitting in a chair.',
      'Keep your chest up and back straight.',
      'Return to the starting position by extending your knees and hips.'
    ]
  },
  {
    id: 'legs-2',
    name: 'Lunges',
    bodyPart: 'legs',
    description: 'Targets the quadriceps, hamstrings, and glutes, while also improving balance and coordination.',
    imageUrl: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Stand with feet hip-width apart.',
      'Step forward with one leg and lower your body until both knees are bent at 90-degree angles.',
      'Push through the front heel to return to the starting position.',
      'Repeat with the other leg.'
    ]
  },
  {
    id: 'legs-3',
    name: 'Leg Press',
    bodyPart: 'legs',
    description: 'Targets the quadriceps, hamstrings, and glutes.',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Sit on a leg press machine with your back against the pad and feet on the platform.',
      'Release the safety catches and lower the platform by bending your knees.',
      'Push the platform back up by extending your knees.',
      'Re-engage the safety catches when finished.'
    ]
  },
  {
    id: 'legs-4',
    name: 'Calf Raises',
    bodyPart: 'legs',
    description: 'Isolates the calf muscles.',
    imageUrl: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Stand on the edge of a step or platform with your heels hanging off.',
      'Lower your heels below the level of the step.',
      'Raise your heels as high as possible by pushing through the balls of your feet.',
      'Lower your heels back to the starting position.'
    ]
  },

  // Core Exercises
  {
    id: 'core-1',
    name: 'Crunches',
    bodyPart: 'core',
    description: 'Targets the rectus abdominis muscles.',
    imageUrl: 'https://images.unsplash.com/photo-1544216717-3bbf52512659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1544216717-3bbf52512659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Lie on your back with knees bent and feet flat on the floor.',
      'Place your hands behind your head or across your chest.',
      'Lift your shoulders off the floor by contracting your abdominal muscles.',
      'Lower your shoulders back to the floor with control.'
    ]
  },
  {
    id: 'core-2',
    name: 'Plank',
    bodyPart: 'core',
    description: 'A static exercise that targets the entire core, including the rectus abdominis, obliques, and transverse abdominis.',
    imageUrl: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Start in a push-up position, then bend your elbows and rest your weight on your forearms.',
      'Keep your body in a straight line from head to heels.',
      'Engage your core and hold the position for the desired duration.'
    ]
  },
  {
    id: 'core-3',
    name: 'Russian Twists',
    bodyPart: 'core',
    description: 'Targets the oblique muscles.',
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Sit on the floor with knees bent and feet lifted slightly off the ground.',
      'Lean back slightly to engage your core.',
      'Hold your hands together in front of you and twist your torso from side to side.'
    ]
  },
  {
    id: 'core-4',
    name: 'Leg Raises',
    bodyPart: 'core',
    description: 'Targets the lower abdominal muscles.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    animationUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    instructions: [
      'Lie on your back with legs extended and hands at your sides or under your lower back for support.',
      'Lift your legs up until they form a 90-degree angle with the floor.',
      'Lower your legs back down without letting them touch the floor.',
      'Repeat for the desired number of repetitions.'
    ]
  }
];
const SoulCare={
  Anxiety:[
      {
        text: "What specific fears or phobias are causing you anxiety?",
        options: [
          { id: 0, text: "Arachnophobia (fear of spiders)", isCorrect: true },
          { id: 1, text: "Ophidiophobia (fear of snakes)", isCorrect: true },
          { id: 2, text: "Trypophobia (fear of clustered holes)", isCorrect: true },
          { id: 3, text: "Aviophobia (fear of flying)", isCorrect: true },
          { id: 4, text: "None of the above", isCorrect: false },
          { id: 5, text: "Others", isCorrect: true },
        ],
      },
      {
        text: "How do these fears affect your daily life and activities?",
        options: [
          { id: 0, text: "Avoidance", isCorrect: true },
          { id: 1, text: "Distress", isCorrect: true },
          { id: 2, text: "Disruption", isCorrect: true },
          { id: 3, text: "Anxiety", isCorrect: true },
          { id: 4, text: "None of the above", isCorrect: false },
          { id: 5, text: "Others", isCorrect: true },
        ],
      },
      {
        text: "Are there any specific situations or triggers that intensify your anxiety related to fears or phobias?",
        options: [
          { id: 0, text: "Heights", isCorrect: true },
          { id: 1, text: "Crowds", isCorrect: true },
          { id: 2, text: "Spiders", isCorrect: true },
          { id: 3, text: "Flying", isCorrect: true },
          { id: 4, text: "Public Speaking", isCorrect: true },
          { id: 4, text: "None of the above", isCorrect: false },
          { id: 5, text: "Others", isCorrect: true },
        ],
      },
      {
        text: "Do you often experience breathlessness during anxiety episodes?",
        options: [
          { id: 0, text: "Not at all", isCorrect: false },
          { id: 1, text: "Occasionally", isCorrect: true },
          { id: 2, text: "Frequently", isCorrect: true },
          { id: 3, text: "Almost always", isCorrect: true},
          { id: 4, text: "None of the above", isCorrect: false },
          { id: 5, text: "Others", isCorrect: true },
        ],
      },
      {
        text: "Have you noticed any physical symptoms accompanying your excessive worry, such as restlessness or difficulty sleeping?",
        options: [
          { id: 0, text: "Restlessness", isCorrect: true },
          { id: 1, text: "Difficulty sleeping", isCorrect: true },
          { id: 2, text: "Fatigue", isCorrect: true },
          { id: 3, text: "Muscle tension", isCorrect: true },
          { id: 4, text: "None of the above", isCorrect: false },
          { id: 5, text: "Others", isCorrect: true },
        ],
      },
      {
      text: "Have you ever experienced chest pain, Stomach pain during anxiety Episode?",
      options: [
        { id: 0, text: "Chest pain", isCorrect: true },
        { id: 1, text: "Stomach pain", isCorrect: true },
        { id: 2, text: "Prefer not to say", isCorrect: true },
        { id: 3, text: "None of the above", isCorrect: false },
        { id: 4, text: "Others", isCorrect: true },
      ],
      },
      {
      text: "Does your heart rate increase or do you experience any symptoms like Sweating, Digestive issues, Bloating and gas may be present alongside anxiety?",
      options: [
        { id: 0, text: "Increased heart rate", isCorrect: true },
        { id: 1, text: "Sweating", isCorrect: true },
        { id: 2, text: "Digestive issues", isCorrect: true },
        { id: 3, text: "Bloating and gas", isCorrect: true },
        { id: 4, text: "None of the above", isCorrect: false },
        { id: 5, text: "Others", isCorrect: true },
        ],
      },
      {
      text: "Do you worry excessively about being judged or criticized by others?",
      options: [
        { id: 0, text: "Insecurity", isCorrect: true},
        { id: 1, text: "Doubt", isCorrect: true },
        { id: 2, text: "Concern", isCorrect: true },
        { id: 3, text: "Unease", isCorrect: true},
        { id: 4, text: "None of the above", isCorrect: false },
        { id: 5, text: "Others", isCorrect: true },
        ],
      },
      {
      text: "Have you ever sought professional help or therapy for your anxiety?",
      options: [
        { id: 0, text: "Talk therapy with a psychologist or therapist.", isCorrect: true },
        { id: 1, text: "Medication prescribed by a psychiatrist.", isCorrect: true },
        { id: 2, text: "Support groups for individuals with anxiety.", isCorrect: true },
        { id: 3, text: "Mindfulness and relaxation techniques, like meditation or yoga.", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
        ],
      },

      
  ],
  Depression:[
      {
        text: "Over the past two weeks, how often have you felt little interest or pleasure in doing things you usually enjoy?",
        options: [
          { id: 0, text: "Not at all", isCorrect: false },
          { id: 1, text: "Several days", isCorrect: true },
          { id: 2, text: "More than half the days", isCorrect: true },
          { id: 3, text: "Nearly every day", isCorrect: true },
        ],
      },
      {
        text: "During the past two weeks, how often have you felt down, depressed, or hopeless?",
        options: [
          { id: 0, text: "Not at all", isCorrect: false },
          { id: 1, text: "Several days", isCorrect: true },
          { id: 2, text: "More than half the days", isCorrect: true },
          { id: 3, text: "Nearly every day", isCorrect: true },
        ],
      },
      {
        text: "Have you experienced any significant changes in your appetite or weight (either significant loss or gain) over the past two weeks?",
        options: [
          { id: 0, text: "No", isCorrect: false },
          { id: 1, text: "Yes, weight loss", isCorrect: true },
          { id: 2, text: "Yes, weight gain", isCorrect: true },
          { id: 3, text: "Maybe", isCorrect: true },
        ],
      },
      {
        text: " How often have you had trouble falling asleep, staying asleep, or sleeping too much in the past two weeks?",
        options: [
          { id: 0, text: "Not at all", isCorrect: false },
          { id: 1, text: "Several days", isCorrect: true },
          { id: 2, text: "More than half the days", isCorrect: true },
          { id: 3, text: "Nearly every day", isCorrect: true },
        ],
      },
      {
        text: "In the past two weeks, how often have you felt tired or had little energy?",
        options: [
          { id: 0, text: "Not at all", isCorrect: false },
          { id: 1, text: "Several days", isCorrect: true },
          { id: 2, text: "More than half the days", isCorrect: true },
          { id: 3, text: "Nearly every day", isCorrect: true },
        ],
      },
      {
      text: "Have you felt bad about yourself, that you're a failure, or that you've let yourself or your family down in the past two weeks?",
      options: [
        { id: 0, text: "Not at all", isCorrect: false },
        { id: 1, text: "Several days", isCorrect: true },
        { id: 2, text: "More than half the days", isCorrect: true },
        { id: 3, text: "Nearly every day", isCorrect: true },
        ],
      },
      {
      text: "Have you had trouble concentrating on things such as reading, watching TV, or making decisions over the past two weeks?",
      options: [
        { id: 0, text: "Not at all", isCorrect: false },
        { id: 1, text: "Several days", isCorrect: true },
        { id: 2, text: "More than half the days", isCorrect: true },
        { id: 3, text: "Nearly every day", isCorrect: true },
        ],
      },
      {
      text: "In the past two weeks, how often have you thought about harming yourself or that you would be better off dead?",
      options: [
        { id: 0, text: "Not at all", isCorrect: false },
        { id: 1, text: "Several days", isCorrect: true },
        { id: 2, text: "More than half the days", isCorrect: true },
        { id: 3, text: "Nearly every day", isCorrect: true },
        ],
      },
      {
      text: "Are these feelings or symptoms causing significant distress or impairment in your daily life and functioning?",
      options: [
        { id: 0, text: "No", isCorrect: false },
        { id: 1, text: "Mild distress or impairment", isCorrect: true },
        { id: 2, text: "Moderate distress or impairment", isCorrect: true },
        { id: 3, text: "Severe distress or impairment", isCorrect: true },
          ],
      },
      {
      text: "Have you sought professional help or counseling for depression in the past?",
      options: [
        { id: 0, text: "No", isCorrect: false },
        { id: 1, text: "Yes", isCorrect: true },
        { id: 2, text: "Others", isCorrect: true },
        ],
      },
      
  ],
  Panic:[
    {
      text: " I have experienced sudden and intense feelings of fear or discomfort.",
      options: [
        { id: 0, text: "Not at all", isCorrect: false },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Frequently", isCorrect: true },
        { id: 3, text: "Almost all the time", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: " During a panic attack, I have had a racing heartbeat or palpitations.",
      options: [
        { id: 0, text: "Not at all", isCorrect: false },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Frequently", isCorrect: true },
        { id: 3, text: "Almost all the time", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "  I have had difficulty breathing or felt like I was choking during a panic attack.",
      options: [
        { id: 0, text: "Not at all", isCorrect: false },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Frequently", isCorrect: true },
        { id: 3, text: "Almost all the time", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "  I have felt dizzy, lightheaded, or faint during a panic attack.",
      options: [
        { id: 0, text: "Not at all", isCorrect: false },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Frequently", isCorrect: true},
        { id: 3, text: "Almost all the time", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: " I have experienced trembling or shaking during a panic attack",
      options: [
        { id: 0, text: "Not at all", isCorrect: false },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Frequently", isCorrect: true },
        { id: 3, text: "Almost all the time", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: " I have had chest pain or discomfort during a panic attack",
      options: [
        { id: 0, text: "Not at all", isCorrect: false },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Frequently", isCorrect: true },
        { id: 3, text: "Almost all the time", isCorrect: true },
      ],
    },
    {
      text: " I have avoided situations or places because I was afraid of having a panic attack",
      options: [
        { id: 0, text: "Not at all", isCorrect: false },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Frequently", isCorrect: true},
        { id: 3, text: "Almost all the time", isCorrect: true },
      ],
    },
    {
      text: " Have you sought professional help for your panic attacks",
      options: [
        { id: 0, text: "Yes, I am currently receiving treatment", isCorrect: true },
        { id: 1, text: "Yes, but I am not currently receiving treatment", isCorrect: true },
        { id: 2, text: "No, but I am considering seeking help", isCorrect: true },
        { id: 3, text: "No, I have not considered seeking help", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
  ],
  OCD:[
    {
      text: "How often do you find yourself having repetitive, unwanted, and distressing thoughts or mental images (obsessions) that cause anxiety?",
      options: [
        { id: 0, text: "Not at all", isCorrect: false },
        { id: 1, text: "Occasionally", isCorrect: true},
        { id: 2, text: "Frequently", isCorrect: true },
        { id: 3, text: "Almost all the time", isCorrect: true },
      ],
    },
    {
      text: "Do you feel compelled to perform certain behaviors or mental acts (compulsions) in response to the obsessive thoughts, even though you recognize that these actions are excessive or irrational?",
      options: [
        { id: 0, text: "Not at all", isCorrect: false },
        { id: 1, text: "Occasionally",isCorrect: true },
        { id: 2, text: "Frequently", isCorrect: true},
        { id: 3, text: "Almost all the time", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "How much time do you spend each day on these obsessions or compulsions?",
      options: [
        { id: 0, text: "Less than 1 hour", isCorrect: false },
        { id: 1, text: "1-3 hours", isCorrect: true },
        { id: 2, text: "3-6 hours", isCorrect: true },
        { id: 3, text: "More than 6 hours", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: " Have these obsessions or compulsions significantly interfered with your daily functioning, relationships, or work/school responsibilities?",
      options: [
        { id: 0, text: "Not at all", isCorrect: false },
        { id: 1, text: "Mild interference", isCorrect: true },
        { id: 2, text: "Moderate interference", isCorrect: true },
        { id: 3, text: "Severe interference", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: " Are you able to control these obsessions or compulsions despite your efforts to stop or ignore them?",
      options: [
        { id: 0, text: "Yes, always", isCorrect: false },
        { id: 1, text: "Yes, sometimes", isCorrect: true },
        { id: 2, text: "No, rarely", isCorrect: true },
        { id: 3, text: "No, never", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: " Do you experience significant distress or anxiety if you are unable to perform the compulsive behaviors or rituals?",
      options: [
        { id: 0, text: "Not at all", isCorrect: false },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Frequently", isCorrect: true },
        { id: 3, text: "Almost all the time", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: " Have you attempted to avoid situations or places that trigger your obsessions or compulsions?",
      options: [
        { id: 0, text: "Not at all", isCorrect: false },
        { id: 1, text: "Occasionally", isCorrect: true},
        { id: 2, text: "Frequently", isCorrect: true },
        { id: 3, text: "Almost all the time", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "Do you recognize that your obsessions or compulsions are not based in reality, yet you still find it difficult to control them?",
      options: [
        { id: 0, text: "Yes, always", isCorrect: false },
        { id: 1, text: "Yes, sometimes", isCorrect: true},
        { id: 2, text: "No, rarely", isCorrect: true },
        { id: 3, text: "No, never", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: " How long have you been experiencing these symptoms?",
      options: [
        { id: 0, text: "Less than 1 month", isCorrect: true },
        { id: 1, text: "1-6 months", isCorrect: true },
        { id: 2, text: "6 months to 1 year", isCorrect: true },
        { id: 3, text: "More than 1 year",isCorrect: true},
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: " Have you ever been diagnosed with OCD by a healthcare professional?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
  ],
  Phobia:[
    {
      text: "Do you experience intense, irrational fears that disrupt your daily life?",
      options: [
        { id: 0, text: "Never", isCorrect: false },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Frequently", isCorrect: true },
        { id: 3, text: "Rarely", isCorrect: true },
      ],
    },
    {
      text: "Have your phobias affected your ability to work or attend social events?",
      options: [
        { id: 0, text: "Never", isCorrect: false },
        { id: 1, text: "Significantly", isCorrect: true},
        { id: 2, text: "Moderately", isCorrect: true},
      ],
    },
    {
      text: " Do you actively avoid situations or places that trigger your phobias?",
      options: [
        { id: 0, text: "Never", isCorrect: false },
        { id: 1, text: "Significantly", isCorrect: true},
        { id: 2, text: "Moderately", isCorrect: true},
      ],
    },
    {
      text: "Please select the most suitable phobia you believe you may have",
      options: [
        { id: 0, text: "Heights", isCorrect: true },
        { id: 1, text: "Public Speaking", isCorrect: true },
        { id: 2, text: "Enclosed Spaces", isCorrect: true },
        { id: 3, text: "Flying", isCorrect: true },
        { id: 4, text: "Insects", isCorrect: true },
        { id: 5, text: "Animals", isCorrect: true },
        { id: 6, text: "Water", isCorrect: true },
        { id: 7, text: "Blood or Needle", isCorrect: true },
        { id: 8, text: "None of the above", isCorrect: false },
        { id: 9, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "On a scale of 1 to 10, how would you rate the severity of your phobia symptoms?",
      options: [
        { id: 0, text: "1", isCorrect: false },
        { id: 1, text: "2", isCorrect: false },
        { id: 2, text: "3", isCorrect: false },
        { id: 3, text: "4", isCorrect: false },
        { id: 4, text: "5", isCorrect: true },
        { id: 5, text: "6", isCorrect: true },
        { id: 6, text: "7", isCorrect: true },
        { id: 7, text: "8", isCorrect: true },
        { id: 8, text: "9", isCorrect: true },
        { id: 9, text: "10", isCorrect: true },
      ],
    },
  ],
  Insomnia:[
    {
      text: "How often do you have trouble falling asleep?",
      options: [
        { id: 0, text: "Every Night", isCorrect: true },
        { id: 1, text: "Several times a week", isCorrect: true },
        { id: 2, text: "About once a week", isCorrect: true },
        { id: 3, text: "Rarely or never", isCorrect: false },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "How often do you have trouble staying asleep (waking up in the middle of the night or early morning)?",
      options: [
        { id: 0, text: "Every Night", isCorrect: true },
        { id: 1, text: "Several times a week", isCorrect: true },
        { id: 2, text: "About once a week", isCorrect: true },
        { id: 3, text: "Rarely or never", isCorrect: false },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "How often do you wake up feeling not refreshed in the morning, even if you have had enough sleep?",
      options: [
        { id: 0, text: "Every Night", isCorrect: true },
        { id: 1, text: "Several times a week", isCorrect: true },
        { id: 2, text: "About once a week", isCorrect: true },
        { id: 3, text: "Rarely or never", isCorrect: false },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "How long does it usually take you to fall asleep once you are in bed?",
      options: [
        { id: 0, text: "Less than 15 minutes", isCorrect: false },
        { id: 1, text: "15-30 minutes", isCorrect: true },
        { id: 2, text: "30 minutes to 1 hour", isCorrect: true},
        { id: 3, text: "More than 1 hour", isCorrect: true},
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: " How many hours of sleep do you get on an average night?",
      options: [
        { id: 0, text: "5 hours or less", isCorrect: true },
        { id: 1, text: "6 hours", isCorrect: true },
        { id: 2, text: "7 hours", isCorrect: false },
        { id: 3, text: "8 hours or more", isCorrect: false },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "Do you often feel irritable, anxious, or have difficulty concentrating during the day due to lack of sleep?",
      options: [
        { id: 0, text: "Yes, frequently", isCorrect: true },
        { id: 1, text: "Yes, occasionally", isCorrect: true },
        { id: 3, text: "No, not usually", isCorrect: false },
      ],
    },
    {
      text: "Have you noticed a significant decrease in your ability to function at work, school, or in your daily activities due to lack of sleep?",
      options: [
        { id: 0, text: "Yes, significantly", isCorrect: true },
        { id: 1, text: "Yes, moderately", isCorrect: true },
        { id: 2, text: "No, not really", isCorrect: false },
        { id: 3, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "How long have you been experiencing these sleep problems?",
      options: [
        { id: 0, text: "Less than 1 month", isCorrect:true},
        { id: 1, text: "1-3months", isCorrect: true },
        { id: 2, text: "3-6months", isCorrect: true },
        { id: 3, text: "6 months to 1 year", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "Have you tried any remedies or strategies to improve your sleep (e.g., relaxation techniques, herbal supplements, sleep apps) and found them ineffective?",
      options: [
        { id: 0, text: "Yes", isCorrect:true},
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Do you have a history of mental health conditions or chronic illnesses that might be contributing to your sleep problems?",
      options: [
        { id: 0, text: "Yes", isCorrect:true},
        { id: 1, text: "No", isCorrect: true },
      ],
    },

  ],
  Fatique:[
    {
      text: "On a scale of 1 to 10, how would you rate your overall energy levels during the past week? (1 being extremely low energy, 10 being extremely high energy) ",
      options: [
        { id: 0, text: "1-4", isCorrect: false },
        { id: 1, text: "5-10", isCorrect: true },
      ],
    },
    {
      text: "How often do you feel fatigued during the day?",
      options: [
        { id: 0, text: "Rarely", isCorrect: false },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Frequently", isCorrect: true},
        { id: 3, text: "Constantly", isCorrect: true },
      ],
    },
    {
      text: "Are there specific times of the day when you feel more fatigued?Please describe.",
      options: [
        { id: 0, text: "True", isCorrect: true },
        { id: 1, text: "False", isCorrect: false},
      ],
    },
    {
      text: "Do you find it challenging to concentrate or stay focused due to fatigue?",
      options: [
        { id: 0, text: "Yes", isCorrect: false },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Have you experienced any unexplained weight changes recently?",
      options: [
        { id: 0, text: "Yes", isCorrect: false },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Is there anything else you would like to share about your current state of fatigue or any factors that you believe may be contributing to it?",
      options: [
        { id: 0, text: "True", isCorrect: true },
        { id: 1, text: "False", isCorrect: false},
      ],
    },
  ],
  Autism:[
    {
      text: " I find it difficult to initiate or maintain conversations with others",
      options: [
        { id: 0, text: "Not at all", isCorrect:false },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Often", isCorrect: true },
        { id: 3, text: "Very often", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: " I have difficulty understanding jokes or sarcasm.",
      options: [
        { id: 0, text: "Not at all", isCorrect:false },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Often", isCorrect: true },
        { id: 3, text: "Very often", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: " I struggle to understand social cues and body language",
      options: [
        { id: 0, text: "Not at all", isCorrect:false },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Often", isCorrect: true},
        { id: 3, text: "Very often", isCorrect:true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "  I prefer to engage in activities alone rather than with others",
      options: [
        { id: 0, text: "Not at all", isCorrect:false},
        { id: 1, text: "Occasionally", isCorrect: true},
        { id: 2, text: "Often", isCorrect: true},
        { id: 3, text: "Very often", isCorrect: true},
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: " I have specific routines and get upset if they are disrupted",
      options: [
        { id: 0, text: "Not at all", isCorrect:false},
        { id: 1, text: "Occasionally", isCorrect: true},
        { id: 2, text: "Often", isCorrect: true},
        { id: 3, text: "Very often", isCorrect: true},
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: " I engage in repetitive movements or activities (e.g., hand flapping, rocking)",
      options: [
        { id: 0, text: "Not at all", isCorrect:false},
        { id: 1, text: "Occasionally", isCorrect: true},
        { id: 2, text: "Often", isCorrect: true},
        { id: 3, text: "Very often", isCorrect: true},
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "I am unusually sensitive to lights, sounds, textures, or smells",
      options: [
        { id: 0, text: "Not at all", isCorrect:false},
        { id: 1, text: "Occasionally", isCorrect: true},
        { id: 2, text: "Often", isCorrect: true},
        { id: 3, text: "Very often", isCorrect: true},
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "  I find it difficult to tolerate certain fabrics or clothing textures",
      options: [
        { id: 0, text: "Not at all", isCorrect:false},
        { id: 1, text: "Occasionally", isCorrect: true},
        { id: 2, text: "Often", isCorrect: true},
        { id: 3, text: "Very often", isCorrect: true},
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "I have intense interests in specific topics and can talk about them for hours",
      options: [
        { id: 0, text: "Not at all", isCorrect:false},
        { id: 1, text: "Occasionally", isCorrect: true},
        { id: 2, text: "Often", isCorrect: true},
        { id: 3, text: "Very often", isCorrect: true},
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "I engage in repetitive play or activities that involve specific patterns or sequences",
      options: [
        { id: 0, text: "Not at all", isCorrect:false},
        { id: 1, text: "Occasionally", isCorrect: true},
        { id: 2, text: "Often", isCorrect: true},
        { id: 3, text: "Very often", isCorrect: true},
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "Is there anything else you would like to share about your experiences, concerns, or challenges related to autism spectrum disorder?",
      options: [
        { id: 0, text: "True", isCorrect:true},
        { id: 1, text: "False", isCorrect: false},
      ],
    },
  ],
  Bipolar:[
    {
      text: " Over the past two weeks, have you experienced periods of unusually elevated mood, energy, or irritability that lasted for several days and were different from your typical behavior?",
      options: [
        { id: 0, text: "Not at all", isCorrect:false},
        { id: 1, text: "Occasionally", isCorrect: true},
        { id: 2, text: "Frequently", isCorrect: true},
        { id: 3, text: "Almost every day", isCorrect: true},
      ],
    },
    {
      text: "Have you experienced periods of feeling excessively sad, hopeless, or lacking interest or pleasure in most activities, lasting for several days and interfering with your daily functioning?",
      options: [
        { id: 0, text: "Not at all", isCorrect:false},
        { id: 1, text: "Occasionally", isCorrect: true},
        { id: 2, text: "Frequently", isCorrect: true},
        { id: 3, text: "Almost every day", isCorrect: true},
      ],
    },
    {
      text: "During elevated or manic periods, have you engaged in impulsive or risky activities such as excessive spending, reckless driving, or risky behavior?",
      options: [
        { id: 0, text: "Not at all", isCorrect:false},
        { id: 1, text: "Occasionally", isCorrect: true},
        { id: 2, text: "Frequently", isCorrect: true},
        { id: 3, text: "Almost every day", isCorrect: true},
      ],
    },
    {
      text: "Have you noticed significant changes in your sleep patterns, such as insomnia (difficulty falling or staying asleep) or hypersomnia (excessive sleep), during these mood episodes?",
      options: [
        { id: 0, text: "Not at all", isCorrect:false},
        { id: 1, text: "Occasionally", isCorrect: true},
        { id: 2, text: "Frequently", isCorrect: true},
        { id: 3, text: "Almost every day", isCorrect: true},
      ],
    },
    {
      text: "Do you experience racing thoughts, rapid speech, or an inability to concentrate during elevated periods, which is significantly different from your usual behavior?",
      options: [
        { id: 0, text: "Not at all", isCorrect:false},
        { id: 1, text: "Occasionally", isCorrect: true},
        { id: 2, text: "Frequently", isCorrect: true},
        { id: 3, text: "Almost every day", isCorrect: true},
      ],
    },
    {
      text: "Have you ever had thoughts of death or suicide, or have you made suicide attempts, during periods of depression or low mood?",
      options: [
        { id: 0, text: "Not at all", isCorrect:false},
        { id: 1, text: "Occasionally", isCorrect: true},
        { id: 2, text: "Frequently", isCorrect: true},
        { id: 3, text: "Almost every day", isCorrect: true},
      ],
    },
    {
      text: "Have your mood swings caused significant distress or impairment in your social, occupational, or other important areas of functioning?",
      options: [
        { id: 0, text: "Not at all", isCorrect:false},
        { id: 1, text: "Occasionally", isCorrect: true},
        { id: 2, text: "Frequently", isCorrect: true},
        { id: 3, text: "Almost every day", isCorrect: true},
      ],
    },
    {
      text: "Have you received a diagnosis of bipolar disorder from a mental health professional in the past?",
      options: [
        { id: 0, text: "No", isCorrect:false},
        { id: 1, text: "Yes", isCorrect: true},
    
      ],
    },
  ],
  Hallucination:[
    {
      text: " Have you ever experienced hallucinations (seeing, hearing, feeling, smelling, or tasting things that others cannot perceive)?",
      options: [
        { id: 0, text: "Yes", isCorrect:true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "If you answered 'YES' to the previous question, please specify the nature of your hallucinations(eg.,auditory,visual,olfactory,tactile,gustatory,mixed)",
      options: [
        { id: 0, text: "True", isCorrect:true },
        { id: 1, text: "False", isCorrect: false },
      ],
    },
    {
      text: " How frequently do these hallucinations occur?",
      options: [
        { id: 0, text: "Rarely(Once a month or less)", isCorrect:true },
        { id: 1, text: "Occasionally(Several times a month)", isCorrect:true },
        { id: 2, text: "Frequently(Several times a week)", isCorrect:true },
        { id: 3, text: "Constantly(Every day)", isCorrect:true },
        { id: 4, text: "Never", isCorrect: false },
      ],
    },
    {
      text: " Do these hallucinations cause you distress or interfere with your daily activities?",
      options: [
        { id: 0, text: "Yes", isCorrect:true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: " Have you ever been diagnosed with a mental health disorder or a neurological condition?",
      options: [
        { id: 0, text: "Yes", isCorrect:true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "If you answered 'YES' ,please specify",
      options: [
        { id: 0, text: "True", isCorrect:true },
        { id: 1, text: "False", isCorrect: false },
      ],
    },
    {
      text: "Are you currently taking medication for a mental health condition or any other medical condition?",
      options: [
        { id: 0, text: "Yes", isCorrect:true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: " Have you ever experienced a traumatic event or severe stress?",
      options: [
        { id: 0, text: "Yes", isCorrect:true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Is there anything else you would like to share about your experiences, with hallucinations?",
      options: [
        { id: 0, text: "True", isCorrect:true},
        { id: 1, text: "False", isCorrect: false},
      ],
    },

  ],
};

export default SoulCare;
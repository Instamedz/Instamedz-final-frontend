const QuestList={
  //SoulCare
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
  //HeartCare
  Heart:[
    {
      text: "Do you have a history of heart disease in your family?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Have you ever been diagnosed with a heart murmur?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Do you have a history of high blood pressure?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Have you been diagnosed with any heart-related conditions?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Have you experienced chest pain or discomfort in the past month?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you often feel fatigued or short of breath, especially during physical activities",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Occasionally", isCorrect: true},
      ],
    },
    {
      text: "Have you noticed swelling in your ankles, legs, or abdomen?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Do you smoke or use tobacco products?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: " Please use this space to provide any additional information or comments relevant to your cardiovascular health:",
      options: [
        { id: 0, text: "Space", isCorrect: true },
      ],
    },

  ],
  Chest:[
    {
      text: "Type of Chest Pain",
      options: [
        { id: 0, text: "Crushing or squeezing", isCorrect: true },
        { id: 1, text: "Sharp or stabbing", isCorrect: true },
        { id: 2, text: "Burning sensation", isCorrect: true },
        { id: 3, text: "Pressure or tightness", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "Location of Chest Pain",
      options: [
        { id: 0, text: "Center of the chest", isCorrect: true },
        { id: 1, text: "Left side of the chest", isCorrect: true },
        { id: 2, text: "Right side of the chest", isCorrect: true },
        { id: 3, text: "Radiating to the arms, jaw, or back", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "Duration of Chest Pain",
      options: [
        { id: 0, text: "Less than 5 minutes", isCorrect: true },
        { id: 1, text: "5-15 minutes", isCorrect: true },
        { id: 2, text: "15-30 minutes", isCorrect: true },
        { id: 3, text: "More than 30 minutes", isCorrect: true },
      ],
    },
    {
      text: "Associated Symptoms",
      options: [
        { id: 0, text: "Shortness of breath", isCorrect: true },
        { id: 1, text: "Sweating", isCorrect: true },
        { id: 2, text: "Nausea or vomiting", isCorrect: true },
        { id: 3, text: "Dizziness or lightheadedness", isCorrect: true },
        { id: 4, text: "None of the above", isCorrect:false},
        { id: 5, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "Do you have a history of heart disease or related conditions?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Have you ever been diagnosed with high blood pressure or hypertension?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: " Do you have a history of diabetes?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Are you currently taking any medications for heart-related issues?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you smoke?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "How often do you engage in physical activity?",
      options: [
        { id: 0, text: "Rarely", isCorrect: true },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Regularly", isCorrect: false },
      ],
    },

  ],
  Dizziness:[
    {
      text: "Have you experienced dizziness before?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "If yes, please provide details on when the dizziness started and any known triggers.",
      options: [
        { id: 0, text: "Space", isCorrect: true },
      ],
    },
    {
      text: "Rate the severity of your dizziness on a scale of 1 to 10",
      options: [
        { id: 0, text: "1-4", isCorrect: false },
        { id: 1, text: "5-10", isCorrect: true },
      ],
    },
    {
      text: "How often do you experience dizziness?",
      options: [
        { id: 0, text: "Daily", isCorrect: true },
        { id: 1, text: "Weekly", isCorrect: true },
        { id: 2, text: "Monthly", isCorrect: false },
      ],
    },
    {
      text: "Do you experience any additional symptoms along with dizziness? (e.g., nausea, vomiting, headaches)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "If yes, please provide details.",
      options: [
        { id: 0, text: "Space", isCorrect: true },
      ],
    },
    {
      text: "Do you consume alcohol or caffeine?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you have a history of heart problems or high blood pressure?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you smoke?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Is there any family history of vestibular or balance disorders?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
  ],
  Fluttering:[
    {
      text: "Do you currently experience fluttering sensations in your chest?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "When did you first notice these symptoms?",
      options: [
        { id: 0, text: "Less than a week ago", isCorrect: true },
        { id: 1, text: "1-2 weeks ago", isCorrect: true },
        { id: 2, text: "2-4 weeks ago", isCorrect: true },
        { id: 3, text: "More than a month ago", isCorrect: true },
      ],
    },
    {
      text: "Do you have a history of heart conditions or cardiovascular diseases?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Have you been diagnosed with any respiratory conditions (e.g., asthma, chronic obstructive pulmonary disease)?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Are you currently taking any medications for heart-related issues or respiratory conditions? If yes, please list them:",
      options: [
        { id: 0, text: "Space", isCorrect: true },
      ],
    },
    {
      text: "How would you describe the fluttering sensation? (Select all that apply)",
      options: [
        { id: 0, text: "Light tapping", isCorrect: true },
        { id: 1, text: "Rapid pulsations", isCorrect: true },
        { id: 2, text: "Irregular beats", isCorrect: true },
        { id: 3, text: "Others", isCorrect: true },
        { id: 4, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Do you smoke?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
  ],
  Racing:[
    {
      text: "Do you have any existing medical conditions? If yes, please specify.",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Space", isCorrect:true},
      ],
    },
    {
      text: "Have you ever been diagnosed with heart-related issues?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Are you currently taking any medications? If yes, please list them.",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Space", isCorrect:true},
      ],
    },
    {
      text: "When do you usually experience a racing heart beat?",
      options: [
        { id: 0, text: "at rest", isCorrect: true },
        { id: 1, text: "during physical activity", isCorrect: true },
        { id: 2, text: "after meals", isCorrect: true },
        { id: 3, text: "Others", isCorrect: true },
        { id: 4, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Do you experience high levels of stress or anxiety on a regular basis?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Are there specific situations or events that seem to trigger your racing heart beat in relation to stress?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Have you undergone any cardiac procedures or surgeries in the past? If yes, please provide details.",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
  ],
  Congestive:[
    {
      text: "Have you been previously diagnosed with Congestive Heart Failure (CHF)?,If yes, please specify",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Space", isCorrect:true},
      ],
    },
    {
      text: " Do you currently experience any of the following symptoms associated with CHF?",
      options: [
        { id: 0, text: "Shortness of breath", isCorrect: true },
        { id: 1, text: "Fatigue", isCorrect: true },
        { id: 2, text: "Swelling in the ankles or legs", isCorrect:true},
        { id: 3, text: "Persistent coughing", isCorrect:true},
        { id: 4, text: "Rapid or irregular heartbeat", isCorrect:true},
        { id: 5, text: "Sudden weight gain", isCorrect:true},
        { id: 6, text: "None of the above", isCorrect:false},
      ],
    },
    {
      text: " Do you smoke?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Have you been diagnosed with hypertension (high blood pressure)?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: " Do you have a history of diabetes?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Describe your typical diet:",
      options: [
        { id: 0, text: "Healthy and balanced", isCorrect: false },
        { id: 1, text: "Mostly healthy with occasional indulgences", isCorrect: false },
        { id: 2, text: "Often includes processed or unhealthy foods", isCorrect:true},
      ],
    },
  ],
  Peripheral:[
    {
      text: "Have you ever been diagnosed with cardiovascular disease?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Do you have a history of diabetes?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Have you ever experienced chest pain or discomfort?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you smoke or have a history of smoking?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Have you noticed any of the following symptoms in your legs?",
      options: [
        { id: 0, text: "Pain or cramping during walking or exercising", isCorrect: true },
        { id: 1, text: "Numbness or weakness", isCorrect: true },
        { id: 2, text: "Sores or wounds that are slow to heal", isCorrect: true },
        { id: 3, text: "Changes in skin color or temperature", isCorrect: true },
        { id: 4, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Have you been diagnosed with high cholesterol?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Any family history of Peripheral Artery Disease? (Yes/No)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
  ],
  Coronary:[
    {
      text: "Do you have a history of heart disease or stroke?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Have you been diagnosed with high blood pressure?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you have diabetes?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Have you ever been diagnosed with high cholesterol?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you smoke?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you engage in regular physical activity?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "What is your Body Mass Index (BMI)?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you experience chest pain or discomfort?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you have shortness of breath, especially during physical activity?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Have you ever felt lightheaded or dizzy?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "How many hours of sleep do you get per night?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you experience chronic stress or anxiety?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
  ],
  Diabetes:[],
  High:[],
  Shortness:[],
  //EyeCare
  Redness:[
    {
      text: "When did you first notice redness in your eyes?",
      options: [
        { id: 0, text: "Today", isCorrect: true },
        { id: 1, text: "Within the last 3 days", isCorrect: true },
        { id: 2, text: "Within the last week", isCorrect:true },
        { id: 3, text: "More than a week ago", isCorrect:false },
      ],
    },
    {
      text: "How would you rate the severity of the redness in your eyes?",
      options: [
        { id: 0, text: "Mild(barely noticeable", isCorrect: true },
        { id: 1, text: "Moderate(noticeable but not severe)", isCorrect: false },
        { id: 2, text: "Severe(very noticeable and concerning)", isCorrect:false },
      ],
    },
    {
      text: "Are you experiencing any discomfort or pain in your eyes associated with the redness?",
      options: [
        { id: 0, text: "Mild(barely noticeable", isCorrect: true },
        { id: 1, text: "Moderate(noticeable but not severe)", isCorrect: false },
        { id: 2, text: "Severe(very noticeable and concerning)", isCorrect:false },
      ],
    },
    {
      text: "Do you have any other symptoms accompanying the redness in your eyes? (e.g., itching, burning, discharge)",
      options: [
        { id: 0, text: "Mild(barely noticeable", isCorrect: true },
        { id: 1, text: "Moderate(noticeable but not severe)", isCorrect: false },
        { id: 2, text: "Severe(very noticeable and concerning)", isCorrect:false },
      ],
    },
    {
      text: "How long have you been experiencing these symptoms, including redness in your eyes?",
      options: [
        { id: 0, text: "Mild(barely noticeable", isCorrect: true },
        { id: 1, text: "Moderate(noticeable but not severe)", isCorrect: false },
        { id: 2, text: "Severe(very noticeable and concerning)", isCorrect:false },
      ],
    },
    {
      text: "Have you been exposed to any known allergens or irritants that could be contributing to the redness in your eyes?",
      options: [
        { id: 0, text: "Mild(barely noticeable", isCorrect: true },
        { id: 1, text: "Moderate(noticeable but not severe)", isCorrect: false },
        { id: 2, text: "Severe(very noticeable and concerning)", isCorrect:false },
      ],
    },
    {
      text: "Do you wear contact lenses?",
      options: [
        { id: 0, text: "Mild(barely noticeable", isCorrect: true },
        { id: 1, text: "Moderate(noticeable but not severe)", isCorrect: false },
        { id: 2, text: "Severe(very noticeable and concerning)", isCorrect:false },
      ],
    },
    {
      text: "Do you have any pre-existing medical conditions related to eye health (e.g., dry eye syndrome, conjunctivitis)?",
      options: [
        { id: 0, text: "Mild(barely noticeable", isCorrect: true },
        { id: 1, text: "Moderate(noticeable but not severe)", isCorrect: false },
        { id: 2, text: "Severe(very noticeable and concerning)", isCorrect:false },
      ],
    },
  ],
  Cloudy:[
    {
      text: " Have you ever been diagnosed with a vision-related condition?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: " If yes, please provide details:",
      options: [
        { id: 0, text: "Space", isCorrect: true },
      ],
    },
    {
      text: "Have you had any eye surgery or procedures in the past?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "How would you describe your vision concerns? (Select all that apply)",
      options: [
        { id: 0, text: "Blurry vision", isCorrect: true },
        { id: 1, text: "Cloudy vision", isCorrect: true },
        { id: 1, text: "Double vision", isCorrect: true },
        { id: 1, text: "Others", isCorrect: true },
        { id: 1, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "When did you first notice these symptoms?",
      options: [
        { id: 0, text: "Less than a week ago", isCorrect: true },
        { id: 1, text: "1-2 weeks ago", isCorrect: true },
        { id: 2, text: "2-4 weeks ago", isCorrect: true },
        { id: 3, text: "More than a month ago", isCorrect: true },
      ],
    },
    {
      text: "Do you spend prolonged periods of time in front of digital screens?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Are you exposed to environmental factors that may affect your vision, such as dust, smoke, or allergens?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Are you currently taking any medications that may affect your vision?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "Do you have a family history of eye conditions?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
  ],
  Double:[
    {
      text: " Do you have any existing medical conditions? If yes, please specify:",
      options: [
        { id: 0, text: "Diabetes", isCorrect: true },
        { id: 1, text: "Hypertension", isCorrect: true },
        { id: 2, text: "Neurological conditions", isCorrect: true },
        { id: 3, text: "Others", isCorrect: true },
        { id: 4, text: "None of the above", isCorrect: true },
      ],
    },
    {
      text: "Are you currently taking any medications? If yes, please list them:",
      options: [
        { id: 0, text: "Space", isCorrect: true },
      ],
    },
    {
      text: "When did you first notice double vision?",
      options: [
        { id: 0, text: "Within the last week", isCorrect: true },
        { id: 1, text: "Within the last month", isCorrect: true },
        { id: 2, text: "Within the last six months", isCorrect: true },
        { id: 3, text: "More than six months ago", isCorrect: true },
        { id: 4, text: "I don't experience double vision", isCorrect: false },
      ],
    },
    {
      text: "How would you describe your double vision?",
      options: [
        { id: 0, text: "Constant", isCorrect: true },
        { id: 1, text: "Intermittent", isCorrect: true },
        { id: 2, text: "Only at certain times of the day", isCorrect: true },
        { id: 3, text: "Only during specific activities", isCorrect: false },
      ],
    },
    {
      text: "Do you experience any other symptoms along with double vision? (Check all that apply)",
      options: [
        { id: 0, text: "Headaches", isCorrect: true },
        { id: 1, text: "Eye pain or discomfort", isCorrect: true },
        { id: 1, text: "Nausea or dizziness", isCorrect: true },
        { id: 1, text: "Difficulty focusing", isCorrect: true },
        { id: 1, text: "Others", isCorrect: true },
        { id: 1, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: " Do you spend prolonged periods of time using electronic devices (computers, smartphones, etc.)?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "How often do you engage in activities that may strain your eyes, such as reading or working on a computer?",
      options: [
        { id: 0, text: "Rarely", isCorrect: true },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Frequently", isCorrect: true },
        { id: 3, text: "Constantly", isCorrect: true },
      ],
    },
    {
      text: "Have you had any recent eye examinations? If yes, please provide details:",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Have you had any recent changes in your vision or prescription for glasses or contact lenses?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
  ],
  Squinting:[
    {
      text: "Have you been diagnosed with any chronic medical conditions? If yes, please specify.",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Are you currently taking any medications? If yes, please provide details.",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Do you currently wear corrective lenses (glasses or contact lenses)?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Have you experienced any sudden changes in vision recently?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Have you ever been diagnosed with a lazy eye (amblyopia)?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Have you had any previous eye surgeries? If yes, please provide details.",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you experience double vision, where you see two images instead of one?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Have you noticed that one eye turns inwards, outwards, upwards, or downwards in comparison to the other eye?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you find it difficult to focus both eyes on a single object?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: " Have you observed any eye misalignment in photographs of yourself?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you engage in activities that require prolonged focus, such as reading or working on a computer?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
  ],
  Dry:[
    {
      text: "Do you spend extended periods of time staring at digital screens (e.g., computers, smartphones, tablets)?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Are you frequently exposed to environmental factors such as air conditioning, heating, or wind?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you wear contact lenses regularly?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Do you consciously blink during extended periods of screen time?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Are you currently using any eye medications or prescribed treatments?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Do you have a history of autoimmune diseases (e.g., rheumatoid arthritis, Sjögren's syndrome)?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Have you undergone any eye surgeries in the past?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Are you currently taking medications that may cause dry eye symptoms (e.g., antihistamines, decongestants)?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
  ],
  Eyelid:[
    {
      text: "Do you spend extended periods of time staring at digital screens (e.g., computers, smartphones, tablets)?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "When did you first notice the eyelid drooping?",
      options: [
        { id: 0, text: "Within the last week", isCorrect: true },
        { id: 1, text: "Within the last month", isCorrect: true },
        { id: 2, text: "Within the last six months", isCorrect: true },
        { id: 3, text: "More than six months ago", isCorrect: true },
      ],
    },
    {
      text: "Have you noticed any changes in vision associated with the eyelid drooping?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "Do you have a history of any eye-related conditions or surgeries?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Are you currently taking any medications? If yes, please list them:",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you have any known allergies? If yes, please specify",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you spend extended periods of time in front of screens (computers, smartphones, etc.)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Have you recently experienced any significant stress or changes in your life?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Maybe", isCorrect: true },
      ],
    },
  ],
  Farsightedness:[
    {
      text: "Have you experienced any recent changes in your vision? (e.g., blurriness, difficulty focusing)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you wear prescription glasses or contact lenses?",
      options: [
        { id: 0, text: "Yes,regularly", isCorrect: true },
        { id: 1, text: "Yes,occasionally", isCorrect: true },
        { id: 2, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you often find it challenging to see objects up close, such as when reading or using a computer?",
      options: [
        { id: 0, text: "Always", isCorrect: true },
        { id: 1, text: "Often", isCorrect: true },
        { id: 2, text: "Occasionally", isCorrect: true },
        { id: 3, text: "Rarely", isCorrect: true },
        { id: 4, text: "Never", isCorrect: false },
      ],
    },
    {
      text: "Have you noticed any eye strain, headaches, or discomfort, especially after performing close-up tasks?",
      options: [
        { id: 0, text: "Always", isCorrect: true },
        { id: 1, text: "Often", isCorrect: true },
        { id: 2, text: "Occasionally", isCorrect: true },
        { id: 3, text: "Rarely", isCorrect: true },
        { id: 4, text: "Never", isCorrect: false },
      ],
    },
    {
      text: "How many hours per day do you spend on activities that require close-up focus (e.g., reading, using digital devices)?",
      options: [
        { id: 0, text: "Less than 1 hour", isCorrect: true },
        { id: 1, text: "1-2 hours", isCorrect: true },
        { id: 2, text: "2-4 hours", isCorrect: true },
        { id: 3, text: "4-6 hours", isCorrect: true },
        { id: 4, text: "More than 6 hours", isCorrect: true},
      ],
    },
    {
      text: "Do you engage in regular breaks and eye exercises during prolonged close-up activities?",
      options: [
        { id: 0, text: "Yes,regularly", isCorrect: true },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Rarely", isCorrect: true },
        { id: 3, text: "Never", isCorrect: false },
      ],
    },
  ],
  Crossed:[
    {
      text: "Do you currently have any eye-related health conditions? (e.g., glaucoma, cataracts)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Have you undergone any eye surgeries in the past? If yes, please provide details.",
      options: [
        { id: 0, text: "Space", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you experience double vision?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Have you experienced any of the following symptoms?",
      options: [
        { id: 0, text: "Double vision", isCorrect: true },
        { id: 0, text: "Blurred vision", isCorrect: true },
        { id: 0, text: "Eye strain", isCorrect: true },
        { id: 0, text: "Headaches", isCorrect: true },
        { id: 0, text: "Difficulty focusing", isCorrect: true },
        { id: 1, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Have you observed any changes in your vision recently?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Is there a family history of crossed eyes or related eye conditions?",
      options: [
        { id: 0, text: "Space", isCorrect: false },
      ],
    },
    {
      text: "Please use this space to provide any additional details or concerns related to your eye health.",
      options: [
        { id: 0, text: "Space", isCorrect: false },
      ],
    },
  ],
  Shortsightedness:[
    {
      text: "Do you experience blurred vision when looking at distant objects?",
      options: [
        { id: 0, text: "Always", isCorrect: true },
        { id: 1, text: "Often", isCorrect: true },
        { id: 2, text: "Occasionally", isCorrect: true },
        { id: 3, text: "Rarely", isCorrect: true },
        { id: 4, text: "Never", isCorrect: false },
      ],
    },
    {
      text: "Do you find it difficult to see clearly while driving or watching TV?",
      options: [
        { id: 0, text: "Always", isCorrect: true },
        { id: 1, text: "Often", isCorrect: true },
        { id: 2, text: "Occasionally", isCorrect: true },
        { id: 3, text: "Rarely", isCorrect: true },
        { id: 4, text: "Never", isCorrect: false },
      ],
    },
    {
      text: "On average, how many hours per day do you spend on digital devices (e.g., computer, smartphone, tablet)?",
      options: [
        { id: 0, text: "Less than 1 hour", isCorrect: true },
        { id: 1, text: "1-2 hours", isCorrect: true },
        { id: 2, text: "2-4 hours", isCorrect: true },
        { id: 3, text: "4-6 hours", isCorrect: true },
        { id: 4, text: "More than 6 hours", isCorrect: true },
      ],
    },
    {
      text: "Is there a family history of shortsightedness (myopia)?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "Have you noticed any changes in your night vision?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you frequently experience eye strain or headaches, particularly after reading or using digital devices?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
  ],
  Blurry:[],
  //DentalCare
  Carious:[
    {
      text: "Do you have any pre-existing medical conditions? If yes, please specify.",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Have you had any previous dental treatments or surgeries? If yes, please provide details.",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Are you experiencing any toothache or discomfort?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Have you noticed sensitivity to hot, cold, or sweet foods/beverages?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you observe any discoloration or dark spots on your teeth?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Have you recently experienced bad breath that persists despite oral hygiene practices?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Do you consume sugary foods and beverages regularly?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Do you smoke or use tobacco products?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "Have you noticed any changes in your gum health recently?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Have you ever been diagnosed with dental cavities or carious teeth?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
  ],
  Toothache:[
    {
      text: "How long have you been experiencing toothache symptoms?",
      options: [
        { id: 0, text: "Less than 24 hours", isCorrect: true },
        { id: 1, text: "1-3 days", isCorrect: true },
        { id: 2, text: "4-7 days", isCorrect: true },
        { id: 3, text: "More than a week", isCorrect: true },
      ],
    },
    {
      text: "On a scale of 1 to 10, how would you rate the intensity of your toothache? (1 being mild, 10 being severe)",
      options: [
        { id: 0, text: "1-5", isCorrect: true },
        { id: 1, text: "6-10", isCorrect: false },
      ],
    },
    {
      text: "Please describe the nature of your toothache pain",
      options: [
        { id: 0, text: "sharp", isCorrect: true },
        { id: 1, text: "throbbing", isCorrect: true },
        { id: 2, text: "Constant", isCorrect: true },
        { id: 3, text: "Intermittent", isCorrect: true },
      ],
    },
    {
      text: "Are there any specific triggers for your toothache?",
      options: [
        { id: 0, text: "hot/cold foods", isCorrect: true },
        { id: 1, text: "chewing", isCorrect: true },
        { id: 2, text: "pressure", isCorrect: true },
      ],
    },
    {
      text: "Have you noticed any swelling or redness around the affected tooth or gums?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: " Do you have any history of dental issues or recent dental procedures?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "Are you experiencing any of the following symptoms along with your toothache?",
      options: [
        { id: 0, text: "Swollen or tender gums", isCorrect: true },
        { id: 1, text: "Bad breath", isCorrect: true },
        { id: 2, text: "Sensitivity to hot or cold temperatures", isCorrect: true },
        { id: 3, text: "Fever", isCorrect: true },
        { id: 4, text: "Difficulty chewing", isCorrect: true },
        { id: 5, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Do you have any known allergies to medications or dental materials?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
        { id: 2, text: "Not Sure", isCorrect: true },
      ],
    },
    {
      text: "Are you currently taking any medications? If yes, please provide details:",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Have you been diagnosed with any chronic medical conditions that may impact your dental health?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
  ],
  Bleeding:[
    {
      text: "Have you ever been diagnosed with any bleeding disorders (e.g., hemophilia)?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "How often do you brush your teeth?",
      options: [
        { id: 0, text: "Twice a day", isCorrect: true },
        { id: 1, text: "Once a day", isCorrect: true },
        { id: 2, text: "Less than once a day", isCorrect: true },
      ],
    },
    {
      text: "How often do you floss your teeth?",
      options: [
        { id: 0, text: "Daily", isCorrect: true },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Rarely or Never", isCorrect: true },
      ],
    },
    {
      text: "Have you noticed any changes in your gum color or appearance?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "Have you experienced any bleeding from your gums while brushing your teeth?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Occasionally", isCorrect: true },
      ],
    },
    {
      text: " Do your gums bleed spontaneously (without any apparent cause)?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Occasionally", isCorrect: true },
      ],
    },
    {
      text: " Do you experience pain or discomfort in your gums?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Occasionally", isCorrect: true },
      ],
    },
  ],
  Discoloration:[
    {
      text: "Do you have a history of dental issues?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "If yes, please specify the nature of the issue(s)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "When did you first notice the discoloration of your teeth?",
      options: [
        { id: 0, text: "Less than a week ago", isCorrect: true },
        { id: 1, text: "1-2 weeks ago", isCorrect: true },
        { id: 2, text: "2-4 weeks ago", isCorrect: true },
        { id: 3, text: "More than a month ago", isCorrect: true },
      ],
    },
    {
      text: "Select the option that best describes the color change:",
      options: [
        { id: 0, text: "Yellow", isCorrect: true },
        { id: 1, text: "Brown", isCorrect: true },
        { id: 2, text: "Gray", isCorrect: true },
        { id: 3, text: "Others", isCorrect: true },
      ],
    },
    {
      text: "Have you experienced any pain or sensitivity associated with the discoloration?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "Do you smoke or use tobacco products?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "How frequently do you consume beverages known to stain teeth (coffee, tea, red wine)?",
      options: [
        { id: 0, text: "Rarely", isCorrect: true },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Frequently", isCorrect: true },
      ],
    },
    {
      text: "Do you have any underlying health conditions that may affect your oral health?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
  ],
  Cold:[
    {
      text: " Do you currently experience tooth sensitivity to cold stimuli (e.g., cold drinks, ice cream, cold air)?",
      options: [
        { id: 0, text: "Never", isCorrect: false },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Frequently", isCorrect: true },
        { id: 3, text: "Always", isCorrect: true },
      ],
    },
    {
      text: " Do you currently experience tooth sensitivity to hot stimuli (e.g., hot drinks, warm food)?",
      options: [
        { id: 0, text: "Never", isCorrect: false },
        { id: 1, text: "Occasionally", isCorrect: true },
        { id: 2, text: "Frequently", isCorrect: true },
        { id: 3, text: "Always", isCorrect: true },
      ],
    },
    {
      text: "Do you consume acidic foods and beverages regularly? (e.g., citrus fruits, soda)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: " Do you use any teeth-whitening products? (e.g., whitening toothpaste, over-the-counter whitening strips)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "What specific activities or substances trigger your teeth sensitivity? (Select all that apply)",
      options: [
        { id: 0, text: "Cold beverages", isCorrect: true },
        { id: 1, text: "Hot beverages", isCorrect: true },
        { id: 2, text: "Sweet foods", isCorrect: true },
        { id: 3, text: "Acidic foods", isCorrect: true },
        { id: 4, text: "Brushing teeth", isCorrect: true },
        { id: 5, text: "Other", isCorrect: true },
      ],
    },
    {
      text: "Do you have any known dental conditions or diseases? (e.g., cavities, gum disease)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
  ],
  Gum:[
    {
      text: "Do you have a history of gum disease (gingivitis or periodontitis)?",
      options: [
        { id: 0, text: "Yes", isCorrect: false },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Not sure", isCorrect: false },
      ],
    },
    {
      text: "Have you had any recent dental procedures or surgeries? If yes, please provide details.",
      options: [
        { id: 0, text: "Space", isCorrect: false },
      ],
    },
    {
      text: "Are you experiencing any of the following symptoms?(Choose one that suits most)",
      options: [
        { id: 0, text: "Gum pain", isCorrect: true },
        { id: 1, text: "Swollen or tender gums", isCorrect: true },
        { id: 2, text: "Bad breath", isCorrect: true },
        { id: 3, text: "Receding gums", isCorrect: true },
        { id: 4, text: "Loose teeth", isCorrect: true },
        { id: 5, text: "Bleeding gums", isCorrect: true },
        { id: 6, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "How often do you brush your teeth?",
      options: [
        { id: 0, text: "Yes", isCorrect: false },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Not sure", isCorrect: false },
      ],
    },
    {
      text: "How often do you floss your teeth?",
      options: [
        { id: 0, text: "Yes", isCorrect: false },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Not sure", isCorrect: false },
      ],
    },
    {
      text: "Do you smoke or use tobacco products?",
      options: [
        { id: 0, text: "Yes", isCorrect: false },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Not sure", isCorrect: false },
      ],
    },
    {
      text: "Have you experienced any recent trauma or injury to your teeth or jaw?",
      options: [
        { id: 0, text: "Yes", isCorrect: false },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Not sure", isCorrect: false },
      ],
    },
    {
      text: "Are you currently experiencing any pain or discomfort in your teeth or gums?",
      options: [
        { id: 0, text: "Yes", isCorrect: false },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Not sure", isCorrect: false },
      ],
    },
    {
      text: "Please provide a brief history of any previous dental treatments or surgeries",
      options: [
        { id: 0, text: "Space", isCorrect: false },
      ],
    },
    {
      text: "Do you notice any loose teeth or changes in the alignment of your teeth?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Are there any specific triggers that worsen your dental discomfort or pain? (e.g., hot/cold temperatures, chewing, etc.)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "How often do you brush your teeth each day?",
      options: [
        { id: 0, text: "Once", isCorrect: false },
        { id: 1, text: "Twice", isCorrect: false },
        { id: 2, text: "Three times", isCorrect: false },
        { id: 3, text: "More than three times", isCorrect: false },
      ],
    },
    {
      text: "Do you use dental floss regularly?",
      options: [
        { id: 0, text: "Yes", isCorrect: false },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
  ],
  Bad:[],
  Mobility:[],
  Facial:[],
 
  //ChildCare
  Common:[
    {
      text: "Does your child have a runny or stuffy nose?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Is your child experiencing a cough? If yes, please describe the type of cough (dry, productive, barking, etc.).",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Is your child complaining of a sore throat?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Has your child had a fever in the last 24 hours? If yes, provide the highest temperature recorded.",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Is your child experiencing difficulty breathing or shortness of breath?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Has there been any wheezing or unusual sound while breathing?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Has your child been in close contact with anyone diagnosed with COVID-19 in the last 14 days?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Is your child allergic to any medications or substances?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
  ],
  Malnutrition:[
    {
      text: "Current Weight (in kilograms):",
      options: [
        { id: 0, text: "Space", isCorrect: true },
      ],
    },
    {
      text: "Height (in centimeters):",
      options: [
        { id: 0, text: "Space", isCorrect: true },
      ],
    },
    {
      text: "Has there been a noticeable change in your child's weight or height recently?",
      options: [
        { id: 0, text: "Space", isCorrect: true },
      ],
    },
    {
      text: "How would you describe your child's appetite?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Does your child experience difficulties with eating, such as swallowing or chewing problems?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Are there any behavioral issues during mealtime, such as refusal to eat or extreme fussiness?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },

    {
      text: "Has your child been diagnosed with any medical conditions that may affect nutrition? If yes, please provide details.",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },

  ],
  Ear:[
    {
      text: "Onset of Ear Pain",
      options: [
        { id: 0, text: "Less than 24 hours", isCorrect: true },
        { id: 1, text: "1-3 days", isCorrect: true },
        { id: 2, text: "4-7 days", isCorrect: true },
        { id: 3, text: "More than a week", isCorrect: true },
      ],
    },
    {
      text: "Type of Pain",
      options: [
        { id: 0, text: "Sharp", isCorrect: true },
        { id: 1, text: "Dull", isCorrect: true },
        { id: 2, text: "Throbbing", isCorrect: true },
        { id: 3, text: "Aching", isCorrect: true },
        { id: 4, text: "Burning", isCorrect: true },
      ],
    },
    {
      text: "Location of Pain",
      options: [
        { id: 0, text: "Left ear", isCorrect: true },
        { id: 1, text: "Right ear", isCorrect: true },
        { id: 2, text: "Both ears", isCorrect: true },
      ],
    },
    {
      text: "Hearing Loss",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "Ear Discharge",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "Does your child uses earphones or headphones regularly?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
        { id: 2, text: "Not applicable", isCorrect: true },
      ],
    },
    {
      text: "History of Ear Infections",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
  ],
  Asthma:[
    {
      text: "Does your child experience recurrent coughing, especially at night?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
      ],
    },
    {
      text: "Does your child often complain of chest tightness or discomfort?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
      ],
    },
    {
      text: "Has your child experienced wheezing or whistling sounds while breathing?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
      ],
    },
    {
      text: "Does your child have difficulty breathing during physical activities?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
      ],
    },
    {
      text: "Any recent changes in your child's energy levels or appetite?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
      ],
    },
    {
      text: "Does your child have regular exposure to allergens (e.g., pollen, dust, pet dander)?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
      ],
    },
    {
      text: "Is there a family history of asthma or respiratory conditions?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
  ],
  Gastroenteritis:[
    {
      text: "Fever (temperature over 100.4°F or 38°C)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "Diarrhea (frequent loose or watery stools)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "Vomiting (forcefully expelling stomach contents)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "Abdominal Pain or Cramps",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "Blood in Stool",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "Is your child able to keep liquids down?",
      options: [
        { id: 0, text: "Yes,without difficulty", isCorrect: false },
        { id: 1, text: "Yes,with some difficulty", isCorrect: true},
        { id: 2, text: "No, unable to keep liquids down", isCorrect: true },
      ],
    },
  ],
  Measles:[
    {
      text: "Has your child been in contact with someone diagnosed with measles in the past 21 days?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Is your child displaying any of the following symptoms?",
      options: [
        { id: 0, text: "Fever", isCorrect: true },
        { id: 1, text: "Cough", isCorrect: false},
        { id: 2, text: "Runny nose", isCorrect: true },
        { id: 2, text: "Red eyes", isCorrect: true },
        { id: 2, text: "Rash (small red spots that may be raised)", isCorrect: true },
        { id: 2, text: "Koplik spots (small white spots with bluish-white centers inside the mouth)", isCorrect: true },
        { id: 2, text: "Others", isCorrect: true },
        { id: 2, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "If you answered 'Yes' to any of the symptoms, please provide details",
      options: [
        { id: 0, text: "onset", isCorrect: true },
        { id: 1, text: "severity", isCorrect: true},
      ],
    },
    {
      text: "Does your child have red eyes or conjunctivitis?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
        { id: 2, text: "Not sure", isCorrect: false },
      ],
    },
    {
      text: "Is there a presence of small white spots on the inner cheeks and mouth?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true },
        { id: 2, text: "Not sure", isCorrect: false },
      ],
    },
    {
      text: "Does your child have any pre-existing health conditions or a compromised immune system?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
  ],
  Fever:[
    {
      text: "Has your child been generally healthy in the past 14 days?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Has your child experienced a fever (temperature above 100.4°F or 38°C) in the past 48 hours?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
      ],
    },
    {
      text: "If yes, please provide the highest recorded temperature:",
      options: [
        { id: 0, text: "Space", isCorrect: false },
      ],
    },
    {
      text: "If yes, please provide the highest recorded temperature:",
      options: [
        { id: 0, text: "Cough", isCorrect: true },
        { id: 1, text: "Runny nose", isCorrect: true },
        { id: 2, text: "Sore throat", isCorrect: true },
        { id: 3, text: "Shortness of breath", isCorrect: true },
        { id: 4, text: "Fatigue", isCorrect: true },
        { id: 5, text: "Headache", isCorrect: true },
        { id: 6, text: "Muscle or body aches", isCorrect: true },
        { id: 7, text: "Loss of taste or smell", isCorrect: true },
        { id: 8, text: "Nausea or vomiting", isCorrect: true },
        { id: 9, text: "Diarrhea", isCorrect: true },
        { id: 10, text:"None of the above", isCorrect: false },
      ],
    },
    {
      text: "Has your child been in close contact with anyone who has tested positive for COVID-19 in the past 14 days?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Has your child travelled internationally or domestically in the past 14 days?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
  ],
  Sore:[
    {
      text: "Onset of Sore Throat",
      options: [
        { id: 0, text: "Suddenly", isCorrect: false },
        { id: 1, text: "Gradually", isCorrect: false},
      ],
    },
    {
      text: "Duration of Sore Throat",
      options: [
        { id: 0, text: "Less than 24 hours", isCorrect: true },
        { id: 1, text: "1-3 days", isCorrect: true},
        { id: 2, text: "3-5 days", isCorrect: true},
        { id: 3, text: "More than 5 days", isCorrect: true},
      ],
    },
    {
      text: "Severity of Sore Throat",
      options: [
        { id: 0, text: "Mild", isCorrect: false },
        { id: 1, text: "Moderate", isCorrect: true},
        { id: 2, text: "Severe", isCorrect: true},
      ],
    },
    {
      text: "Is the Sore Throat Accompanied by",
      options: [
        { id: 0, text: "Fever", isCorrect: true },
        { id: 1, text: "Cough", isCorrect: true},
        { id: 1, text: "Runny nose", isCorrect: true},
        { id: 1, text: "Difficulty Swallowing", isCorrect: true},
        { id: 1, text: "Hoarseness", isCorrect: true},
        { id: 1, text: "Rash", isCorrect: true},
      ],
    },
    {
      text: "Any known exposure to COVID-19?",
      options: [
        { id: 0, text: "Yes", isCorrect: false },
        { id: 1, text: "No", isCorrect: false},
        { id: 2, text: "Not sure", isCorrect: false},
      ],
    },
    {
      text: "Does the child have any known allergies?",
      options: [
        { id: 0, text: "Yes", isCorrect: false },
        { id: 1, text: "No", isCorrect: false},
      ],
    },
    {
      text: "Does your child have a history of respiratory conditions? (e.g., asthma, allergies, etc.)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
      ],
    },
  ],
  Allergies:[
    {
      text: "Has your child ever been diagnosed with allergies?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Has your child experienced any adverse reactions to medications or vaccines?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Does your child have a history of respiratory symptoms such as sneezing, coughing, or wheezing?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Any skin-related symptoms like hives, rashes, or itching?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Gastrointestinal symptoms, including nausea, vomiting, or diarrhea?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Are there specific environments or seasons when your child's symptoms worsen?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Any exposure to pets, pollen, dust mites, or other potential allergens at home?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Has your child ever experienced an allergic reaction to any specific foods?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Please list any known food allergies or intolerances.",
      options: [
        { id: 0, text: "Space", isCorrect: false },
      ],
    },

  ],
  //CovidCare
  Dyspnea:[
    {
      text: "Have you been in close contact with someone confirmed to have COVID-19 within the last 14 days?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "Are you currently experiencing shortness of breath?",
      options: [
        { id: 0, text: "Yes,continuously", isCorrect: true },
        { id: 1, text: "Yes,occasionally", isCorrect: true },
        { id: 2, text: "No", isCorrect: false},
      ],
    },
    {
      text: "If yes, when did you first notice the shortness of breath?",
      options: [
        { id: 0, text: "Less than 24 hours ago", isCorrect: true },
        { id: 1, text: "1-2 days ago", isCorrect: true},
        { id: 2, text: "3-5 days ago", isCorrect: true },
        { id: 3, text: "More than 5 days ago", isCorrect: true },
      ],
    },
    {
      text: "Do you have a history of respiratory conditions such as asthma or chronic obstructive pulmonary disease (COPD)?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "Have you traveled internationally in the past 14 days?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
    {
      text: "Are you currently under quarantine or isolation orders?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
        { id: 2, text: "Not sure", isCorrect: true },
      ],
    },
  ],
  Runny:[
    {
      text: "When did you first notice a runny nose?",
      options: [
        { id: 0, text: "Today", isCorrect: true },
        { id: 1, text: "Within the last 3 days", isCorrect: true},
        { id: 2, text: "Within the last week", isCorrect: true },
        { id: 2, text: "More than a week ago", isCorrect: true },
      ],
    },
    {
      text: "How would you describe the consistency of your nasal discharge?",
      options: [
        { id: 0, text: "Thin and watery", isCorrect: true },
        { id: 1, text: "Thick and colored (yellow or green)", isCorrect: true},
        { id: 2, text: "I don't know", isCorrect: true },
      ],
    },
    {
      text: "Have you experienced any other respiratory symptoms along with the runny nose? (e.g., cough, shortness of breath)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Do you have any of the following symptoms along with your runny nose? (Select all that apply)",
      options: [
        { id: 0, text: "Fever or chills", isCorrect: true },
        { id: 1, text: "Cough", isCorrect: true},
        { id: 2, text: "Shortness of breath or difficulty breathing", isCorrect: true },
        { id: 3, text: "Fatigue", isCorrect: true },
        { id: 4, text: "Muscle or body aches", isCorrect: true },
        { id: 5, text: "Headache", isCorrect: true },
        { id: 6, text: "Sore throat", isCorrect: true },
        { id: 7, text: "Loss of taste or smell", isCorrect: true },
        { id: 8, text: "Nausea or vomiting", isCorrect: true },
        { id: 9, text: "Diarrhea", isCorrect: true },
        { id: 10, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Have you traveled internationally within the last 14 days?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Have you been in close contact with someone diagnosed with COVID-19 in the last 14 days?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Do you have any pre-existing respiratory conditions? If yes, please specify.",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
        { id: 2, text: "Space", isCorrect: true },
      ],
    },
  ],
  Headache:[
    {
      text: "Have you tested positive for COVID-19 within the last 14 days?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
        { id: 2, text: "Not sure", isCorrect: true},
      ],
    },
    {
      text: "Are you currently experiencing any of the following symptoms?",
      options: [
        { id: 0, text: "Fever or chills", isCorrect: true },
        { id: 1, text: "Cough", isCorrect: true},
        { id: 2, text: "Shortness of breath or difficulty breathing", isCorrect: true },
        { id: 3, text: "Fatigue", isCorrect: true },
        { id: 4, text: "Muscle or body aches", isCorrect: true },
        { id: 5, text: "Headache", isCorrect: true },
        { id: 6, text: "Sore throat", isCorrect: true },
        { id: 7, text: "Loss of taste or smell", isCorrect: true },
        { id: 8, text: "Nausea or vomiting", isCorrect: true },
        { id: 9, text: "Diarrhea", isCorrect: true },
        { id: 10, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Have you experienced headaches within the last 14 days?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Do you experience any specific triggers for your headaches?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
        { id: 2, text: "Not sure", isCorrect: true},
      ],
    },
    {
      text: " Have you noticed any recent changes in the frequency or intensity of your headaches?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
        { id: 2, text: "Not sure", isCorrect: true},
      ],
    },
    {
      text: " Do you have a history of chronic headaches or migraines?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Are you experiencing any other COVID-19 symptoms such as fever, cough, shortness of breath, loss of taste or smell, or fatigue?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
        { id: 2, text: "Not sure", isCorrect: true},
      ],
    },
    {
      text: "Have you been in close contact with someone who has tested positive for COVID-19 in the past 14 days?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
        { id: 2, text: "Not sure", isCorrect: true},
      ],
    },
  ],
  Muscles:[
    {
      text: "Have you tested positive for COVID-19 within the last 14 days?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
        { id: 2, text: "Not sure", isCorrect: true},
      ],
    },
    {
      text: "Please indicate the severity of each symptom using the following scale",
      options: [
        { id: 0, text: "0: Not experiencing", isCorrect: false },
        { id: 1, text: "1: Mild", isCorrect: false},
        { id: 2, text: "2: Moderate", isCorrect: true},
        { id: 3, text: "3: Severe", isCorrect: true},
      ],
    },
    {
      text: "Muscle Pain or Aches",
      options: [
        { id: 0, text: "0", isCorrect: false},
        { id: 1, text: "1", isCorrect: false},
        { id: 2, text: "2", isCorrect: true},
        { id: 3, text: "3", isCorrect: true},
      ],
    },
    {
      text: "Joint Pain",
      options: [
        { id: 0, text: "0", isCorrect: false},
        { id: 1, text: "1", isCorrect: false},
        { id: 2, text: "2", isCorrect: true},
        { id: 3, text: "3", isCorrect: true},
      ],
    },
    {
      text: "Back Pain",
      options: [
        { id: 0, text: "0", isCorrect: false},
        { id: 1, text: "1", isCorrect: false},
        { id: 2, text: "2", isCorrect: true},
        { id: 3, text: "3", isCorrect: true},
      ],
    },
    {
      text: "Neck Pain",
      options: [
        { id: 0, text: "0", isCorrect: false},
        { id: 1, text: "1", isCorrect: false},
        { id: 2, text: "2", isCorrect: true},
        { id: 3, text: "3", isCorrect: true},
      ],
    },
    {
      text: "Muscle Weakness",
      options: [
        { id: 0, text: "0", isCorrect: false},
        { id: 1, text: "1", isCorrect: false},
        { id: 2, text: "2", isCorrect: true},
        { id: 3, text: "3", isCorrect: true},
      ],
    },
    {
      text: "Difficulty Moving Limbs",
      options: [
        { id: 0, text: "0", isCorrect: false},
        { id: 1, text: "1", isCorrect: false},
        { id: 2, text: "2", isCorrect: true},
        { id: 3, text: "3", isCorrect: true},
      ],
    },
    {
      text: "Do you experience any other COVID-19 related symptoms not mentioned above? (e.g., fever, cough, shortness of breath)",
      options: [
        { id: 0, text: "No", isCorrect: false},
        { id: 1, text: "Yes", isCorrect: true},
      ],
    },
    {
      text: "Do you have any pre-existing conditions or chronic illnesses that may affect your musculoskeletal system? (e.g., arthritis, fibromyalgia)",
      options: [
        { id: 0, text: "Yes", isCorrect: true},
        { id: 1, text: "No", isCorrect: true},
      ],
    },
  ],
  SoreThroat:[],
  Loss:[],
  //NutriCare
  Healthy:[
    {
      text: "How would you describe the current condition of your hair? (Choose one)",
      options: [
        { id: 0, text: "Health", isCorrect: true },
        { id: 1, text: "Dry", isCorrect: true},
        { id: 2, text: "Oily", isCorrect: true},
        { id: 3, text: "Brittle", isCorrect: true},
        { id: 4, text: "Damaged", isCorrect: true},
        { id: 5, text: "Others", isCorrect: true},
      ],
    },
    {
      text: "Have you experienced any significant changes in your hair in the past six months? (e.g., hair loss, changes in texture, excessive dryness)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
      ],
    },
    {
      text: "Are you currently experiencing any scalp issues? (e.g., dandruff, itchiness, redness)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false},
      ],
    },
    {
      text: "How often do you wash your hair?",
      options: [
        { id: 0, text: "Daily", isCorrect: true },
        { id: 1, text: "Every other day", isCorrect: true},
        { id: 2, text: "Twice a week", isCorrect: true},
        { id: 3, text: "Once a week", isCorrect: true},
        { id: 4, text: "Less than once a week", isCorrect: true},
      ],
    },
    {
      text: "Do you use heat styling tools on your hair? (e.g., flat iron, curling iron)",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
      ],
    },
    {
      text: "Please provide a brief history of any major hair treatments or procedures you've undergone in the past year (e.g., coloring, perming, straightening)",
      options: [
        { id: 0, text: "Space", isCorrect: true },
      ],
    },
    {
      text: "How would you describe your current stress level?",
      options: [
        { id: 0, text: "Low", isCorrect: false },
        { id: 1, text: "Moderate", isCorrect: true},
        { id: 2, text: "High", isCorrect: true},
      ],
    },
    {
      text: "Do you follow a balanced diet that includes foods rich in vitamins and minerals essential for hair health? (Select one",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: true},
        { id: 2, text: "I'm not sure", isCorrect: true},
      ],
    },
  ],
  Weight:[
    {
      text: "Do you have any existing medical conditions? If yes, please specify",
      options: [
        { id: 0, text: "Diabetes", isCorrect: true },
        { id: 1, text: "Hypertension", isCorrect: true},
        { id: 2, text: "Cardiovascular disease", isCorrect: true},
        { id: 3, text: "Thyroid disorders", isCorrect: true},
        { id: 4, text: "Others", isCorrect: true},
        { id: 5, text: "None of the above", isCorrect: false},
      ],
    },
    {
      text: "What is your primary goal for weight loss?",
      options: [
        { id: 0, text: "Space", isCorrect: true },
      ],
    },
    {
      text: "Are there any specific challenges or obstacles you have faced in previous attempts at weight loss?",
      options: [
        { id: 0, text: "Space", isCorrect: true },
      ],
    },
  ],
  Clear:[
    {
      text: "Skin Type",
      options: [
        { id: 0, text: "Oily", isCorrect: false},
        { id: 1, text: "Dry", isCorrect:false},
        { id: 1, text: "Combination", isCorrect: false },
        { id: 1, text: "Sensitive", isCorrect: false },
        { id: 1, text: "Normal", isCorrect: false},
      ],
    },
    {
      text: "Skin Concerns(Choose one that nearly matches)",
      options: [
        { id: 0, text: "Acne", isCorrect: true},
        { id: 1, text: "Dark Spots", isCorrect:true},
        { id: 2, text: "Fine Lines/Wrinkles", isCorrect: true },
        { id: 3, text: "Redness/Irritation", isCorrect: true },
        { id: 4, text: "Others", isCorrect: true },
        { id: 5, text: "None of the above", isCorrect: false},
      ],
    },
    {
      text: "Current Skincare Routine",
      options: [
        { id: 0, text: "Cleanser", isCorrect: true},
        { id: 1, text: "Toner", isCorrect:true},
        { id: 2, text: "Moisturizer", isCorrect: true },
        { id: 3, text: "Sunscreen", isCorrect: true },
        { id: 4, text: "Treatment Products (if any)", isCorrect: true },
      ],
    },
    {
      text: "Any existing skin conditions or allergies?",
      options: [
        { id: 0, text: "Yes", isCorrect: true},
        { id: 1, text: "No", isCorrect:false},
      ],
    },
  ],
  Perfect:[],
  Pregnancy:[],
};

export default QuestList;
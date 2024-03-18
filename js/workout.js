
function suggestWorkout(goal,lw,mw,hw) {
    let workoutSuggestion = "";
    let totalcount = 0;
    switch (goal) {
        case "aesthetic":

            workoutSuggestion = "Aesthetic Workout Session:\n\n" +
                                "Monday: Chest & Triceps\n" +
                                "Barbell Bench Press - 4 sets x 8-12 reps (Weight:"+lw+"kgs"+")\n" +
                                "Incline Dumbbell Press - 3 sets x 10-15 reps (Weight:"+lw+"kgs"+")\n" +
                                "Tricep Dips - 3 sets x 10-15 reps (Bodyweight)\n" +
                                "Skull Crushers - 3 sets x 10-15 reps (Weight:"+lw+"kgs"+")\n" +
                                "Cable Flyes - 3 sets x 12-15 reps (Weight:"+mw+"kgs"+")\n\n" +
                                
                                "Tuesday: Back & Biceps\n" +
                                "Pull-Ups - 4 sets x 8-12 reps (Bodyweight)\n" +
                                "Barbell Rows - 3 sets x 10-15 reps (Weight:"+mw+"kgs"+")\n" +
                                "Lat Pulldowns - 3 sets x 10-15 reps (Weight:"+mw+"kgs"+")\n" +
                                "Dumbbell Bicep Curls - 3 sets x 10-15 reps (Weight:"+lw+"kgs"+")\n" +
                                "Hammer Curls - 3 sets x 12-15 reps (Weight:"+lw+"kgs"+")\n\n" +
                                
                                "Wednesday: Legs\n" +
                                "Barbell Squats - 4 sets x 8-12 reps (Weight:"+mw+"kgs"+")\n" +
                                "Romanian Deadlifts - 3 sets x 10-15 reps (Weight:"+mw+"kgs"+")\n" +
                                "Leg Press - 3 sets x 10-15 reps (Weight:"+mw+"kgs"+")\n" +
                                "Lunges - 3 sets x 10-15 reps (Bodyweight)\n" +
                                "Calf Raises - 3 sets x 12-15 reps (Weight:"+lw+"kgs"+")\n\n" +
                                
                                "Thursday: Shoulders & Abs\n" +
                                "Overhead Barbell Press - 4 sets x 8-12 reps (Weight:"+mw+"kgs"+")\n" +
                                "Lateral Raises - 3 sets x 10-15 reps (Weight:"+lw+"kgs"+")\n" +
                                "Front Raises - 3 sets x 10-15 reps (Weight:"+lw+"kgs"+")\n" +
                                "Russian Twists - 3 sets x 15-20 reps (Bodyweight)\n" +
                                "Plank - 3 sets x 30-60 seconds (Bodyweight)\n\n" +
                                
                                "Friday: Full Body & Cardio\n" +
                                "Deadlifts - 4 sets x 8-12 reps (Weight:"+hw+"kgs"+")\n" +
                                "Push-Ups - 3 sets x 10-15 reps (Bodyweight)\n" +
                                "Pull-Ups - 3 sets x 8-12 reps (Bodyweight)\n" +
                                "Jump Squats - 3 sets x 12-15 reps (Bodyweight)\n" +
                                "HIIT Cardio (e.g., sprints or cycling) - 20-30 minutes\n";
            totalcount=36+48+30;
            break;
            case "bulky":
                workoutSuggestion = "Bulky Workout Session:\n\n" +
                                    "Monday: Legs\n" +
                                    "Barbell Squats - 4 sets x 6-8 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Deadlifts - 4 sets x 6-8 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Leg Press - 4 sets x 8-10 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Calf Raises - 4 sets x 10-12 reps (Weight:"+mw+"kgs"+")\n\n" +
            
                                    "Tuesday: Chest & Triceps\n" +
                                    "Bench Press - 4 sets x 6-8 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Incline Dumbbell Press - 4 sets x 6-8 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Chest Dips - 4 sets x 8-10 reps (Weight: Bodyweight)\n" +
                                    "Skull Crushers - 4 sets x 8-10 reps (Weight:"+mw+"kgs"+")\n\n" +
            
                                    "Wednesday: Back & Biceps\n" +
                                    "Deadlifts - 4 sets x 6-8 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Pull-Ups - 4 sets x 6-8 reps (Weight: Bodyweight)\n" +
                                    "Barbell Rows - 4 sets x 6-8 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Hammer Curls - 4 sets x 8-10 reps (Weight:"+hw+"kgs"+")\n\n" +
            
                                    "Thursday: Shoulders & Abs\n" +
                                    "Military Press - 4 sets x 6-8 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Lateral Raises - 4 sets x 8-10 reps (Weight:"+mw+"kgs"+")\n" +
                                    "Front Raises - 4 sets x 8-10 reps (Weight:"+mw+"kgs"+")\n" +
                                    "Russian Twists - 4 sets x 10-12 reps (Weight: Bodyweight)\n\n" +
            
                                    "Friday: Full Body & Cardio\n" +
                                    "Barbell Squats - 3 sets x 10-12 reps (Weight:"+mw+"kgs"+")\n" +
                                    "Bench Press - 3 sets x 10-12 reps (Weight:"+mw+"kgs"+")\n" +
                                    "Deadlifts - 3 sets x 10-12 reps (Weight:"+mw+"kgs"+")\n" +
                                    "Pull-Ups - 3 sets x 10-12 reps (Weight: Bodyweight)\n" +
                                    "HIIT Cardio (e.g., sprints or cycling) - 20-30 minutes\n";
            totalcount = 40+50+50;
            break;
            case "jacked":
                workoutSuggestion = "Jacked Workout Session:\n\n" +
                                    "Monday: Chest & Triceps\n" +
                                    "Bench Press - 4 sets x 6-10 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Incline Dumbbell Press - 4 sets x 6-10 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Dumbbell Flyes - 4 sets x 8-12 reps (Weight:"+mw+"kgs"+")\n" +
                                    "Tricep Pushdowns - 4 sets x 8-12 reps (Weight:"+mw+"kgs"+")\n\n" +
            
                                    "Tuesday: Back & Biceps\n" +
                                    "Deadlifts - 4 sets x 6-10 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Pull-Ups - 4 sets x 6-10 reps (Weight: Bodyweight)\n" +
                                    "Bent Over Rows - 4 sets x 8-12 reps (Weight:"+mw+"kgs"+")\n" +
                                    "Barbell Curls - 4 sets x 8-12 reps (Weight:"+mw+"kgs"+")\n\n" +
            
                                    "Wednesday: Legs\n" +
                                    "Barbell Squats - 4 sets x 6-10 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Leg Press - 4 sets x 8-12 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Lunges - 4 sets x 10-12 reps (Weight:"+mw+"kgs"+")\n" +
                                    "Calf Raises - 4 sets x 12-15 reps (Weight:"+mw+"kgs"+")\n\n" +
            
                                    "Thursday: Shoulders & Abs\n" +
                                    "Military Press - 4 sets x 6-10 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Lateral Raises - 4 sets x 8-12 reps (Weight:"+mw+"kgs"+")\n" +
                                    "Front Raises - 4 sets x 8-12 reps (Weight:"+mw+"kgs"+")\n" +
                                    "Hanging Leg Raises - 4 sets x 10-15 reps (Bodyweight)\n\n" +
            
                                    "Friday: Full Body & Cardio\n" +
                                    "Deadlifts - 3 sets x 8-12 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Bench Press - 3 sets x 8-12 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Squats - 3 sets x 8-12 reps (Weight:"+hw+"kgs"+")\n" +
                                    "Pull-Ups - 3 sets x 8-12 reps (Weight: Bodyweight)\n" +
                                    "HIIT Cardio (e.g., sprints or cycling) - 20-30 minutes\n";
            totalcount = 60+60+50;
            break;
        case "shredded":
    workoutSuggestion = "Shredded Workout Session:\n\n" +
                        "Monday: Upper Body Strength\n" +
                        "Bench Press - 4 sets x 6-8 reps (Weight:"+hw+"kgs"+")\n" +
                        "Pull-Ups - 4 sets x 6-8 reps (Weight: Bodyweight)\n" +
                        "Barbell Rows - 4 sets x 6-8 reps (Weight:"+hw+"kgs"+")\n" +
                        "Dumbbell Shoulder Press - 4 sets x 6-8 reps (Weight:"+mw+"kgs"+")\n\n" +

                        "Tuesday: Lower Body & Cardio\n" +
                        "Barbell Squats - 4 sets x 6-8 reps (Weight:"+hw+"kgs"+")\n" +
                        "Deadlifts - 4 sets x 6-8 reps (Weight:"+hw+"kgs"+")\n" +
                        "Leg Press - 4 sets x 8-10 reps (Weight:"+hw+"kgs"+")\n" +
                        "HIIT Cardio (e.g., sprints or cycling) - 20-30 minutes\n\n" +

                        "Wednesday: Core & Flexibility\n" +
                        "Plank - 4 sets x 30-60 seconds (Bodyweight)\n" +
                        "Russian Twists - 4 sets x 15-20 reps (Bodyweight or Light)\n" +
                        "Leg Raises - 4 sets x 10-15 reps (Bodyweight)\n" +
                        "Yoga or Pilates - 30 minutes\n\n" +

                        "Thursday: Upper Body Hypertrophy\n" +
                        "Dumbbell Bench Press - 4 sets x 8-12 reps (Weight:"+mw+"kgs"+")\n" +
                        "Lat Pulldowns - 4 sets x 8-12 reps (Weight:"+mw+"kgs"+")\n" +
                        "Cable Flyes - 4 sets x 8-12 reps (Weight:"+mw+"kgs"+")\n" +
                        "Dumbbell Lateral Raises - 4 sets x 10-15 reps (Weight:"+lw+"kgs"+")\n\n" +

                        "Friday: Full Body Circuit & Cardio\n" +
                        "Circuit (Push-Ups, Bodyweight Squats, Burpees) - 3 rounds x 12-15 reps each\n" +
                        "Resistance Band Exercises (Bicep Curls, Tricep Extensions) - 3 sets x 12-15 reps\n" +
                        "Jump Rope - 20-30 minutes\n";
            totalcount = 75+75+60;
            break;
        default:
            workoutSuggestion = "Please select a valid body goal.";
    }

    return { workoutSuggestion, totalcount };
}

function calculateFitness() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const pushset = parseInt(document.getElementById('pushset').value);
    const pushrep = parseInt(document.getElementById('pushrep').value);
    const pullset = parseInt(document.getElementById('pullset').value);
    const pullrep = parseInt(document.getElementById('pullrep').value);
    const squatset = parseInt(document.getElementById('squatset').value);
    const squatrep = parseInt(document.getElementById('squatrep').value);
    const goal = document.getElementById('goal').value;

    const { totalcount } = suggestWorkout(goal);
    const bmi = weight / (height / 100 * height / 100);
    const pushup = pushset * pushrep;
    const pullup = pullset * pullrep;
    const squat = squatset * squatrep;
    const totalFitness = bmi * (pushup + pullup + squat) / totalcount;
    
    let r = '';
    let color = '';
    let lw=0;
    let mw=0;
    let hw=0;

    if (totalFitness < 20) {
        r = "Hmm, looks like you're just getting started. Keep it up!";
        color = 'orange';
        lw=5;
        mw=7.5;
        hw=10;
    } else if (20 <= totalFitness && totalFitness <= 30) {
        r = "Not bad, you're making progress! Keep pushing!";
        color = 'green';
        lw=7.5;
        mw=12.5;
        hw=15;

    } else if (30 < totalFitness && totalFitness <=45) {
        r = "Hey, you're doing pretty well! Keep going!";
        color = 'violet';
        lw=12.5;
        mw=15;
        hw=20;
    } else if (45 < totalFitness && totalFitness <= 59) {
        r = "Wow, you're really stepping up your game! Keep it up!";
        color = 'lightblue';
        lw=15;
        mw=20;
        hw=30;
    } else if (60 <= totalFitness) {
        r = "You're a beast! Keep crushing those workouts!";
        color = 'red';
        lw=20;
        mw=30;
        hw=50;
    }

    const fitnessMessage = `Your total fitness score is: ${totalFitness.toFixed(2)}.`;
    const infoDiv = document.getElementById("info");
    infoDiv.innerHTML = fitnessMessage + "<br><br>" + r;
    infoDiv.style.color = color;

    document.getElementById("generate-workout").style.display = "block";
    return { lw,mw,hw };
}

function generateWorkout() {

    const goal = document.getElementById('goal').value;
    const {lw} = calculateFitness()
    const {mw} = calculateFitness()
    const {hw} = calculateFitness()

    const { workoutSuggestion } = suggestWorkout(goal,lw,mw,hw);

    document.getElementById("workout-plan").innerText = workoutSuggestion;
}
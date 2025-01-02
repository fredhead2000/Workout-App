// Workout data
const workouts = {
    Monday: [
        { name: "Forearm Plank to Roll-Outs", image: "images/plank_rollouts.jpg", sets: 3, reps: "10-12 reps" },
        { name: "Dead Bugs", image: "images/deadbugs.jpg", sets: 3, reps: "10 reps per side" },
        { name: "Seated Knee Lifts", image: "images/seated_knee_lifts.jpg", sets: 3, reps: "15 reps" },
        { name: "Standing Dumbbell Side Bends", image: "images/side_bends.jpg", sets: 3, reps: "10 reps per side" },
        { name: "Leg Raises", image: "images/leg_raises.jpg", sets: 3, reps: "12-15 reps" },
    ],
    Tuesday: [
        { name: "Incline Push-Ups", image: "images/incline_pushups.jpg", sets: 3, reps: "8-12 reps" },
        { name: "Bodyweight Squats", image: "images/squats.jpg", sets: 3, reps: "12 reps" },
        { name: "Forearm Plank Hold", image: "images/plank_hold.jpg", sets: 3, reps: "30 seconds" },
        { name: "Rolling Ab Machine (Slow Control)", image: "images/rolling_ab.jpg", sets: 3, reps: "8 reps" },
        { name: "Seated Russian Twists", image: "images/russian_twists.jpg", sets: 3, reps: "20 twists" },
    ],
    Wednesday: [
        { name: "Seated Knee Tucks", image: "images/knee_tucks.jpg", sets: 3, reps: "10-12 reps" },
        { name: "Plank Shoulder Taps", image: "images/plank_taps.jpg", sets: 3, reps: "20 taps (10 per side)" },
        { name: "Side Planks", image: "images/side_plank.jpg", sets: 3, reps: "20 seconds per side" },
        { name: "Rolling Ab Machine Roll-Outs", image: "images/rolling_ab.jpg", sets: 3, reps: "8 reps" },
        { name: "Dumbbell Side Raises", image: "images/side_raises.jpg", sets: 3, reps: "10 reps" },
    ],
    Thursday: [
        { name: "Rolling Ab Machine Roll-Outs", image: "images/rolling_ab.jpg", sets: 3, reps: "10-12 reps" },
        { name: "Bird Dog", image: "images/bird_dog.jpg", sets: 3, reps: "10 reps per side" },
        { name: "Bodyweight Reverse Lunges", image: "images/reverse_lunges.jpg", sets: 3, reps: "10 reps per leg" },
        { name: "Forearm Plank with Leg Lifts", image: "images/plank_leg_lifts.jpg", sets: 3, reps: "20 seconds" },
        { name: "Dumbbell Deadlifts", image: "images/dumbbell_deadlift.jpg", sets: 3, reps: "12 reps" },
    ],
    Friday: [
        { name: "Rolling Ab Machine Roll-Outs", image: "images/rolling_ab.jpg", sets: 3, reps: "8-10 reps" },
        { name: "Bicycle Crunches", image: "images/bicycle_crunches.jpg", sets: 3, reps: "10 reps per side" },
        { name: "Plank Walkouts", image: "images/plank_walkouts.jpg", sets: 3, reps: "8 reps" },
        { name: "Side Plank Dips", image: "images/side_plank_dips.jpg", sets: 3, reps: "10 dips per side" },
        { name: "Seated Dumbbell Presses", image: "images/dumbbell_presses.jpg", sets: 3, reps: "10 reps" },
    ],
};

// Get today's weekday
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date().getDay();
const todayWorkouts = workouts[days[today]] || [];

// Populate the page
const workoutTitle = document.getElementById("workout-title");
const workoutContent = document.getElementById("workout-content");

if (todayWorkouts.length > 0) {
    workoutTitle.textContent = `Today's Workouts (${days[today]})`;

    todayWorkouts.forEach((workout) => {
        const workoutDiv = document.createElement("div");
        workoutDiv.classList.add("workout-item");

        // Add workout name
        const name = document.createElement("h2");
        name.textContent = workout.name;
        workoutDiv.appendChild(name);

        // Add workout image
        const img = document.createElement("img");
        img.src = workout.image;
        img.alt = workout.name;
        workoutDiv.appendChild(img);

        // Add workout reps/sets
        const setInfo = document.createElement("div");
        setInfo.classList.add("set-info");
        setInfo.textContent = `${workout.sets} sets of ${workout.reps}`;
        workoutDiv.appendChild(setInfo);

        // Add checkboxes for sets
        for (let i = 0; i < workout.sets; i++) {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("set-checkbox");
            workoutDiv.appendChild(checkbox);
        }

        workoutContent.appendChild(workoutDiv);
    });
} else {
    workoutTitle.textContent = "No workouts scheduled for today!";
}
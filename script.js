// Workout data
const workouts = {
    Monday: [
        { name: "Plank", image: "images/plank.jpg", sets: 3, reps: "30 seconds" },
        { name: "Dead Bug", image: "images/deadbug.jpg", sets: 3, reps: "10 reps per side" },
        { name: "Mountain Climbers", image: "images/mountain_climber.jpg", sets: 3, reps: "20 seconds" },
    ],
    Tuesday: [
        { name: "Push Ups", image: "images/pushups.jpg", sets: 3, reps: "12 reps" },
        { name: "Bodyweight Squats", image: "images/squats.jpg", sets: 3, reps: "15 reps" },
    ],
    Wednesday: [
        { name: "Side Plank", image: "images/side_plank.jpg", sets: 3, reps: "20 seconds per side" },
        { name: "Knee Tucks", image: "images/knee_tucks.jpg", sets: 3, reps: "12 reps" },
    ],
    Thursday: [
        { name: "Bird Dog", image: "images/bird_dog.jpg", sets: 3, reps: "10 reps per side" },
        { name: "Reverse Lunges", image: "images/reverse_lunges.jpg", sets: 3, reps: "10 reps per leg" },
    ],
    Friday: [
        { name: "Bicycle Crunches", image: "images/bicycle_crunches.jpg", sets: 3, reps: "15 reps per side" },
        { name: "Plank Walkouts", image: "images/plank_walkouts.jpg", sets: 3, reps: "8 reps" },
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
const moods = {
  happy: {
    quote: "Happiness is not something ready made. It comes from your own actions.",
    music: "https://www.youtube.com/watch?v=ZbZSe6N_BXs", // Happy - Pharrell
    bg: "#fff59d"
  },
  sad: {
    quote: "Tears come from the heart and not from the brain.",
    music: "https://www.youtube.com/watch?v=RgKAFK5djSk", // See You Again
    bg: "#90caf9"
  },
  angry: {
    quote: "For every minute you remain angry, you give up sixty seconds of peace of mind.",
    music: "https://www.youtube.com/watch?v=hLQl3WQQoQ0", // Adele - Someone Like You
    bg: "#ef9a9a"
  },
  relaxed: {
    quote: "Your mind will answer most questions if you learn to relax and wait for the answer.",
    music: "https://www.youtube.com/watch?v=2OEL4P1Rz04", // Weightless
    bg: "#a5d6a7"
  }
};

function showMoodContent(mood) {
  const data = moods[mood];
  document.body.style.background = data.bg;
  document.getElementById('result').innerHTML = `
    <p><strong>Quote:</strong> "${data.quote}"</p>
    <p><strong>Recommended Music:</strong> <a href="${data.music}" target="_blank">Listen here</a></p>
  `;
}

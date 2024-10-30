window.onload = function() {
    const canvas = document.getElementById("starfield");
    const context = canvas.getContext("2d");
    let stars = [];

    // Resize canvas to fit the screen
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    // Initialize stars
    function initStars() {
        stars = [];
        const numStars = 200; // Number of stars to generate
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2,
                speed: Math.random() * 0.5 + 0.2,
                opacity: Math.random() * 0.5 + 0.5
            });
        }
    }

    // Draw stars
    function drawStars() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            context.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            context.beginPath();
            context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            context.fill();

            // Move star down
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }
        });
        requestAnimationFrame(drawStars);
    }

    // Initialize canvas and stars, and handle resize
    window.addEventListener("resize", () => {
        resizeCanvas();
        initStars();
    });

    resizeCanvas();
    initStars();
    drawStars();
};

function toggleDetails(jobId) {
    // Close all other job details
    document.querySelectorAll('.details').forEach(detail => {
        if (detail.id !== jobId) {
            detail.style.display = 'none';
        }
    });

    // Toggle the selected job details
    const jobDetails = document.getElementById(jobId);
    jobDetails.style.display = jobDetails.style.display === 'block' ? 'none' : 'block';
}
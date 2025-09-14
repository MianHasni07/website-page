const videoGrid = document.getElementById('video-grid');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Sample video data
const videos = [
    {
        id: 1,
        title: 'Video 1',
        description: 'This is video 1',
        url:'',

    },
    {
        id: 2,
        title: '//example.com/video1.mp4'
    },
    {
        id: 2,
        title: 'Video 2',
        description: 'This is video 2',
        url: 'https://example.com/video2.mp4'
    },
    // Add more video data here
];

// Function to generate video cards
function generateVideoCards(videos) {
    videoGrid.innerHTML = '';
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('video-card');
        videoCard.innerHTML = `
            <video src="${video.url}" controls></video>
            <h2>${video.title}</h2>
            <p>${video.description}</p>
        `;
        videoGrid.appendChild(videoCard);
    });
}

// Generate video cards on page load
generateVideoCards(videos);

// Search functionality
searchButton.addEventListener('click'), (e) => {
    e.preventDefault();
    const searchQuery = searchInput.value.toLowerCase();
    const filteredVideos = videos.filter
}
const titles = [
  "React Tutorial",
  "Learn JavaScript",
  "Tailwind CSS Guide",
  "Frontend Roadmap",
  "Build YouTube Clone"
];

const channels = [
  "Code Dạo",
  "F8 Official",
  "Dev Pro",
  "Frontend Master",
  "Tech World"
];

const mockData = Array.from({ length: 20 }, (_, i) => ({
  id: { videoId: String(i + 1) },
  snippet: {
    title: titles[Math.floor(Math.random() * titles.length)],
    channelTitle: channels[Math.floor(Math.random() * channels.length)],
    thumbnails: {
      medium: {
        url: `https://picsum.photos/seed/${i}/400/225`
      }
    },
    publishedAt: new Date(
      Date.now() - Math.random() * 10000000000
    ).toISOString()
  }
}));

export default mockData;
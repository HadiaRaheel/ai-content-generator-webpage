const dummyImages = [
  "/images/model1.jpg",
  "/images/model2.jpg",
  "/images/model3.jpg",
  "/images/model4.jpg",
  "/images/model5.jpg",
  "/images/model6.jpg",
  "/images/model7.jfif",
  "/images/model8.jfif",
  "/images/model9.jfif",
  "/images/model10.jfif",
  "/images/model11.jfif",
  "/images/model12.jfif",
  "/images/model13.jfif",
  "/images/model14.jfif",
  "/images/model15.jfif",
  "/images/model16.webp",
  "/images/model17.jfif",
  "/images/model18.jfif",
];

const dummyVideos = [
  "/videos/sample1.mp4",
  "/videos/sample2.mp4",
  "/videos/sample3.mp4",
  "/videos/sample4.mp4",
  "/videos/sample5.mp4",
  "/videos/sample6.mp4",
  "/videos/sample7.mp4",
  "/videos/sample8.mp4",
];

export async function POST(request) {
  try {
    const { count = 8, type = "Image" } = await request.json();

    // Simulate network delay like a real API
    await new Promise((res) => setTimeout(res, 800));

    const pool = type === "Video" ? dummyVideos : dummyImages;

    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const results  = shuffled.slice(0, Math.min(count, pool.length));

    return Response.json({
      images: results,
      type,
      count: results.length,
    });

  } catch (err) {
    console.error("Generate API error:", err);
    return Response.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
const hour = 3600000;
const now = Date.now();
export const people = {
  "Martha Green": {
    initials: "MG",
    color: "peach",
    bio: "Growing vegetables, sharing flowers, and learning something new every season.",
  },
  "Community Gardening Club": {
    initials: "CG",
    color: "green",
    bio: "A little dirt, a lot of community. Bringing neighbors together, one garden at a time.",
  },
  "Oliver Chen": {
    initials: "OC",
    color: "blue",
    bio: "Backyard grower. Compost enthusiast. Always happy to lend a hand.",
  },
  "Sofia Rivera": {
    initials: "SR",
    color: "pink",
    bio: "Finding joy in slow mornings and things that grow.",
  },
  "James Wilson": {
    initials: "JW",
    color: "gold",
    bio: "Learning to grow good food and a greener neighborhood.",
  },
};
export const initialPosts = [
  {
    id: "tomatoes",
    type: "Question",
    title: "A little help with my tomatoes?",
    author: "Martha Green",
    body: "My tomato leaves have started curling after this week’s warm weather. I’m watering every morning, but they still seem a little unhappy. Has anyone else experienced this? I’d love to hear what’s worked for your garden!",
    photos: ["/images/tomatoes.jpg"],
    created: now - 2 * hour,
    likes: 24,
    comments: [
      {
        id: "c1",
        author: "Oliver Chen",
        body: "A layer of mulch made a huge difference for mine! It keeps the roots cool and helps the soil retain moisture. Check the soil a couple of inches down before watering.",
        likes: 12,
        created: now - hour,
        parent: null,
      },
      {
        id: "c2",
        author: "Martha Green",
        body: "That’s so helpful, Oliver. I have some straw I can use. Thank you!",
        likes: 4,
        created: now - hour / 2,
        parent: "c1",
      },
      {
        id: "c3",
        author: "Sofia Rivera",
        body: "Mine did this in the heat too. A little afternoon shade helped them recover. Try a shade cloth on the hottest days.",
        likes: 8,
        created: now - hour / 3,
        parent: null,
      },
    ],
  },
  {
    id: "workshop",
    type: "Event",
    title: "Let’s grow together: fall planting workshop",
    author: "Community Gardening Club",
    body: "Pull on your gardening gloves and join us for a relaxed morning of fall planting at Jose Field. We will be planting spinach, argula, and mustard greens. We also need to harvest the last of our squash crop. All experience levels welcome. Just bring your curiosity (and gloves if you have them)! Meet by the main garden gate.",
    photos: ["/images/vegetables.jpg"],
    date: "2026-11-21",
    time: "10:00",
    created: now - 4 * hour,
    likes: 38,
    comments: [
      {
        id: "c4",
        author: "James Wilson",
        body: "Looking forward to it! I have some extra kale seedlings to share.",
        likes: 9,
        created: now - 2 * hour,
        parent: null,
      },
      {
        id: "c5",
        author: "Community Gardening Club",
        body: "That would be wonderful, James. Bring them along!",
        likes: 3,
        created: now - hour,
        parent: "c4",
      },
    ],
  },
  {
    id: "help",
    type: "Job",
    title: "A few helping hands for a garden refresh",
    author: "Martha Green",
    body: "My little backyard garden could use some love! I’m looking for a few neighbors to help with weeding and getting the beds ready for winter. A couple of hours would make such a difference. I’ll provide tools, homemade lemonade, and plenty of gratitude. Leave a comment if you’d like to help.",
    photos: ["/images/planting.jpg"],
    created: now - 6 * hour,
    likes: 17,
    comments: [
      {
        id: "c6",
        author: "Oliver Chen",
        body: "I’d be happy to help this weekend! I can bring a wheelbarrow too.",
        likes: 6,
        created: now - 3 * hour,
        parent: null,
      },
    ],
  },
  {
    id: "compost",
    type: "Question",
    title: "What’s your secret to good compost?",
    author: "Oliver Chen",
    body: "I’ve just started my first compost bin and would love your tried-and-true tips. How do you balance greens and browns? And how often do you turn yours?",
    photos: [],
    created: now - 23 * hour,
    likes: 31,
    comments: [
      {
        id: "c7",
        author: "Sofia Rivera",
        body: "Shredded cardboard is my favorite brown material. Keep it damp like a wrung-out sponge, and turn it weekly.",
        likes: 15,
        created: now - 20 * hour,
        parent: null,
      },
    ],
  },
  {
    id: "swap",
    type: "Event",
    title: "The neighborhood seed & seedling swap",
    author: "Community Gardening Club",
    body: "Have a few seeds to spare? Come trade with your neighbors at the community garden! Label your seeds if you can. There will be a beginners’ table, so you can join even if you don’t have seeds to bring.",
    photos: [],
    date: "2026-11-28",
    time: "09:30",
    created: now - 27 * hour,
    likes: 22,
    comments: [],
  },
  {
    id: "herbs",
    type: "Job",
    title: "Help us build a community herb corner",
    author: "Sofia Rivera",
    body: "We’re turning an unused corner of the community garden into a shared herb bed. We could use a hand assembling two raised beds and filling them with soil. Comment below to get involved!",
    photos: [],
    created: now - 30 * hour,
    likes: 12,
    comments: [],
  },
];
export function relativeTime(timestamp) {
  const hours = Math.max(0, Math.floor((Date.now() - timestamp) / hour));
  return hours === 0
    ? "Just now"
    : hours < 24
      ? `${hours}h ago`
      : `${Math.floor(hours / 24)}d ago`;
}
export function eventDate(date, options = { month: "short", day: "numeric" }) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", options);
}
export function eventTime(time) {
  return new Date(`2000-01-01T${time}`).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}
export function selectPosts(
  posts,
  { profile, savedOnly, saved, type, query, sort },
) {
  const text = query.trim().toLowerCase();
  return posts
    .filter(
      (p) =>
        (!profile || p.author === profile) &&
        (!savedOnly || saved.includes(p.id)) &&
        (type === "All posts" || p.type === type) &&
        (!text ||
          [p.title, p.body, ...p.comments.map((c) => c.body)].some((value) =>
            value.toLowerCase().includes(text),
          )),
    )
    .sort((a, b) =>
      sort === "Most liked"
        ? b.likes - a.likes || b.created - a.created
        : b.created - a.created,
    );
}

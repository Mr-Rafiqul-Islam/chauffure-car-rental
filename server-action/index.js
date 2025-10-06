export const getServices = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_SERVER_API_URL}/services`, {
      next: { revalidate: 60 }, // ISR caching (optional)
    });

    if (!res.ok) throw new Error("Failed to fetch services");

    const data = await res.json();

    return data.services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};


export const getSingleService = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_SERVER_API_URL}/specific-services/${id}`,
      {
        next: { revalidate: 60 }, // ISR caching (optional)
      }
    );
    if (!res.ok) throw new Error("Failed to fetch services");

    const data = await res.json();

    return data.service;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

export const getFleets = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_SERVER_API_URL}/fleets`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error("Failed to fetch fleets");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching fleets:", error);
    return [];
  }
};

export const getFleetDetails = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_SERVER_API_URL}/specific-fleet/${id}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch fleet");

    const data = await res.json();
    return data.fleet;
  } catch (error) {
    console.error("Error fetching fleet:", error);
    return [];
  };
}

export const getBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_SERVER_API_URL}/blog`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error("Failed to fetch blogs");

    const data = await res.json();
    return data.blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export const getBlogDetails = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_SERVER_API_URL}/specific-blog/${id}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch blog");

    const data = await res.json();
    return data.blog;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return [];
  }
};
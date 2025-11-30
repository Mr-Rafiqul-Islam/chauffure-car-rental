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

export const getSingleService = async (slug) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_SERVER_API_URL}/specific-services/${slug}`,
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
    return data.fleets;
  } catch (error) {
    console.error("Error fetching fleets:", error);
    return [];
  }
};

export const getFleetDetails = async (slug) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_SERVER_API_URL}/specific-fleet/${slug}`,
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
  }
};

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

export const getBlogDetails = async (slug) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_SERVER_API_URL}/specific-blog/${slug}`,
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

export const getSliders = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_SERVER_API_URL}/slider`, {
      cache: "no-cache",
    });

    if (!res.ok) throw new Error("Failed to fetch sliders");

    const data = await res.json();
    return data.slider;
  } catch (error) {
    console.error("Error fetching sliders:", error);
    return [];
  }
};

export const forgotPassword = async (email) => {
  try {
    const res = await fetch(`/api/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      // Try to extract the specific error message from the server, if one exists
      const errorData = await res.json().catch(() => null); 
      throw new Error(errorData?.message || "Failed to reset password");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error forgetting password:", error);
    throw error;
  }
};

export const resetPassword = async (email, token, password) => {
  try {
    const res = await fetch(`/api/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, token, password }),
    });

    if (!res.ok) {
      // Try to extract the specific error message from the server, if one exists
      const errorData = await res.json().catch(() => null); 
      throw new Error(errorData?.message || "Failed to reset password");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};

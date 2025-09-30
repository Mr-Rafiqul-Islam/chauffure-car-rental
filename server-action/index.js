export const getServices = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_SERVER_API_URL}/services`, {
      next: { revalidate: 60 }, // ISR caching (optional)
    });

    if (!res.ok) throw new Error("Failed to fetch services");

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

//   const res = await fetch(`${process.env.NEXT_SERVER_API_URL}/services/${id}`, {
//     next: { revalidate: 60 }, // ISR caching (optional)
//   });

//   const res = await fetch(`${process.env.NEXT_SERVER_API_URL}/services/${id}`, {
//     next: { revalidate: 60 }, // ISR caching (optional)
//   });
//   if (!res.ok) throw new Error("Failed to fetch services");

//   const data = await res.json();

//   return data;

export const getSingleService = async (id) => {
  try {
    const { services } = await getServices();

    const singleData = services.find((service) => service.id === Number(id));

    return singleData;
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

export const getBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_SERVER_API_URL}/blog`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error("Failed to fetch blogs");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export async function submitContact(data) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact-store`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Failed to submit contact form.");
        return res.json();
    } catch (error) {
        console.error("Error submitting contact form:", error);
        throw error;
    }
}
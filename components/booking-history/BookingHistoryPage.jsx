// components/booking/BookingHistoryPage.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";
import BookingInfo from "./BookingInfo";

export default function BookingHistoryPage() {
  const { isAuthenticated, isLoading: isAuthLoading, token } = useAuth();
  const router = useRouter();

  // ✨ State for the booking history data
  const [history, setHistory] = useState([]);
  const [isFetching, setIsFetching] = useState(true); // Loading state for the fetch itself
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Handle Authentication and Redirection
    if (!isAuthLoading && !isAuthenticated) {
      router.push("/"); // Redirect if not authenticated
      return; // Stop the effect
    }

    // 2. Fetch data only if authenticated and token is present
    if (isAuthenticated && token) {
      const fetchHistory = async () => {
        setIsFetching(true);
        setError(null);
        try {
          // Replace with your actual API endpoint
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/my-bookings`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // ✨ Use the token here
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch booking history.");
          }

          const data = await response.json();
          // Assuming the API returns an object like { bookings: [...] }
          setHistory(data.bookings || []);
        } catch (err) {
          console.error(err);
          setError(err.message);
        } finally {
          setIsFetching(false);
        }
      };

      fetchHistory();
    }
  }, [isAuthenticated, isAuthLoading, token, router]);

  // ✨ Show a loader while authenticating OR fetching data
  if (isAuthLoading || isFetching) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-16 w-16 animate-spin text-copper" />
      </div>
    );
  }

  // ✨ Show an error message if the fetch failed
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  // ✨ If authenticated and fetch is complete, render the content
  return (
    <section className="pt-28 lg:px-20 md:px-10 px-5">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Your Booking History</h1>
        {history.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {history.map((booking) => (
              <BookingInfo key={booking.id}  booking={booking} />
            ))}
          </div>
        ) : (
          <p>You have no booking history.</p>
        )}
      </div>
    </section>
  );
}

"use client";

import { useRouter } from "next/navigation";

export default function SearchPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/marketplace?query=test");
  };

  return (
    <div>
      <h1>Search Page</h1>
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

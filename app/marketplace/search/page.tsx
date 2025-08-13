import { useRouter } from "next/navigation"; // instead of next/router

export default function SearchPage() {
  const router = useRouter();

  // Example usage
  const handleSearch = () => {
    router.push("/marketplace?query=test");
  };

  return (
    <div>
      <h1>Search</h1>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-gradient-to-r flex items-center justify-center from-blue-500 to-purple-600 min-h-screen text-white">
      <SignUp />
    </div>
  );
}

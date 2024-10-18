import { UserButton, SignedIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <SignedIn>
        <UserButton />
    </SignedIn>
  );
}

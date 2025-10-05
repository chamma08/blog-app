import { SignUp } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center p-4 mt-4">
      <SignUp />
    </div>
  );
}

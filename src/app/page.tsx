import CtaButton from "@/components/CtaButton";
import MenuPopover from "@/components/MenuPopover";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center p-24 gap-24 justify-center">
      <CtaButton />
      <MenuPopover />
    </main>
  );
}

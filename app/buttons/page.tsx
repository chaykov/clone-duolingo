import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      {/* Default button */}
      <Button>Default</Button>

      {/* Primary buttons */}
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary Outline</Button>

      {/* Secondary buttons */}
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondaryOutline">Secondary Outline</Button>

      {/* Danger buttons */}
      <Button variant="danger">Secondary</Button>
      <Button variant="dangerOutline">Secondary Outline</Button>

      {/* Super buttons */}
      <Button variant="super">Super</Button>
      <Button variant="superOutline">Super Outline</Button>

      {/* Ghost button */}
      <Button variant="ghost">Ghost</Button>

      {/* Sidebar buttons */}
      <Button variant="sidebar">Sidebar</Button>
      <Button variant="sidebarOutline">Sidebar Outline</Button>
    </div>
  );
};

export default ButtonsPage;

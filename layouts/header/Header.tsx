import { Nav } from "./nav/Nav";
import Image from "next/image";
import { UserBox } from "./userBox/UserBox";
import { ProfileHeader } from "../profile/header/ProfileHeader";
import { DropDialog } from "../DropDialog";
import { useUserStore } from "../../stores/userStore";

export const Header = () => {
  const { isEdit } = useUserStore();
  return (
    <div className="fixed top:0 w-full z-10">
      <header className=" bg-black flex gap-6 gap-12 p-3 pr-6 pl-6 lg:pr-12 lg:gap-12 lg:pl-12 bg-black ">
        <Image
          src="/assets/afirmo-logo.png"
          width="140"
          height="36"
          className="min-w-[140px] max-h-[36px]"
          alt="Afirmo Logo"
        />
        <Nav />
        <UserBox />
      </header>
      <ProfileHeader />
      {isEdit && <DropDialog />}
    </div>
  );
};

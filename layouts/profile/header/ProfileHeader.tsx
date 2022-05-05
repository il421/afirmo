import { ProfileProgress } from "./ProfileProgress";
import { ProfileDescription } from "./ProfileDescription";

export const ProfileHeader = () => {
  return (
    <div className="bg-blue border-b border-b-black">
      <ProfileProgress />
      <ProfileDescription />
    </div>
  );
};

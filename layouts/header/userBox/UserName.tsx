import { BsChevronDown } from "react-icons/bs";
import { useUserStore } from "../../../stores/userStore";
import { useEffect } from "react";
import { Fallback } from "../../../ui-components/Fallback";

export const UserName = () => {
  const { getUser, loading, user, error } = useUserStore();
  useEffect(() => {
    getUser("1");
  }, [getUser]);

  return (
    <Fallback error={error} loading={loading}>
      <button className="text-white font-semibold text-xs items-center gap-1.5 hidden lg:flex">
        <span>{user?.name}</span>
        <BsChevronDown className="text-white" />
      </button>
    </Fallback>
  );
};

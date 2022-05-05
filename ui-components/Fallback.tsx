import { FunctionComponent, PropsWithChildren } from "react";
import { AxiosError } from "axios";
import { SpinnerCircularFixed } from "spinners-react";

interface FallbackProps {
  loading: boolean | undefined;
  error: AxiosError | undefined;
  color?: string;
}

const DEFAULT_COLOR = "#1d7be7";
export const Fallback: FunctionComponent<PropsWithChildren<FallbackProps>> = ({
  loading,
  error,
  children,
  color = DEFAULT_COLOR
}) => {
  if (loading) {
    return (
      <SpinnerCircularFixed
        size={24}
        color={color}
        secondaryColor={"white"}
        thickness={150}
      />
    );
  }

  if (error) {
    return (
      <div className="h-fit w-fit text-white bg-red p-0.5 text-sm">
        {error.message}
      </div>
    );
  }
  if (!loading && !error) return <>{children}</>;
  return null;
};

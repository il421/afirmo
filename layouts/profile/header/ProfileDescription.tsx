import Image from "next/image";
import { ArrowButton } from "../../../ui-components/buttons/ArrowButton";
import { useRouter } from "next/router";

export const ProfileDescription = () => {
  const { push } = useRouter();

  return (
    <aside className="flex justify-between items-start p-4 hidden lg:flex">
      <div className="flex gap-10">
        {/* @TODO BOX SHADOW  */}
        <div className="bg-white border border-1 rounded-md p-3">
          <Image src="/assets/small_screen.png" width={80} height={40} />
        </div>
        <div className="flex flex-col">
          <h1 className="pb-2 text-2xl font-bold text-white capitalize">
            Your business profile
          </h1>
          <span className="text-sm text-white opacity-70">
            Make your business real with a logo, a web page and business card.
          </span>
          <span className="text-sm text-white opacity-70">
            Then let us know your set-up the basic for Goggle and social media.
          </span>
        </div>
      </div>

      <div className="flex gap-12">
        <div className="flex flex-col max-w-[220px]">
          <span className="text-xs uppercase font-bold">
            Your next best solution
          </span>
          <span className="text-sm text-white font-light">
            Put your website live with one final step.
          </span>
        </div>
        <ArrowButton size={46} onClick={() => push("/marketing")} />
      </div>
    </aside>
  );
};

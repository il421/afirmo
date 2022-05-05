import { FunctionComponent, useState } from "react";
import { ActionButton } from "../../../../ui-components/buttons/ActionButton";
import { useDialogsStore } from "../../../../stores/useDialogsStore";
import { useCompanyStore } from "../../../../stores/useCompanyStore";

export const IrdForm: FunctionComponent = () => {
  const { updateCompany, company } = useCompanyStore();
  const { setDialogKey } = useDialogsStore();
  const [ird, setIrd] = useState<string>(company?.dto.ird ?? "");

  return (
    <form className="flex flex-col justify-between h-[100%]">
      <span className="text-white text-lg opacity-100">Add ACC number</span>
      <div className="flex flex-col gap-4 w-[235px]">
        <input
          type="text"
          value={ird}
          placeholder="IRD"
          onChange={e => setIrd(e.target.value)}
          className="pl-3"
        />
      </div>
      <div className="flex gap-4">
        <ActionButton
          text="add"
          onClick={async () => {
            await updateCompany(company!.id, { ird });
            setDialogKey(undefined);
          }}
        />
        <ActionButton text="cancel" onClick={() => setDialogKey(undefined)} />
      </div>
    </form>
  );
};

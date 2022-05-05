import { FunctionComponent, useState } from "react";
import { ActionButton } from "../../../../ui-components/buttons/ActionButton";
import { useDialogsStore } from "../../../../stores/useDialogsStore";
import { useCompanyStore } from "../../../../stores/useCompanyStore";

export const GstForm: FunctionComponent = () => {
  const { updateCompany, company } = useCompanyStore();
  const { setDialogKey } = useDialogsStore();
  const [gst, setGst] = useState<string>(company?.dto.gst ?? "");

  return (
    <form className="flex flex-col justify-between h-[100%]">
      <span className="text-white text-lg opacity-100">Add GST number</span>
      <div className="flex flex-col gap-4 w-[235px]">
        <input
          type="text"
          value={gst}
          placeholder="GST"
          onChange={e => setGst(e.target.value)}
          className="pl-3"
        />
      </div>
      <div className="flex gap-4">
        <ActionButton
          text="add"
          onClick={async () => {
            await updateCompany(company!.id, { gst });
            setDialogKey(undefined);
          }}
        />
        <ActionButton text="cancel" onClick={() => setDialogKey(undefined)} />
      </div>
    </form>
  );
};

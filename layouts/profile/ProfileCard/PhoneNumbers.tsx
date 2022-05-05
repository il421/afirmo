import { FunctionComponent } from "react";

interface PhoneNumbersProps {
  phoneNumbers: string[];
}
export const PhoneNumbers: FunctionComponent<PhoneNumbersProps> = ({
  phoneNumbers
}) => {
  return (
    <ul className="flex flex-col">
      {phoneNumbers.map(i => (
        <li className="text-white font-bold" key={i}>
          {i}
        </li>
      ))}
    </ul>
  );
};

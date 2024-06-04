import { GearIcon, InfoCircledIcon } from '@radix-ui/react-icons';

export default function InfoBar() {
  return (
    <div className="flex justify-end py-2 border-b ">
      <InfoCircledIcon className="mx-2" />
      <GearIcon className="mx-2" />
    </div>
  );
}

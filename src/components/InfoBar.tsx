import { GearIcon, InfoCircledIcon } from '@radix-ui/react-icons';

export default function InfoBar() {
  return (
    <div>
      <div className="flex justify-end py-2 border-b ">
        <InfoCircledIcon className="mx-2" />
        <GearIcon className="mx-2" />
      </div>
      <h1 className='pt-4'>Create four groups of four!</h1>
    </div>
  );
}

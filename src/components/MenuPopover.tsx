"use client";
import Popover from "../components/Popover";
import User from "../components/User";
import ToggleSwitch from "../components/ToggleSwitch";
import {
  CaretDown,
  DeviceMobile,
  Gear,
  Headset,
  Lightning,
  PictureInPicture,
  Plus,
  Stack,
  Star,
} from "@phosphor-icons/react";
import Button from "../components/Button";

export default function MenuPopover() {
  return (
    <Popover
      content={
        <ul className="text-gray-700 flex flex-col [&_li]:cursor-pointer [&_*]:transition-all [&_*]:duration-100">
          <div className="flex flex-col gap-3 p-3">
            <li className="flex flex-row gap-1 items-center justify-between">
              <div className="flex flex-row gap-1 items-center">
                <User />
                <span>Ramtin</span>
              </div>
              <ToggleSwitch />
            </li>
            <li className="flex flex-row gap-1 items-center justify-between">
              <div className="flex flex-row gap-1 items-center">
                <User />
                <span>Ramtin</span>
              </div>
              <ToggleSwitch />
            </li>
            <li>
              <Button
                className="font-bold w-full justify-center justify-content-center"
                size="small"
              >
                <Plus size={16} className="mr-2" />
                New team
              </Button>
            </li>
          </div>
          <li className="border-b border-t border-[#E5E5E5] p-3 cursor-pointer hover:text-gray-400">
            <div className="flex flex-row gap-1 items-center">
              <Gear size={20} className="mx-1.5" />
              <span>Invite friends</span>
            </div>
          </li>
          <div className="flex flex-col gap-3 p-3">
            <Item
              icon={<Stack size={20} className="mx-1.5" />}
              text="Integrations"
            />
            <Item
              icon={<Gear size={20} className="mx-1.5" />}
              text="Settings"
            />
          </div>
          <li className="border-b border-t border-[#E5E5E5] p-3">
            <div className="flex flex-row gap-1 items-center text-[#FF6B46] hover:text-[#ff6b46b1]">
              <Lightning weight="fill" size={20} className="mx-1.5" />
              <span>Upgrade to Pro</span>
            </div>
          </li>
          <div className="flex flex-col gap-3 p-3">
            <Item
              icon={<DeviceMobile size={20} className="mx-1.5" />}
              text="Mobile apps"
            />
            <Item icon={<Star size={20} className="mx-1.5" />} text="Updates" />
            <Item
              icon={<Headset size={20} className="mx-1.5" />}
              text="Support"
            />
          </div>
        </ul>
      }
    >
      <div className="flex flex-row bg-[#E5E5E5] p-0.5 rounded-full items-center transition-all hover:shadow-md hover:opacity-90">
        <User />
        <User className="-ml-2" />
        <CaretDown size={12} className="mx-2" />
      </div>
    </Popover>
  );
}

function Item({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li>
      <div className="flex flex-row gap-1 items-center hover:text-gray-400">
        {icon}
        <span>{text}</span>
      </div>
    </li>
  );
}

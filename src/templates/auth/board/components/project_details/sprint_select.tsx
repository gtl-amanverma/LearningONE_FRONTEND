import { TSprintType } from "@/types/board_type";
import { IconSignRight } from "@tabler/icons-react";
import { ChevronsUpDown } from "lucide-react";
import React, { useEffect, useState } from "react";

type props = {
  items: Array<TSprintType>;
  selectedSprint?: TSprintType | null;
  onClick?: (data: TSprintType) => void;
};

const isTodayInSprint = (sprint: TSprintType): boolean => {
  const today = new Date();
  const startDate = new Date(sprint.sprintStartDate);
  const endDate = new Date(sprint.sprintEndDate);

  // Normalize time to compare only date part
  today.setHours(0, 0, 0, 0);
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);

  return today >= startDate && today <= endDate;
};

const SelectSprint = ({ ...props }: props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentSprint, setCurrentSprint] = useState<TSprintType | null>(null);

  useEffect(() => {
    const matchedSprint =
      props.items && props.items.find((sprint) => isTodayInSprint(sprint));
    if (matchedSprint) {
      setCurrentSprint(matchedSprint);
    } else {
      setCurrentSprint(null); // in case no sprint matches
    }
  }, [props.items]);

  return (
    <>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="min-w-64 bg-gray-600 p-2 text-xs rounded-lg cursor-pointer flex items-center justify-between select-none"
      >
        <p className="text-gray-400">{currentSprint?.sprintName}</p>
        <ChevronsUpDown className="w-5 h-5 text-gray-400" />
      </div>
      {open && (
        <div className="absolute right-[27.2rem] top-60 min-w-64 h-64 bg-gray-600 rounded-lg overflow-auto scrollbar-hide p-2 py-4">
          {props.items.map((item, index) => {
            const isCurrentSprint = isTodayInSprint(item as TSprintType);
            const isSelected =
              JSON.stringify(props.selectedSprint as TSprintType) ===
              JSON.stringify(item as TSprintType);

            const anySprintSelected = !!props.selectedSprint;
            return (
              <div
                key={index}
                className="border-b border-gray-500 cursor-pointer flex items-center justify-between gap-2 select-none"
                onClick={() => props.onClick!(item)}
              >
                <div className="flex items-center justify-start gap-2">
                  {isCurrentSprint && (
                    <span>
                      <IconSignRight />
                    </span>
                  )}
                  <span>{item.sprintName}</span>
                </div>
                {(isSelected || (!anySprintSelected && isCurrentSprint)) && (
                  <div>✓</div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SelectSprint;

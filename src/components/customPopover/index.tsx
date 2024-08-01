import { Title, Text, Button, Popover } from "rizzui";
import { useState } from "react";
import { Placement } from "@floating-ui/react";

type CustomPopoverProps = {
  title: string;
  description: string;
  onDelete: () => void;
  isHoverEnable?: boolean;
  children: React.ReactNode;
  button1Text: string;
  button2Text?: string;
  placement?: Placement;
};

export default function CustomPopover({
  title,
  description,
  onDelete,
  isHoverEnable = false,
  children,
  button1Text,
  button2Text,
  placement = "left",
}: CustomPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseLeave={(e) => {
        isHoverEnable && setIsOpen(false);
      }}
    >
      <Popover
        gap={0}
        placement={placement}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <Popover.Trigger>
          <div onMouseOver={() => isHoverEnable && setIsOpen(true)}>
            {children}
          </div>
        </Popover.Trigger>
        <Popover.Content className="z-10">
          {({ setOpen }) => (
            <div className="w-56 pb-2 pt-1 text-left rtl:text-right">
              <Title
                as="h6"
                className="mb-0.5 flex items-start text-sm text-gray-700 sm:items-center"
              >
                {title}
              </Title>
              <Text className="mb-2 leading-relaxed text-gray-500">
                {description}
              </Text>
              <div className="flex items-center justify-end">
                <Button
                  size="sm"
                  className="hover:bg-primaryHover me-1.5 h-7"
                  onClick={onDelete}
                >
                  {button1Text}
                </Button>
                {button2Text && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7"
                    onClick={() => setOpen(false)}
                  >
                    {button2Text}
                  </Button>
                )}
              </div>
            </div>
          )}
        </Popover.Content>
      </Popover>
    </div>
  );
}

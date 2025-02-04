import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "border-transparent data-[state=unchecked]:bg-gray-200 dark:focus-visible:ring-gray-300 dark:data-[state=checked]:bg-gray-900 dark:data-[state=unchecked]:bg-gray-800 peer inline-flex h-6 w-[3.2rem] shrink-0 cursor-pointer items-center rounded-[4px] border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-grey-light dark:focus-visible:ring-offset-black",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-[4px] bg-accent shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[1.70rem] data-[state=unchecked]:translate-x-[0.10rem] dark:bg-black",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };

"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
	<SliderPrimitive.Root
		ref={ref}
		className={cn(
			"relative flex w-full touch-none select-none items-center",
			className,
		)}
		{...props}
	>
		<SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-900/20 dark:bg-neutral-50/20">
			<SliderPrimitive.Range className="absolute h-full rounded-full bg-neutral-900 pr-2 dark:bg-neutral-50" />
			<div className="absolute top-0.5 flex w-full justify-between">
				{[...Array(6)].map((_, index) =>
					index === 0 || index === 5 ? (
						<div key={index} className="w-2" />
					) : (
						<div
							key={index}
							className="h-1 w-1 rounded-full bg-light-background-light dark:bg-dark-background-light"
						/>
					),
				)}
			</div>
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb className="z-20 block h-6 w-2 active:w-1 rounded-full bg-neutral-900 dark:bg-neutral-50 outline outline-4 outline-light-background-normal dark:outline-dark-background-normal focus-visible:ring-2 focus-visible:ring-light-background-normal dark:focus-visible:ring-dark-background-normal transition-all duration-150 disabled:pointer-events-none disabled:opacity-50" />
	</SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

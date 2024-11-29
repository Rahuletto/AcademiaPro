/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
"use client";
import { useData } from "@/provider/DataProvider";
import React, { useState } from "react";

export default function Debugger({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const data = useData();

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(
        "<pre>" + JSON.stringify(data, null, 2) + "</pre>",
      );
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setOpen(false);
        }
      }}
      className="absolute left-0 top-0 z-50 flex h-screen w-screen animate-fastfade items-center justify-center bg-black/50 backdrop-blur-md"
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative h-[80%] w-[95%] cursor-default rounded-3xl border-2 border-dashed border-light-warn-color bg-light-warn-background p-4 text-light-color lg:w-1/2 dark:border-dark-warn-color dark:bg-dark-warn-background dark:text-dark-color"
      >
        <h3 className="m-2 mt-0 text-xl font-semibold">RAW Data</h3>
        <p className="absolute bottom-3 left-4 z-50 text-xs font-semibold text-light-warn-color dark:text-dark-warn-color font-mono">Key: <code>{data.token || "************"}</code></p>
        <button
          onClick={handlePrint}
          className="absolute bottom-2 right-2 z-50 cursor-pointer rounded-xl bg-light-warn-color px-3 py-1 text-xs font-semibold text-light-warn-background transition-all duration-150 hover:px-4 hover:py-2 dark:bg-dark-warn-color dark:text-dark-warn-background"
        >
          Print
        </button>
        <pre className="h-full min-w-[350px] overflow-auto text-xs opacity-80 lg:text-sm">
          <JsonNode
            node={{
              user: data.user,
              attendance: data.attendance,
              marks: data.marks,
              timetable: data.timetable,
              courses: data.courses,
              error: data.error,
              requestedAt: data.requestedAt,
              lastUpdated: data.lastUpdated,
              isLoading: data.isLoading,
              isValidating: data.isValidating,
            }}
            level={0}
          />
        </pre>
      </div>
    </div>
  );
}

const JsonNode: React.FC<{ node: any; level: number }> = ({ node, level }) => {
  return (
    <div className={`ml-2 border-l-${level} border-gray-600`}>
      {typeof node === "object" && node !== null ? (
        Object.entries(node).map(([key, value]) => (
          <CollapsibleNode
            key={key}
            label={key}
            value={value}
            level={level + 1}
          />
        ))
      ) : (
        <span>{JSON.stringify(node)}</span>
      )}
    </div>
  );
};

const CollapsibleNode: React.FC<{
  label: string;
  value: any;
  level: number;
}> = ({ label, value, level }) => {
  const [collapsed, setCollapsed] = useState(true);
  const isExpandable = typeof value === "object" && value !== null;
  const toggleCollapse = () => isExpandable && setCollapsed(!collapsed);
  const preview = Array.isArray(value)
    ? `[Array(${value.length})]`
    : typeof value === "object"
      ? `{...}`
      : JSON.stringify(value);

  return (
    <div className={`mb-1 pl-2`} style={{ paddingLeft: `${level * 10}px` }}>
      {isExpandable && (
        <span
          onClick={toggleCollapse}
          className="cursor-pointer font-bold text-light-warn-color dark:text-dark-warn-color"
        >
          {collapsed ? "+" : "-"}
        </span>
      )}{" "}
      <span className="text-light-color dark:text-dark-color">{label}: </span>
      <span className="text-light-color dark:text-dark-color">{preview}</span>
      {!collapsed && isExpandable && (
        <div className="ml-4 text-light-color dark:text-dark-color">
          {Array.isArray(value) ? (
            value.map((item, index) => (
              <CollapsibleArrayItem
                key={index}
                index={index}
                item={item}
                level={level + 1}
              />
            ))
          ) : (
            <pre>{JSON.stringify(value, null, 2)}</pre>
          )}
        </div>
      )}
    </div>
  );
};

const CollapsibleArrayItem: React.FC<{
  index: number;
  item: any;
  level: number;
}> = ({ index, item, level }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapse = () => setCollapsed(!collapsed);
  const preview = typeof item === "object" ? `{...}` : JSON.stringify(item);

  return (
    <div className={`mb-1 pl-2`} style={{ paddingLeft: `${level * 10}px` }}>
      <span
        onClick={toggleCollapse}
        className="cursor-pointer font-bold text-light-warn-color dark:text-dark-warn-color"
      >
        {collapsed ? "+" : "-"}
      </span>{" "}
      <span className="text-light-color dark:text-dark-color">[{index}]:</span>{" "}
      <span className="text-light-color dark:text-dark-color">{preview}</span>
      {!collapsed && (
        <div className="ml-4 text-light-color dark:text-dark-color">
          <pre>{JSON.stringify(item, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

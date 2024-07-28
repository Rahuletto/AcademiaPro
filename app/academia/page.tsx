'use client'
import { Sidebar } from "../../components/Sidebar";
import Timetable from "./components/Timetable";
import Marks from "./components/Marks";

export default function Academia() {
    return (
      <div className="h-screen w-full bg-light-background-normal text-light-color dark:bg-dark-background-normal dark:text-dark-color">
        <Sidebar>
          <div className="flex flex-col gap-12">
            <Timetable />
            <Marks />
          </div>
        </Sidebar>
      </div>
    );
}

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HCards from "./Cards/HCards.jsx";
import SectionTitle from "../Reuse/SectionTitle.jsx";
import {useEffect, useState} from "react";

export default function HProductTab() {

     return (
    <Tabs className="sm:mt-0 mt-14">
      <div className="flex items-center sm:justify-between justify-center flex-wrap my-8">
        <SectionTitle title="Sản phẩm hot" />
        <TabList className="flex overflow-auto">
          <Tab className="px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
            All
          </Tab>
          <Tab className="px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
            Nam
          </Tab>
          <Tab className="px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
            Nữ
          </Tab>
          <Tab className="px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
            Unisex
          </Tab>
          <Tab className="px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
            Trẻ em
          </Tab>
        </TabList>
      </div>
      <TabPanel>
          <HCards tag = "" />
      </TabPanel>

      <TabPanel>
          <HCards tag = "men" />
      </TabPanel>

      <TabPanel>
          <HCards tag = "women" />
      </TabPanel>

      <TabPanel>
          <HCards tag = "unisex" />
      </TabPanel>

      <TabPanel>
        <HCards tag = "kid" />
      </TabPanel>
    </Tabs>
  );
}

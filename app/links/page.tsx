"use client";

import React from "react";
import { urls, priorityUrl } from "./links";
import { Sidebar } from "@/components/Sidebar";

function Urls() {
    return (
        <Sidebar>
        <div className="content" style={{color:"white"}}>
        <input
            type="text"
            placeholder="Search"
            className="searchbtn"
            style={{ color: "white" }}
        />
        <div>
            <h2>Websites</h2>
            <h2>URLs</h2>
        </div>
        <div className="priority_links">
            {priorityUrl.map((url,i) => (
            <div key={i}>
                <span>{url.site}</span>
                <a href={url.url}>{url.url}</a>
            </div>
            ))}
        </div>
        {urls.filter((url)=>url.type==="official").length>0?(
            <div className="offcial_links">
                <h3>Official Sites</h3>
                {
                    urls.filter(url=>url.type==="official")
                    .map((url,i)=>(
                        <div key={i}>
                            <span>{url.site}</span>
                            <a href={url.url}>{url.url}</a>
                        </div>
                    )
                    )
                }
            </div>
        ):null
    }
        </div>
        </Sidebar>
    );
}

export default Urls;

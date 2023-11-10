import React, { useState } from "react";
import List from "./List";
import Items from "./items";
import { projects } from "../../Data";
import "./portfolio.css";
import { AnimatePresence } from "framer-motion";
import shapeOne from "../../assets/shape-1.png";

const allNavList = ['all',
...new Set(projects.map((project) => project.category)),];

function Portfolio(){
    const [projectItems, setMenuItems] = useState(projects);
    const [navList, setCategories] = useState(allNavList);

    const filterItems = (category) => {
        if (category === 'all'){
            setMenuItems(projects);
            return;
        }

        const newProjectItems = projects.filter((item) => item.category === category);

        setMenuItems(newProjectItems)
    }

    return (
        <section className="portfolio section" id="work">
            <h2 className="section_title text-cs">Portfolio</h2>
            <p className="section_subtitle">
                My <span>Works</span>
            </p>

            <List list={navList} filterItems={filterItems} />

            <div className="portfolio_container container grid">
                <AnimatePresence initial={false} >
                <Items projectItems ={projectItems} />
                </AnimatePresence>
                
            </div>

            <div className="section_deco deco_right">
                <img src={shapeOne} alt="" className="shape"/>
            </div>

            <div className="section_bg-wrapper">
                <span className="bg_title">Portfolio</span>
            </div>
        </section>
    )
}
export default Portfolio;
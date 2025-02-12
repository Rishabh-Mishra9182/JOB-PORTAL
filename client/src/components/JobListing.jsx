import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, setIsSearched, jobs } =
    useContext(AppContext);
  const [showFilter, setShowFilter] = useState(true);
  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* Side Bar*/}
      <div className="w-full  lg:w-1/4 bg-white px-4">
        {/* Search Filter from hero component */}
        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-medium text-lg mb-4">Current Search</h3>
              <div className="mb-4 text-gray-600 ">
                {searchFilter.title && (
                  <span className="inline-flex items-center gap-2.5 bg-blue-100 border border-blue-200 px-4 py-1.5 rounded">
                    {searchFilter.title}
                    <img
                      src={assets.cross_icon}
                      onClick={(e) =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      alt=""
                      className="cursor-pointer"
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="ml-2 inline-flex items-center gap-2.5 bg-red-100 border border-red-200 px-4 py-1.5 rounded">
                    {searchFilter.location}
                    <img
                      src={assets.cross_icon}
                      onClick={(e) =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      alt=""
                      className="cursor-pointer"
                    />
                  </span>
                )}
              </div>
            </>
          )}
        {/* Filter Button */}
        <button
          onClick={(e) => setShowFilter((prev) => !prev)}
          className="px-6 py-1.5 rounded border border-gray-400 lg:hidden"
        >
          {showFilter ? "Close" : "Filters"}
        </button>
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4">Search By Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li key={index} className="flex gap-3 items-center">
                <input type="checkbox" name="" id="" className="scale-125" />
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4 pt-10">Search By Location</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li key={index} className="flex gap-3 items-center">
                <input type="checkbox" name="" id="" className="scale-125" />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Job Listing */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2" id="job-list">
          Latest Jobs
        </h3>
        <p className="mb-8">Get your desired jobs from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobListing;

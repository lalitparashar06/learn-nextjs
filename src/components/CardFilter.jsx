import React, { useEffect, useRef, useState } from "react";
import Button from "../../button/Button";
import Image from "next/image";
import styles from "../../../styles/CardFilter.module.css";
import { RESOURCE_FILTER_QUERY } from "../../../graphql/ResourceFilterQuery";
import { getAuthCredentials } from "../../../lib/WordPressClient";
import { useQuery } from "@apollo/client";

export default function App() {
  const [data2, setData2] = useState([]);
  const CardFilter = useRef(null);

  const credentials = getAuthCredentials();

  const { loading, error, data } = useQuery(RESOURCE_FILTER_QUERY, {
    fetchPolicy: "cache-and-network",
    context: {
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    },
  });
  // console.log(data);

  useEffect(() => {
    if (data && data?.resources) {
      // Set the fetched data to state
      const mainData = data?.resources?.edges.map((item) => {
        let imgPath = item?.node?.featuredImage?.node?.sourceUrl;
        let altText = item?.node?.featuredImage?.node?.altText;
        let blurb = item?.node?.resources?.blurb;
        let date = item?.node?.resources?.date;
        let title = item?.node?.title;
        let link = item?.node?.resources?.link;
        let topic = item?.node?.topics?.edges
          .filter((topic) => topic.isPrimary)
          .map((topic) => topic?.node?.name);
        let topicArray = item?.node?.topics?.edges.map(
          (topic) => topic?.node?.name
        );
        let industry = item?.node?.industries?.edges
          .filter((industry) => industry.isPrimary)
          .map((industry) => industry?.node?.name);
        let industryArray = item?.node?.industries?.edges.map(
          (industry) => industry?.node?.name
        );
        return {
          imgPath,
          altText,
          blurb,
          date,
          title,
          topic,
          link,
          topicArray,
          industry,
          industryArray,
        };
      });
      // console.log(mainData);
      setData2(mainData);
    }
  }, [data]);

  const [searchValue, setSearchValue] = useState("");
  const [showError, setShowError] = useState(false);
  const inputRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [openTopic, setOpenTopic] = useState(false);
  const [openIndustry, setOpenIndustry] = useState(false);

  const topicListUnique = [...new Set(data2.map((list) => list.topic[0]))];

  const industryListUnique = [
    ...new Set(data2.map((list) => list.industry[0])),
  ];

  //Change Value by Getting from URL
  useEffect(function () {
    if (window !== undefined) {
      const url = window.location.href + "/";
      function extractData(url) {
        if (!url.includes("?")) return false;

        let data = url.split("?")[1];

        let arr = data.split("&");
        arr.pop();

        let map = {};
        for (let a of arr) {
          map[a.split("=")[0]] = a.split("=")[1].split(",");
        }
        return map;
      }
      const map = extractData(url);

      if (map) {
        if (map?.topic) {
          map.topic = map.topic.map((topic) => topic.replace(/\+/g, " "));
          setTopicList(map.topic);
          setFiltersWorlds((prev) => [...prev, ...map.topic]);
        }
        if (map?.industry) {
          map.industry = map.industry.map((industry) =>
            industry.replace(/\+/g, " ")
          );
          setIndustryList(map.industry);
          setFiltersWorlds((prev) => [...prev, ...map.industry]);
        }
        if (map?.search) {
          setSearchValue(map.search[0]);
        }
        // if (map?.page) {
        // 	setCurrentPage(+map?.page[0]);
        // }
      }
    }
  }, []);

  // Search Input functionallity
  useEffect(function () {
    const handleKeydown = (event) => {
      if (event.key === "Enter") {
        if (!searchValue || searchValue === "") {
          setShowError(true);
          return;
        }
        setShowError(false);
      }
      if (searchValue) {
        setShowError(false);
      }
    };

    // Check if inputRef.current is set
    if (inputRef.current) {
      inputRef.current.addEventListener("keydown", handleKeydown);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("keydown", handleKeydown);
      }
    };
  });

  //For dropdown functionallity
  useEffect(
    function () {
      const ulTopic = document.querySelector(".CardFilter .topic");
      const topicLiCount = document.querySelectorAll(
        ".CardFilter .topic .item"
      );
      const industryLiCount = document.querySelectorAll(
        ".CardFilter .industry .item"
      );
      const liHeight = document
        .querySelector(".CardFilter .industry .item")
        .getBoundingClientRect().height;

      const industry = document.querySelector(".CardFilter .industry");
      if (ulTopic) {
        if (openTopic) {
          ulTopic.style.maxHeight = `${topicLiCount.length * liHeight}px`;
          ulTopic.style.paddingTop = "15px";
        } else {
          ulTopic.style.overflow = "hidden";
          ulTopic.style.maxHeight = "0px";
          ulTopic.style.paddingTop = "0px";
        }
      }
      if (industry) {
        if (openIndustry) {
          industry.style.maxHeight = `${industryLiCount.length * liHeight}px`;
          industry.style.paddingTop = "15px";
        } else {
          industry.style.overflow = "hidden";
          industry.style.maxHeight = "0px";
          industry.style.paddingTop = "0px";
        }
      }
    },
    [openTopic, openIndustry]
  );

  //Closing Menu when Clicking Out of the box
  const topicListRef = useRef();
  const industryListRef = useRef();
  useEffect(function () {
    function handleClick(e) {
      if (!topicListRef.current.contains(e.target)) {
        setOpenTopic(false);
      }
      if (!industryListRef.current.contains(e.target)) {
        setOpenIndustry(false);
      }
    }

    document.addEventListener("click", handleClick);

    return function () {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  //For Filter functionallity
  const [topicList, setTopicList] = useState([]);
  const [industryList, setIndustryList] = useState([]);
  const [filtersWorlds, setFiltersWorlds] = useState([]);

  let showDataMain = [];
  let showDataMain2 = [];
  // Filter functionallity Logic
  if (topicList.length === 0 && industryList.length === 0) {
    showDataMain2 = data2;
  } else {
    if (topicList.length !== 0) {
      topicList.forEach((topic) => {
        showDataMain = [
          ...showDataMain,
          // ...data2.filter((da) => da.topic === topic),
          ...data2.filter((da) => da.topicArray.includes(topic)),
        ];
      });
    } else {
      showDataMain = data2;
    }
    if (industryList.length !== 0) {
      industryList.forEach((industry) => {
        showDataMain2 = [
          ...showDataMain2,
          // ...showDataMain.filter((da) => da.industry === industry),
          ...showDataMain.filter((da) => da.industryArray.includes(industry)),
        ];
      });
    } else {
      showDataMain2 = showDataMain;
    }
  }
  //change search value
  function handleSearch(e) {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  }

  // For search filter
  if (searchValue) {
    showDataMain2 = showDataMain2.filter((item) =>
      item.title.includes(searchValue)
    );
  }

  function handleClearAll() {
    setSearchValue("");
    setCurrentPage(1);
    setTopicList([]);
    setIndustryList([]);
    setFiltersWorlds([]);
  }

  function handleClearWord(word) {
    setTopicList((prevList) => prevList.filter((top) => top !== word));
    setIndustryList((prevList) => prevList.filter((top) => top !== word));
    setFiltersWorlds((prevList) => prevList.filter((top) => top !== word));
  }

  function handleClearSubList(word) {
    setTopicList((prev) => prev.filter((item) => item !== word));
    setIndustryList((prev) => prev.filter((item) => item !== word));
    setFiltersWorlds((prev) => prev.filter((item) => item !== word));
    setCurrentPage(1);
  }

  function handleTopic(topic) {
    if (topicList.includes(topic)) {
      handleClearWord(topic);
      return;
    }
    if (topic === "allTopic") {
      setTopicList(topicListUnique);
      setFiltersWorlds([...topicListUnique, ...industryList]);
      setCurrentPage(1);
      return;
    }
    setTopicList((prev) => [...prev, topic]);
    setFiltersWorlds((prev) => [...prev, topic]);
    setCurrentPage(1);
  }

  function handleIndustry(industry) {
    if (industryList.includes(industry)) {
      handleClearWord(industry);
      return;
    }
    if (industry === "allIndustry") {
      setIndustryList(industryListUnique);
      setFiltersWorlds([...industryListUnique, ...topicList]);
      setCurrentPage(1);
      return;
    }
    setIndustryList((prev) => [...prev, industry]);
    setFiltersWorlds((prev) => [...prev, industry]);
    setCurrentPage(1);
  }

  //Pagination Code
  const postPerPage = 12;
  const totalPage = Math.ceil(showDataMain2.length / postPerPage);
  const totalPost = showDataMain2.length;

  showDataMain2 =
    currentPage === 1
      ? showDataMain2.slice(0, currentPage * postPerPage)
      : showDataMain2.slice(
          (currentPage - 1) * postPerPage,
          (currentPage - 1) * postPerPage + postPerPage
        );

  const startNum = currentPage === 1 ? 1 : (currentPage - 1) * postPerPage + 1;
  const lastNum =
    currentPage === 1
      ? showDataMain2.length < postPerPage
        ? showDataMain2.length
        : postPerPage
      : (currentPage - 1) * postPerPage + showDataMain2.length;

  //Prev Button
  function handlePrev() {
    if (currentPage === 1) {
      return;
    } else {
      setCurrentPage((p) => p - 1);
      window.scrollTo({
        top: CardFilter.current.offsetTop,
        behavior: "smooth",
      });
    }
  }

  //Next Button
  function handleNext() {
    if (currentPage === totalPage) {
      return;
    } else {
      setCurrentPage((p) => p + 1);
      window.scrollTo({
        top: CardFilter.current.offsetTop,
        behavior: "smooth",
      });
    }
  }

  //Change the URL according to SearchValues & Filter
  useEffect(
    function () {
      if (window !== undefined) {
        const parsedUrl = new URL(window.location.href);
        let url = `${parsedUrl.origin}${parsedUrl.pathname}`;

        let topicNames = topicList.join(",");
        let industryNames = industryList.join(",");

        if (filtersWorlds.length > 0 || searchValue || currentPage !== 1) {
          url += "?";
        }
        if (searchValue !== "") {
          const searchString = new URLSearchParams({
            search: searchValue,
          }).toString();
          url += searchString + "&";
        }
        if (topicList.length > 0) {
          const topicString = new URLSearchParams({
            topic: topicNames,
          }).toString();
          url += topicString + "&";
        }
        if (industryList.length > 0) {
          const industryString = new URLSearchParams({
            industry: industryNames,
          }).toString();
          url += industryString + "&";
        }
        // if (currentPage !== 1) {
        // 	const page = new URLSearchParams({
        // 		page: currentPage,
        // 	}).toString();
        // 	url += page + '&';
        // }

        window.history.pushState({ path: url }, "", decodeURIComponent(url));
      }
    },
    // [searchValue, topicList, industryList, currentPage],
    [searchValue, topicList, industryList]
  );

  function scrollToTop() {
    const headerHeight = document
      .querySelector("header")
      .getBoundingClientRect().height;
    window.scrollTo({
      top: CardFilter.current.offsetTop - headerHeight,
      behavior: "smooth",
    });
  }

  return (
    <>
      <section
        className={`CardFilter padding-medium-top ${styles.CardFilter} pb-[93px]`}
        ref={CardFilter}
      >
        <div className="container">
          <div className="outer-wrap flex justify-between ipad:block relative items-center">
            <div className="filter-wrap flex w1/2 sm:block">
              <h6 className="pr-4 font-bold">Filter by:</h6>
              <div
                className={`nav-wrapper relative border-b-[1px] pb-[4px] border-[#E3E3E3] mr-[24px] sm:mr-0 ${styles.NavWrapper}`}
                ref={topicListRef}
              >
                <div
                  className={`table-title relative w-[207px] sm:w-full cursor-pointer ${
                    styles.tableTitle
                  } ${openTopic && styles.tableActive}`}
                  onClick={() => setOpenTopic((p) => !p)}
                >
                  <p className="">Topic</p>
                  {/* pl-[6px] pt-[2px] */}
                </div>
                <ul className={`list topic ${styles.list} z-50`}>
                  <li className={`item ${styles.item}`}>
                    <input
                      className="item"
                      type="checkbox"
                      name="termslug"
                      checked={
                        topicList.length === topicListUnique.length
                          ? true
                          : false
                      }
                      value={"allTopic"}
                      id={"allTopic"}
                      aria-label={"all"}
                      readOnly
                    />
                    <label
                      className="cursor-pointer"
                      htmlFor={"allTopic"}
                      onClick={() => handleTopic("allTopic")}
                      style={{
                        color:
                          topicList.length === topicListUnique.length
                            ? "#72CC98"
                            : "black",
                      }}
                    >
                      All
                    </label>
                  </li>
                  {topicListUnique.map((topic, index) => (
                    <li className={`item ${styles.item}`} key={index}>
                      <input
                        className="item"
                        type="checkbox"
                        name="termslug"
                        checked={topicList.includes(topic) ? true : false}
                        value={topic}
                        id={topic}
                        aria-label={topic}
                        readOnly
                      />
                      <label
                        className="cursor-pointer"
                        htmlFor={topic}
                        onClick={() => handleTopic(topic)}
                        style={{
                          color: topicList.includes(topic)
                            ? "#72CC98"
                            : "black",
                        }}
                      >
                        {topic}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`nav-wrapper border-b-[1px] pb-[4px] border-[#E3E3E3] ${styles.NavWrapper}`}
                ref={industryListRef}
              >
                <div
                  className={`table-title relative w-[207px] sm:w-full cursor-pointer ${
                    styles.tableTitle
                  } ${openIndustry && styles.tableActive}`}
                  onClick={() => setOpenIndustry((p) => !p)}
                >
                  <p>Industry</p>
                </div>
                <ul className={`list industry ${styles.list} z-50 `}>
                  <li className={`item ${styles.item}`}>
                    <input
                      className="item"
                      type="checkbox"
                      name="termslug"
                      checked={
                        industryList.length === industryListUnique.length
                          ? true
                          : false
                      }
                      value={"allIndustry"}
                      id={"allIndustry"}
                      aria-label={"all"}
                      readOnly
                    />
                    <label
                      className="cursor-pointer"
                      htmlFor={"allIndustry"}
                      onClick={() => handleIndustry("allIndustry")}
                      style={{
                        color:
                          industryList.length === industryListUnique.length
                            ? "#72CC98"
                            : "black",
                      }}
                    >
                      All
                    </label>
                  </li>
                  {industryListUnique.map((industry, index) => (
                    <li
                      className={`item ${styles.item} cursor-pointer`}
                      key={index}
                    >
                      <input
                        className="filter-item"
                        type="checkbox"
                        name="tag"
                        checked={industryList.includes(industry) ? true : false}
                        value={industry}
                        id={industry}
                        aria-label={industry}
                        readOnly
                      />
                      <label
                        className="cursor-pointer"
                        htmlFor={industry}
                        onClick={() => handleIndustry(industry)}
                        style={{
                          color: industryList.includes(industry)
                            ? "#72CC98"
                            : "black",
                        }}
                      >
                        {industry}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className={`input-wrapper w1/2 relative ipad:mt-8 pt-[2px] ${styles.searchDiv}`}
            >
              <input
                className={`search Icon rounded-[30px] p-3 relative w-[437px] ipad:w-full sm:w-full border-[1px] border-darkblue ${styles.search}`}
                type="text"
                placeholder="Search"
                name="search"
                aria-label="search"
                value={searchValue}
                onChange={handleSearch}
                ref={inputRef}
              />
              {searchValue && (
                <div
                  className={`${styles.searchClear}`}
                  onClick={() => setSearchValue("")}
                ></div>
              )}
              {showError && <p className="error">Please enter the value</p>}
            </div>
          </div>
          <div className={`${styles.filter} sm:top-[50px]`}>
            {filtersWorlds.length > 0 &&
              filtersWorlds.map((word, index) => (
                <span
                  key={index}
                  className={`p-2 pr-6 m-2 first:ml-[0] border-[1px] inline-block relative border-lightGreen rounded-lg cursor-pointer ${styles.filterWord}`}
                  onClick={() => handleClearSubList(word)}
                >
                  {word}
                </span>
              ))}
          </div>
          <div
            className="filter-element-wrap flex justify-between mt-[56px] ipad:mt-6 laptopDown:mt-[30px]"
            style={{ justifyContent: showDataMain2.length === 0 && "end" }}
          >
            {showDataMain2.length === 0 || (
              <p>
                Showing <span className="first">{startNum}</span>-
                <span className="second">{lastNum}</span> results of{" "}
                <span className="total">{totalPost}</span>
              </p>
            )}
            {filtersWorlds.length > 0 && (
              <div
                className="clear-all cursor-pointer"
                onClick={handleClearAll}
              >
                Clear All
              </div>
            )}
          </div>
          <ul
            className={`cards ${styles.cards} !grid gap-x-[24px] gap-y-[8px] mt-[32px] grid-cols-3  laptopDown:mt-[30px] laptopDown:gap-[16px] sm:gap-[28px] xl-up:mt-[40px]`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {showDataMain2.map((item, index) => {
              const { imgPath, title, blurb, topic, date } = item;
              // console.log(item);
              return (
                <li
                  key={index}
                  className={`flex cursor-pointer relative ${styles.card} flex-col text group rounded-[30px] sm:rounded-[30px] overflow-hidden h-[610px] laptopDown:h-[453px] sm:h-[406px]`}
                >
                  <a
                    className={`${styles.emptyLink}`}
                    target="_blank"
                    href={item?.link?.url}
                  ></a>
                  <div className={`${styles.imgWrap} img-wrap  `}>
                    <Image
                      src={imgPath}
                      alt="title"
                      className={`${styles.cardImage} w-full h-full object-cover`}
                      width={400}
                      height={238}
                    />
                  </div>
                  <div
                    className={`text-wrap relative rounded-b-[3rem] bg-white ${styles.textWrap} py-[26px] px-[30px] xl-up:py-[22px] `}
                  >
                    <p className="p-small pb-[15px] t text-[#0077C8] !tracking-[5px] uppercase  laptopDown:pb-[6px]">
                      {topic} | {date}
                    </p>
                    <h6
                      className={`font-[500] ${styles.title} text-[22px] laptopDown:text-[20px]  text-lightBlack tracking-[0.1px] sm:text-[18px] xl-up:text-[24px]`}
                    >
                      {title}
                    </h6>
                    <p
                      className={`mb-[-15px] leading-[27px] tracking-[0.7px] text-[18px] ${styles.para} group-hover:rounded-lg  laptopDown:text-[16px] xxs:text-[14px]  `}
                    >
                      {blurb}
                    </p>
                  </div>
                  <div className={`absolute bottom-[29px] left-[30px]`}>
                    {item?.link?.linkText && (
                      <Button
                        buttonText={item?.link?.linkText}
                        target={item?.link?.target}
                        url={item?.link?.url}
                        buttonClass={"text-link-black text-!lightBlack "}
                      />
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="pagination-button size-full relative mt-[26px] midScreenUp:mb-[12px] midScreen:mb-[12px]">
            <div className="inner-wrapper">
              <ul
                id="pagination-container"
                className="light-theme simple-pagination flex flex-wrap items-center relative size-full list-none justify-center"
              >
                {totalPage > 1 && (
                  <li
                    className={`disabled pl-[6px] pr-[6px] ${
                      currentPage === 1 ? "cursor-none" : "cursor-pointer"
                    }`}
                    onClick={handlePrev}
                  >
                    <span className="current prev">
                      <svg
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.0332 11.4861L0.99991 6.24307L6.0332 1.00006"
                          stroke={currentPage === 1 ? "#DAE1E9" : "#71CC98"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.6318 6.24304L1 6.24304"
                          stroke={currentPage === 1 ? "#DAE1E9" : "#71CC98"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </li>
                )}
                {totalPage > 1 ? (
                  Array.from(
                    { length: totalPage },
                    (_, index) => index + 1
                  ).map((page) => (
                    <li
                      className={`pl-[7px] pr-[7px] pt-[11px] pb-[12px] mr-[4px] text-[18px] border-[1px]  leading-[0px] rounded-[3px] font-medium tracking-[1.3px] cursor-pointer ${
                        page === currentPage
                          ? `border-[#71CC98]`
                          : "border-none"
                      }`}
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        scrollToTop();
                      }}
                    >
                      {page}
                    </li>
                  ))
                ) : (
                  <></>
                )}
                {/* <li
                                    className={`pl-[7px] pr-[7px] pt-[11px] pb-[12px] mr-[4px] text-[18px] border-[1px] border-[#71CC98] leading-[0px] rounded-[3px] font-medium tracking-[1.3px] cursor-pointer`}
                                >
                                    1
                                </li>
                                <li
                                    className={`pl-[7px] pr-[7px] pt-[11px] pb-[12px] mr-[2px] text-[18px] font-medium tracking-[1.3px] leading-[0px] cursor-pointer`}
                                >
                                    2
                                </li>
                                <li
                                    className={`pl-[7px] pr-[7px] pt-[11px] pb-[12px] mr-[2px] text-[18px] font-medium tracking-[1.3px] leading-[0px] cursor-pointer`}
                                >
                                    3
                                </li> */}
                {/* <li
                                    className={`pl-[7px] pr-[7px] pt-[11px] pb-[12px] mr-[2px] text-[18px] font-medium tracking-[1.3px] leading-[0px] cursor-pointer `}
                                >
                                    4
                                </li>
                                <li
                                    className={`pl-[7px] pr-[7px] pt-[11px] pb-[12px] mr-[2px] text-[18px] font-medium tracking-[1.3px] leading-[0px] cursor-pointer `}
                                >
                                    ...
                                </li>
                                <li
                                    className={`pl-[7px] pr-[7px] pt-[11px] pb-[12px] ml-[2px] text-[18px] font-medium tracking-[1.3px] leading-[0px] cursor-pointer `}
                                >
                                    10
                                </li> */}
                {totalPage > 1 && (
                  // <li
                  // 	className={`pl-[6px] ${
                  // 		currentPage === totalPage
                  // 			? 'cursor-none'
                  // 			: 'cursor-pointer'
                  // 	}`}
                  // 	onClick={handleNext}
                  // >
                  // 	<span className="current next">
                  // 		<svg
                  // 			width="16"
                  // 			height="13"
                  // 			viewBox="0 0 16 13"
                  // 			fill="none"
                  // 			xmlns="http://www.w3.org/2000/svg"
                  // 		>
                  // 			<path
                  // 				d="M9.59827 11.8596L14.6316 6.61661L9.59827 1.37359"
                  // 				stroke={
                  // 					currentPage === totalPage ? '#DAE1E9' : '#71CC98'
                  // 				}
                  // 				strokeWidth="1.5"
                  // 				strokeLinecap="round"
                  // 				strokeLinejoin="round"
                  // 			/>
                  // 			<path
                  // 				d="M1 6.61658L14.6318 6.61658"
                  // 				stroke={
                  // 					currentPage === totalPage ? '#DAE1E9' : '#71CC98'
                  // 				}
                  // 				strokeWidth="1.5"
                  // 				strokeLinecap="round"
                  // 				strokeLinejoin="round"
                  // 			/>
                  // 		</svg>
                  // 	</span>
                  // </li>
                  <NextPageButton
                    currentPage={currentPage}
                    totalPost={totalPage}
                    handleNext={handleNext}
                  />
                )}
              </ul>
            </div>
          </div>

          {loading ? (
            <Loader />
          ) : (
            data?.resources?.edges?.length === 0 &&
            showDataMain2.length === 0 && (
              <div className="text-center mt-[20px]">
                <h2>No result found</h2>
              </div>
            )
          )}
          {showDataMain2.length === 0 && data2.length > 0 && (
            <div className="text-center mt-[20px]">
              <h2>No result found</h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function Loader() {
  return (
    <div className={`${styles.loader}`}>
      <span className={`${styles.spinner} ${styles.spinner1}`}></span>
      <span className={`${styles.spinner} ${styles.spinner2}`}></span>
      <span className={`${styles.spinner} ${styles.spinner3}`}></span>
    </div>
  );
}

function AddEllipsis() {
  return (
    <li className="pl-[7px] pr-[7px] pt-[11px] pb-[12px] mr-[2px] text-[18px] font-medium tracking-[1.3px] leading-[0px] cursor-pointer">
      ...
    </li>
  );
}

function NextPageButton({ currentPage, totalPage, handleNext }) {
  return (
    <li
      className={`pl-[6px] ${
        currentPage === totalPage ? "cursor-none" : "cursor-pointer"
      }`}
      onClick={handleNext}
    >
      <span className="current next">
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.59827 11.8596L14.6316 6.61661L9.59827 1.37359"
            stroke={currentPage === totalPage ? "#DAE1E9" : "#71CC98"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 6.61658L14.6318 6.61658"
            stroke={currentPage === totalPage ? "#DAE1E9" : "#71CC98"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </li>
  );
}

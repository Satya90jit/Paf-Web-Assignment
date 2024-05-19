import { ICONS } from "@/assets";
import { ArrowDropDown, Search } from "@mui/icons-material";
import { useState } from "react";

const categoryArr = [
  {
    id: 1,
    title: "All",
    path: "",
  },
  {
    id: 2,
    title: "Vedant - Upanishads",
    path: "vedant-upanishads",
    subcategory: [
      { id: 1, title: "Ishavasya Upanishad" },
      { id: 2, title: "Shwetashvatara Upanishad" },
      { id: 3, title: "Fita" },
      { id: 4, title: "Kathopanishad" },
      { id: 5, title: "Niralamba Upanishad" },
      { id: 6, title: "Sarvasara Upanishad" },
    ],
  },
  {
    id: 3,
    title: "Vedant - Bhagavad Gita",
    path: "vedant-bhagavad-gita",
  },
  {
    id: 4,
    title: "Other Scriptures",
    path: "other-scriptures",
    subcategory: [
      { id: 1, title: "Paramahansa Gita" },
      { id: 2, title: "Ribhu Gita" },
      { id: 3, title: "Ajgar Gita" },
      { id: 4, title: "Ashtavakra Gita" },
      { id: 5, title: "Uttara Gita" },
      { id: 6, title: "Jivanmukta Gita" },
      { id: 7, title: "Putra Gita" },
      { id: 8, title: "Avadhuta Gita" },
      { id: 9, title: "Pingla Gita" },
      { id: 10, title: "Yog Vashisth" },
      { id: 11, title: "Shri Ramcharitra Manas" },
      { id: 12, title: "Vivekachudamani" },
      { id: 13, title: "Tatva Bodh" },
      { id: 14, title: "Atma Bodh" },
      { id: 15, title: "Vairagya Shatkam" },
      { id: 16, title: "Shringar Shatkam" },
      { id: 17, title: "Mahabharat" },
      { id: 18, title: "Patanjali Yoga Sutra" },
      { id: 19, title: "Durgasaptashati" },
      { id: 20, title: "Aparokshanubhuti" },
    ],
  },
  {
    id: 5,
    title: "Saints and Masters",
    path: "saints-and-masters",
    subcategory: [
      { id: 1, title: "Meera Bai" },
      { id: 2, title: "Saint Kabir" },
      { id: 3, title: "Saint Raidas" },
      { id: 4, title: "Saint Dariyadas" },
      { id: 5, title: "Saint Sahjobai" },
      { id: 6, title: "Saint Lalleshwari" },
      { id: 7, title: "Saint Rahim" },
      { id: 8, title: "Adi Shankaracharya" },
      { id: 9, title: "Saint Surdas" },
      { id: 10, title: "Tulsidas" },
      { id: 11, title: "Saint Namdev" },
      { id: 12, title: "Saint Dadu Dayal" },
      { id: 13, title: "Guru Nanak" },
      { id: 14, title: "Baba Bulleh Shah" },
      { id: 15, title: "Shree Patanjali" },
      { id: 16, title: "Swami Vivekananda" },
      { id: 17, title: "Shri Krishna" },
      { id: 18, title: "Shri Ram" },
      { id: 19, title: "Buddha" },
      { id: 20, title: "Ramakrishna Paramahamsa" },
      { id: 21, title: "Bhartrih" },
    ],
  },
  {
    id: 6,
    title: "Other Streams",
    path: "other-streams",
    subcategory: [
      { id: 1, title: "Zen" },
      { id: 2, title: "Buddhism" },
      { id: 3, title: "Sikhism" },
      { id: 4, title: "Panchatantra" },
      { id: 5, title: "Jesus" },
      { id: 6, title: "Christianity" },
      { id: 7, title: "Sufism" },
    ],
  },
  {
    id: 7,
    title: "Life Questions",
    path: "life-questions",
    subcategory: [
      { id: 1, title: "Relationships" },
      { id: 2, title: "Career and Job" },
      { id: 3, title: "Overthinking and Loneliness" },
      { id: 4, title: "Depression and Anxiety" },
      { id: 5, title: "Women Liberation" },
      { id: 6, title: "Patriotism" },
      { id: 7, title: "Study and Education" },
      { id: 8, title: "India" },
      { id: 9, title: "Meditation" },
      { id: 10, title: "Environment" },
    ],
  },
];

const SearchBar = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeSubCategoryIndex, setActiveSubCategoryIndex] = useState(-1);

  const activeCategory = categoryArr[activeCategoryIndex];
  const activeTitle =
    activeSubCategoryIndex !== -1
      ? (activeCategory?.subcategory || [])[activeSubCategoryIndex]?.title
      : activeCategory?.title || "All";

  return (
    <section className="flex flex-row gap-3 border items-center justify-center rounded-lg">
      <aside className="relative group">
        <div className="flex items-center border-r p-2">
          <p
            className={`truncate ${
              activeTitle?.length && activeTitle?.length > 10
                ? "md:max-w-xs"
                : "md:max-w-full"
            } text-gray-500 hover:text-gray-600 rounded-md font-medium cursor-pointer whitespace-nowrap text-nowrap`}
          >
            {activeTitle}
          </p>
          <ArrowDropDown className="text-gray-500" />
        </div>
        <div className="hidden sm:block absolute scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-top-left ease-in-out w-56 sm:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] sm:bg-white top-full">
          {categoryArr?.map((item, index) => {
            return (
              <aside
                key={item?.id}
                onClick={() => {
                  setActiveCategoryIndex(index);
                  setActiveSubCategoryIndex(-1);
                }}
                className="feature-category relative text-start p-3 hover:bg-orange-100 group"
              >
                <div className="flex items-center justify-between cursor-pointer">
                  <p className="text-gray-600 hover:text-orange-800 font-medium">
                    {item?.title}
                  </p>
                  {item?.subcategory ? <ICONS.Arrowright /> : null}
                </div>
                {item?.subcategory ? (
                  <div
                    className="inner-category w-56 px-3 absolute hidden left-full top-0 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white"
                    style={{ maxHeight: "17rem", overflowY: "auto" }}
                  >
                    {item?.subcategory?.length === 0 ? (
                      <p className="text-md text-center py-2">No data found.</p>
                    ) : (
                      <>
                        {item?.subcategory?.map((subcategory, subIndex) => (
                          <div
                            key={subcategory?.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveSubCategoryIndex(subIndex);
                            }}
                          >
                            <div className="px-4 py-2 hover:bg-orange-100 hover:text-orange-700 w-full rounded-lg">
                              {subcategory?.title}
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                ) : null}
              </aside>
            );
          })}
        </div>
      </aside>
      <input
        type="text"
        placeholder="Search for video series"
        className={`focus:outline-none ${
          activeTitle?.length && activeTitle?.length > 10
            ? "md:w-1/2"
            : "w-full"
        }`}
      />
      <div className="px-1">
        <Search />
      </div>
    </section>
  );
};
export default SearchBar;

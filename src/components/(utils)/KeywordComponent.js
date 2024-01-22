import React from "react";

const KeywordComponent = ({ data }) => {
  return (
    <div className="flex flex-col items-start gap-2 border rounded-2xl p-4">
      <span className="font-serif text-xl italic text-yellow-500">
        Keywords
      </span>

      {data && (
        <div className="flex items-start flex-wrap cursor-pointer">
          {data.keywords
            ? data.keywords?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border rounded-xl p-1 text-xs  hover:bg-gray-400"
                  >
                    {item.name}
                  </div>
                );
              })
            : "No keywords available"}
        </div>
      )}
    </div>
  );
};

export default KeywordComponent;

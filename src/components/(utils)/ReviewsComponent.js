import React from "react";

const ReviewsComponent = ({ data }) => {
  return (
    <div className="flex flex-col gap-5">
      {data?.map((item, index) => {
        return (
          <div
            className=" flex flex-col gap-5 p-2 rounded-xl border-gray-400 border-2"
            key={index}
          >
            <div className="flex flex-row gap-5">
              {item.author_details.avatar_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${item.author_details.avatar_path}`}
                  alt={`Profile of ${item.author}`}
                  className="w-[50px] rounded-3xl"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                  className="bg-gray-500 p-1 rounded-xl"
                >
                  <path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM7,22V21a5,5,0,0,1,10,0v1Zm15-3a3,3,0,0,1-3,3V21A7,7,0,0,0,5,21v1a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z" />
                  <path d="M12,4a4,4,0,1,0,4,4A4,4,0,0,0,12,4Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,10Z" />
                </svg>
              )}
              <div>
                <div className="flex flex-row items-center gap-3">
                  <h3 className=" font-serif text-xl">A review by</h3>
                  <h4 className="font-bold font-serif text-xl italic">
                    {" "}
                    {item.author}
                  </h4>
                </div>
                <div className="flex flex-row items-center gap-2  ">
                  <div className="bg-yellow-500 rounded-xl p-1 inline-flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                    >
                      <path d="M12,24C5.38,24,0,18.62,0,12S5.38,0,12,0s12,5.38,12,12-5.38,12-12,12ZM12,1C5.93,1,1,5.93,1,12s4.93,11,11,11,11-4.93,11-11S18.07,1,12,1Zm-3.26,16c-.21,0-.42-.07-.6-.2-.34-.25-.48-.7-.35-1.1l.94-3.01-2.37-1.93c-.33-.28-.44-.72-.3-1.11,.14-.39,.52-.65,.94-.65h3l1.06-2.85c.14-.38,.51-.62,.94-.62s.8,.24,.94,.62l1.06,2.85h3c.42,0,.8,.26,.94,.66h0c.14,.39,.03,.84-.29,1.1l-2.37,1.93,.98,2.98c.13,.4,0,.85-.34,1.1-.34,.26-.8,.28-1.15,.05l-2.75-1.79-2.71,1.81c-.17,.11-.37,.17-.56,.17Zm-1.74-7.01l2.62,2.13c.16,.13,.22,.34,.16,.54l-1.04,3.34,2.98-1.99c.17-.11,.38-.11,.55,0l3.03,1.97-1.09-3.31c-.07-.2,0-.41,.16-.54l2.62-2.13h-3.35c-.21,0-.4-.13-.47-.33l-1.18-3.18-1.18,3.18c-.07,.2-.26,.33-.47,.33h-3.35Zm10,0h0Zm0,0h0s0,0,0,0Z" />
                    </svg>
                    <span className="text-xs text-black font-bold">
                      {item.author_details.rating}
                    </span>
                  </div>
                  <div className="text-sm">
                    Written by {item.author} on {item.created_at.split("T")[0]}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm font-serif">{item.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsComponent;

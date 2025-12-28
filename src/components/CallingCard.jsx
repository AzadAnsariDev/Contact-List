import React from "react";

const CallingCard = ({ onEndCall, activeUser }) => {
  let firstLetter = activeUser.name.charAt(0);
  console.log(firstLetter);

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black/70 z-50 flex items-center justify-center">
      <div className="h-[80%] w-[50%] bg-slate-900 px-8 py-4 flex justify-center rounded-3xl">
        <div className="text-5xl text-center text-slate-100 flex flex-col justify-center items-center gap-10  ">
          <div className="h-auto w-fit px-10 py-6 text-black bg-gray-400 rounded-[50%] flex justify-center items-center">
            {firstLetter}
          </div>
          <h1>{activeUser.name}</h1>
          <h1>{activeUser.phone}</h1>
          <h1>Calling...</h1>
          <img
            onClick={onEndCall}
            className="h-20 w-20"
            src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/end-call-icon.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CallingCard;

import React from 'react';

const CardItem = ({ title, number }) => (
    <div className="drop-shadow-lg bg-white p-3 rounded flex justify-between items-center w-[410px] 
    hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer mb-2">
        <div className="i-con">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="50px"
                fill="currentColor"
                className="bi bi-calendar3"
                viewBox="0 0 16 16"
            >
                <path d="M14 0H2a2 2 0 0 0-2 2v12a2..." />
                <path d="..." />
            </svg>
        </div>
        <div className="flex flex-col items-end bg-white">
            <span className="text-lg font-semibold text-gray-600">{title}</span>
            <span className="text-3xl font-bold text-gray-800 text-sky-400/100">{number}</span>
        </div>
    </div>
);

const Card = () => {
    return (
        <div className="flex flex-col">
            {cardData.map((item, index) => (
                <CardItem key={index} title={item.title} number={item.number} />
            ))}
        </div>
    );
};

export default CardItem;

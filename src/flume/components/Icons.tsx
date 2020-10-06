import React, { SVGAttributes } from "react";

// Messages
export const MessageIcon: React.FC<SVGAttributes<SVGElement>> = props=> (
    <svg className="icon" { ...props } width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4C1 2.34315 2.34315 1 4 1H12C13.6569 1 15 2.34315 15 4V8C15 9.65685 13.6569 11 12 11V11C11.4477 11 11 11.4477 11 12V12.8953C11 13.7379 10.0216 14.2028 9.36833 13.6705L6.6426 11.4495C6.28577 11.1588 5.83956 11 5.37926 11H4C2.34314 11 1 9.65685 1 8V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);
export const UnMessageIcon: React.FC<SVGAttributes<SVGElement>> = props=> (
    <svg className="icon" { ...props } width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 6V8C15 9.65685 13.6569 11 12 11V11C11.4477 11 11 11.4477 11 12V12.8953C11 13.7379 10.0216 14.2028 9.36833 13.6705L6.6426 11.4495C6.28577 11.1588 5.83956 11 5.37926 11H4C2.34314 11 1 9.65685 1 8V4C1 2.34315 2.34315 1 4 1H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="2" r="2" fill="currentColor"/>
    </svg>
);
// Menu
export const SearchIcon: React.FC<SVGAttributes<SVGElement>> = props=> (
    <svg className="icon" { ...props } width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.41667" cy="7.41667" r="6.41667" stroke="currentColor" strokeWidth="2"/>
        <path d="M15 15L12.0833 12.0833" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);
export const DotsIcon: React.FC<SVGAttributes<SVGElement>> = props=> (
    <svg className="icon" { ...props } width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1" cy="1" r="1" fill="currentColor"/>
        <circle cx="6" cy="1" r="1" fill="currentColor"/>
        <circle cx="11" cy="1" r="1" fill="currentColor"/>
    </svg>
);
export const VerDotsIcon: React.FC<SVGAttributes<SVGElement>> = props=> (
    <svg className="icon" { ...props } width="2" height="8" viewBox="0 0 2 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1" cy="7" r="1" transform="rotate(-90 1 7)" fill="currentColor"/>
        <circle cx="1" cy="1" r="1" transform="rotate(-90 1 1)" fill="currentColor"/>
    </svg>
);
export const CrossIcon: React.FC<SVGAttributes<SVGElement>> = props=> (
    <svg className="icon" { ...props } width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 1L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M1 1L11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);
// Arrows
export const ArrowDownIcon: React.FC<SVGAttributes<SVGElement>> = props=> (
    <svg className="icon" { ...props } width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const ArrowUpIcon: React.FC<SVGAttributes<SVGElement>> = props=> (
    <svg className="icon" { ...props } width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 6L6 1L11 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const ArrowLeftIcon: React.FC<SVGAttributes<SVGElement>> = props=> (
    <svg className="icon" { ...props } width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 11.5L1.5 6.5L6.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const ArrowRightIcon: React.FC<SVGAttributes<SVGElement>> = props=> (
    <svg className="icon" { ...props } width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 11L6.5 6L1.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
// Checkmarks
export const CheckmarkIcon: React.FC<SVGAttributes<SVGElement>> = props=> (
    <svg className="icon" { ...props } width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5.8L4.6 9.4L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const CheckmarkCircleIcon: React.FC<SVGAttributes<SVGElement>> = props=> (
    <svg className="icon" { ...props } width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12L9 15L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="2"/>
    </svg>
);
export const CheckmarksIcon: React.FC<SVGAttributes<SVGElement>> = props=> (
    <svg className="icon" { ...props } width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6.8L11.6 10.4L20 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 6.8L5.6 10.4L14 2" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 6.8L5.6 10.4L14 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
// Saves
export const SaveIcon: React.FC<SVGAttributes<SVGElement>> = props=> (
    <svg className="icon" { ...props } width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 1V9M9 9L13 5.20001M9 9L5 5.20001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 8.8V9.3C1 11.5091 2.79086 13.3 5 13.3H13C15.2091 13.3 17 11.5091 17 9.3V8.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const SaveStackIcon: React.FC<SVGAttributes<SVGElement>> = props=> (
    <svg className="icon" { ...props } width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 6V6.5C1 8.70914 2.79086 10.5 5 10.5H13C15.2091 10.5 17 8.70914 17 6.5V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 1.5H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 5.5H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);
export const FolderIcon: React.FC<SVGAttributes<SVGElement>> = props=> (
    <svg className="icon" { ...props } width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5.33333C1 4.22876 1.89543 3.33333 3 3.33333H7.9306C8.68814 3.33333 9.38067 2.90533 9.71945 2.22776L9.78055 2.10557C10.1193 1.428 10.8119 1 11.5694 1H13C14.1046 1 15 1.89543 15 3V10.6667C15 11.7712 14.1046 12.6667 13 12.6667H3C1.89543 12.6667 1 11.7712 1 10.6667V5.33333Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
);

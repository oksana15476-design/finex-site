// icons.jsx — minimalist line icon set for FINEX/ВЭД
// All 24x24, stroke 1.6, currentColor

const Icon = ({ children, size = 20, stroke = 1.6, ...rest }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={stroke}
    strokeLinecap="round" strokeLinejoin="round"
    {...rest}
  >{children}</svg>
);

const IcSwift = (p) => (<Icon {...p}>
  <path d="M3 9 L21 9" />
  <path d="M3 15 L21 15" />
  <path d="M7 6 L5 12 L7 18" />
  <path d="M17 6 L19 12 L17 18" />
</Icon>);

const IcArrowRight  = (p) => (<Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>);
const IcArrowLeft   = (p) => (<Icon {...p}><path d="M19 12H5M11 6l-6 6 6 6"/></Icon>);
const IcArrowUp     = (p) => (<Icon {...p}><path d="M12 19V5M6 11l6-6 6 6"/></Icon>);
const IcArrowDown   = (p) => (<Icon {...p}><path d="M12 5v14M6 13l6 6 6-6"/></Icon>);
const IcArrowSwap   = (p) => (<Icon {...p}><path d="M7 4v16M3 8l4-4 4 4"/><path d="M17 20V4M13 16l4 4 4-4"/></Icon>);
const IcChevronDown = (p) => (<Icon {...p}><path d="M6 9l6 6 6-6"/></Icon>);
const IcChevronRight= (p) => (<Icon {...p}><path d="M9 6l6 6-6 6"/></Icon>);

const IcPlus    = (p) => (<Icon {...p}><path d="M12 5v14M5 12h14"/></Icon>);
const IcMinus   = (p) => (<Icon {...p}><path d="M5 12h14"/></Icon>);
const IcCheck   = (p) => (<Icon {...p}><path d="M5 12l4.5 4.5L19 7"/></Icon>);
const IcX       = (p) => (<Icon {...p}><path d="M6 6l12 12M18 6L6 18"/></Icon>);
const IcSearch  = (p) => (<Icon {...p}><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-3.5-3.5"/></Icon>);
const IcFilter  = (p) => (<Icon {...p}><path d="M4 6h16M7 12h10M10 18h4"/></Icon>);
const IcMore    = (p) => (<Icon {...p}><circle cx="5" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.2" fill="currentColor" stroke="none"/></Icon>);

const IcDoc     = (p) => (<Icon {...p}><path d="M7 3h7l4 4v14H7zM14 3v4h4"/><path d="M10 12h6M10 16h6"/></Icon>);
const IcInvoice = (p) => (<Icon {...p}><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 9h6M9 13h6M9 17h3"/></Icon>);
const IcBank    = (p) => (<Icon {...p}><path d="M3 9 L12 4 L21 9"/><path d="M5 9v9M9 9v9M15 9v9M19 9v9M3 20h18"/></Icon>);
const IcGlobe   = (p) => (<Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></Icon>);
const IcShield  = (p) => (<Icon {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/></Icon>);
const IcLock    = (p) => (<Icon {...p}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></Icon>);
const IcEye     = (p) => (<Icon {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="2.5"/></Icon>);
const IcBell    = (p) => (<Icon {...p}><path d="M6 9a6 6 0 0112 0v3l2 4H4l2-4z"/><path d="M10 20a2 2 0 004 0"/></Icon>);
const IcSettings= (p) => (<Icon {...p}><circle cx="12" cy="12" r="2.5"/><path d="M19.4 15a1.7 1.7 0 00.4 1.9l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.4 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.9.4l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.4-1.9 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1A1.7 1.7 0 004.6 9a1.7 1.7 0 00-.4-1.9l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.9.4H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.9-.4l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.4 1.9V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/></Icon>);
const IcUser    = (p) => (<Icon {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6"/></Icon>);
const IcUsers   = (p) => (<Icon {...p}><circle cx="9" cy="9" r="3.5"/><path d="M3 19c.7-3 3-5 6-5s5.3 2 6 5"/><path d="M15 6a3.5 3.5 0 010 6M17 14c2.5.4 4.4 2.3 5 5"/></Icon>);
const IcBriefcase=(p) => (<Icon {...p}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"/></Icon>);
const IcCal     = (p) => (<Icon {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></Icon>);
const IcWallet  = (p) => (<Icon {...p}><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M16 14h2"/></Icon>);
const IcCard    = (p) => (<Icon {...p}><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 11h18"/></Icon>);
const IcChart   = (p) => (<Icon {...p}><path d="M4 20V4M4 20h16"/><path d="M8 16V12M12 16V8M16 16v-6"/></Icon>);
const IcTrend   = (p) => (<Icon {...p}><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></Icon>);
const IcExchange= (p) => (<Icon {...p}><path d="M3 8h13M11 4l5 4-5 4"/><path d="M21 16H8M13 20l-5-4 5-4"/></Icon>);
const IcUpload  = (p) => (<Icon {...p}><path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3"/></Icon>);
const IcDownload= (p) => (<Icon {...p}><path d="M12 4v12M17 11l-5 5-5-5"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3"/></Icon>);
const IcSend    = (p) => (<Icon {...p}><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/></Icon>);
const IcInfo    = (p) => (<Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 8v.01M11 12h1v5h1"/></Icon>);
const IcAlert   = (p) => (<Icon {...p}><path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/></Icon>);
const IcStar    = (p) => (<Icon {...p}><path d="M12 3l3 6 6.5 1-4.7 4.6 1.2 6.4L12 18l-6 3.3 1.2-6.4L2.5 10 9 9z"/></Icon>);
const IcLogout  = (p) => (<Icon {...p}><path d="M10 4H5a1 1 0 00-1 1v14a1 1 0 001 1h5"/><path d="M15 8l4 4-4 4M9 12h10"/></Icon>);
const IcGrid    = (p) => (<Icon {...p}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></Icon>);
const IcList    = (p) => (<Icon {...p}><path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1" fill="currentColor" stroke="none"/><circle cx="4" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="4" cy="18" r="1" fill="currentColor" stroke="none"/></Icon>);
const IcClock   = (p) => (<Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Icon>);
const IcBox     = (p) => (<Icon {...p}><path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v9"/></Icon>);

// Ruble symbol used as a currency mark
const IcRuble   = (p) => (<Icon {...p}><path d="M8 4h6a4 4 0 010 8H6"/><path d="M6 16h10M8 4v16"/></Icon>);

Object.assign(window, {
  Icon, IcSwift, IcArrowRight, IcArrowLeft, IcArrowUp, IcArrowDown, IcArrowSwap,
  IcChevronDown, IcChevronRight, IcPlus, IcMinus, IcCheck, IcX, IcSearch, IcFilter,
  IcMore, IcDoc, IcInvoice, IcBank, IcGlobe, IcShield, IcLock, IcEye, IcBell,
  IcSettings, IcUser, IcUsers, IcBriefcase, IcCal, IcWallet, IcCard, IcChart,
  IcTrend, IcExchange, IcUpload, IcDownload, IcSend, IcInfo, IcAlert, IcStar,
  IcLogout, IcGrid, IcList, IcClock, IcBox, IcRuble
});

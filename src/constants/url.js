const APP_DASHBORAD_URL = process.env.NEXT_PUBLIC_DASHBORAD_URL;

export const getTVLURL = () => `${APP_DASHBORAD_URL}/getTVL`;
export const getstkXPRTLIQUIDITYURL = () =>
  `${APP_DASHBORAD_URL}/stkXPRTLiquidity`;
export const getstkATOMLIQUIDITYURL = () =>
  `${APP_DASHBORAD_URL}/stkATOMLiquidity`;
